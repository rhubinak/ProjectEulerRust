//! Continued fraction generator and related functions.

#![warn(bad_style, missing_docs,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

extern crate integer;
extern crate num;

use std::collections::HashSet;
use std::mem;
use num::Integer as NumInteger;
use integer::Integer;

/// Calculates a square root of the number as continued fraction form.
///
/// `(1, vec![2])` represents 1 + 1 / (2 + 1 / (2 + 1 / (2 + ... )))
/// ```rust
/// assert_eq!((1, vec![2]), cont_frac::sqrt(2));
/// assert_eq!((1, vec![1, 2]), cont_frac::sqrt(3));
/// assert_eq!((2, vec![]), cont_frac::sqrt(4));
/// ```
pub fn sqrt(n: uint) -> (uint, Vec<uint>) {
    let mut a0 = 0;
    let mut an = Vec::new();
    let mut set = HashSet::new();

    for (a, pqr) in A::new(n) {
        if a == 0 || set.contains(&(a, pqr)) {
            break;
        }

        set.insert((a, pqr));
        if set.len() == 1 {
            a0 = a;
        } else {
            an.push(a);
        }
    }
    return (a0, an);

    struct A {
        n: uint,
        sqn: uint,
        pqr: (uint, uint, uint)
    }
    impl A {
        fn new(n: uint) -> A {
            A { n: n, sqn: n.sqrt(), pqr: (1, 0, 1) }
        }

        // a <= f_n(p, q, r) < a + 1
        // r a - q <= p sqrt(n) < r (a + 1) - pq
        // (ar - q)^2 <= np^2 < ((a+1)r - q)^2
        fn calc_a(&self) -> uint {
            // g(a, r, q) := (ar - q)^2
            #[inline]
            fn g(a: uint, r: uint, q: uint) -> uint {
                let s = a * r - q;
                return s * s;
            }

            let &A { n, sqn, pqr: (p, q, r) } = self;
            let np2 = n * p * p;
            let estim_a = (p * sqn + q) / r;
            let mut a = estim_a;
            while g(a + 1, r, q) <= np2 {
                a = a + 1;
            }
            return a;
        }
    }

    impl Iterator<(uint, (uint, uint, uint))> for A {
        // f_n (p, q, r) := (p sqrt(n) + q)/ r
        //                = a + (1 / (rp sqrt(n) + rb) / (np^2 - b^2))
        // a := |f_n(p, q, r)|
        // b := ar - q
        // (p, q, r) := (rp / m, rb / m, (np^2 - b^2) / m)
        #[inline]
        fn next(&mut self) -> Option<(uint, (uint, uint, uint))> {
            let a = self.calc_a();
            let &A { n, pqr: (p, q, r), ..} = self;

            self.pqr = if a * a == n || p == 0 {
                (0, 0, 1)
            } else {
                let b = a * r - q;
                let (p2, q2, r2) = (r*p, r*b, n*p*p - b*b);
                let m = p2.gcd(&q2).gcd(&r2);
                (p2 / m, q2 / m, r2 / m)
            };

            Some((a, self.pqr))
        }
    }
}

/// Calculates convergent of an input iterator.
pub fn fold<T: FromPrimitive + Add<T, T> + Mul<T, T>, I: Iterator<uint> + DoubleEndedIterator<uint>>
    (an: I) -> (T, T) {
    let mut numer: T = FromPrimitive::from_int(1).unwrap();
    let mut denom: T = FromPrimitive::from_int(0).unwrap();

    for a in an.rev() {
        mem::swap(&mut numer, &mut denom);
        let num: T = FromPrimitive::from_uint(a).unwrap();
        numer = numer + num * denom;
    }

    (numer, denom)
}

/// solve pel equation x^2 - d y^2 = 1
pub fn solve_pel<T: FromPrimitive + Add<T, T> + Mul<T, T>>(d: uint) -> (T, T) {
    let (a0, an) = sqrt(d);
    if an.is_empty() {
        panic!("{} is square", d)
    }
    let mut v = vec![a0];
    if an.len() % 2 == 0 {
        v.extend(an.init().iter().map(|&x| x))
    } else {
        v.extend(an.iter().map(|&x| x));
        v.extend(an.init().iter().map(|&x| x))
    }
    fold(v.into_iter())
}

/// solve pel equation x^2 - d y^2 = -1
pub fn solve_pel_neg<T: FromPrimitive + Add<T, T> + Mul<T, T>>(d: uint) -> (T, T) {
    let (a0, an) = sqrt(d);
    let mut v = vec![a0];
    if an.len() % 2 == 0 {
        v.extend(an.iter().map(|&x| x));
        v.extend(an.init().iter().map(|&x| x));
    } else {
        v.extend(an.init().iter().map(|&x| x));
    }
    fold(v.into_iter())
}

/// iterates all (x, y) sufficient x^2 - d y^2 = 1
pub struct PelRoots<T> {
    d: T,
    x1y1: (T, T),
    xy: (T, T)
}

impl<T: Clone + FromPrimitive + Add<T, T> + Mul<T, T>> PelRoots<T> {
    /// Creates a new `PelRoots` iterator
    #[inline]
    pub fn new(d: uint) -> PelRoots<T> {
        let x1y1 = solve_pel(d);
        let xy   = x1y1.clone();
        PelRoots {
            d: FromPrimitive::from_uint(d).unwrap(),
            x1y1: x1y1, xy: xy
        }
    }
}

impl<T: Add<T, T> + Mul<T, T>> Iterator<(T, T)> for PelRoots<T> {
    // x[k] + y[k]sqrt(n) = (x[1] + y[1]*sqrt(n))^k
    // x[k+1] + y[k+1]sqrt(n) = (x[k] + y[k]sqrt(n)) * (x[1] + y[1]*sqrt(n))
    //                        = (x[k]x[1] + n*y[k]y[1]) + (x[1]y[k] + x[k]y[1])sqrt(n)
    #[inline]
    fn next(&mut self) -> Option<(T, T)> {
        let next = {
            let ref d = self.d;
            let (ref x1, ref y1) = self.x1y1;
            let (ref xk, ref yk) = self.xy;
            ((*xk) * (*x1) + (*d) * (*yk) * (*y1),
             (*yk) * (*x1) +        (*xk) * (*y1))
        };

        Some(mem::replace(&mut self.xy, next))
    }
}

/// iterates all (x, y) sufficient x^2 - d y^2 = -1
pub struct PelNegRoots<T> {
    d: T,
    x1y1: (T, T),
    xy: (T, T)
}

impl<T: Clone + FromPrimitive + Add<T, T> + Mul<T, T>> PelNegRoots<T> {
    /// Creates a new `PelNegRoots` iterator
    #[inline]
    pub fn new(d: uint) -> PelNegRoots<T> {
        let x1y1 = solve_pel_neg(d);
        let xy   = x1y1.clone();
        PelNegRoots {
            d: FromPrimitive::from_uint(d).unwrap(),
            x1y1: x1y1, xy: xy
        }
    }
}

impl<T: Add<T, T> + Mul<T, T>> Iterator<(T, T)> for PelNegRoots<T> {
    #[inline]
    fn next(&mut self) -> Option<(T, T)> {
        let next = {
            let ref d = self.d;
            let (ref x1, ref y1) = self.x1y1;
            let (ref xk, ref yk) = self.xy;
            let (xk, yk) = ((*xk) * (*x1) + (*d) * (*yk) * (*y1),
                            (*yk) * (*x1) +        (*xk) * (*y1));
            (xk * (*x1) + (*d) * yk * (*y1),
             yk * (*x1) +        xk * (*y1))
        };

        Some(mem::replace(&mut self.xy, next))
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn sqrt() {
        assert_eq!(super::sqrt(1), (1, vec![]));
        assert_eq!(super::sqrt(2), (1, vec![2]));
        assert_eq!(super::sqrt(3), (1, vec![1,2]));
        assert_eq!(super::sqrt(4), (2, vec![]));
        assert_eq!(super::sqrt(5), (2, vec![4]));
        assert_eq!(super::sqrt(6), (2, vec![2,4]));
        assert_eq!(super::sqrt(7), (2, vec![1,1,1,4]));
        assert_eq!(super::sqrt(8), (2, vec![1,4]));
        assert_eq!(super::sqrt(9), (3, vec![]));
        assert_eq!(super::sqrt(10), (3, vec![6]));
        assert_eq!(super::sqrt(11), (3, vec![3,6]));
        assert_eq!(super::sqrt(12), (3, vec![2,6]));
        assert_eq!(super::sqrt(13), (3, vec![1,1,1,1,6]));
    }

    #[deriving(Eq, PartialEq, Show)]
    struct Uint(uint);

    impl Uint {
        fn unwrap(&self) -> uint {
            let Uint(n) = *self;
            n
        }
    }

    impl FromPrimitive for Uint {
        fn from_i64(n: i64) -> Option<Uint> { FromPrimitive::from_i64(n).map(Uint) }
        fn from_u64(n: u64) -> Option<Uint> { FromPrimitive::from_u64(n).map(Uint) }
    }
    impl Add<Uint, Uint> for Uint {
        fn add(&self, other: &Uint) -> Uint { Uint(self.unwrap() + other.unwrap()) }
    }
    impl Mul<Uint, Uint> for Uint {
        fn mul(&self, other: &Uint) -> Uint { Uint(self.unwrap() * other.unwrap()) }
    }

    #[test]
    fn fold() {
        fn check(an: &[uint], (n, d): (uint, uint)) {
            assert_eq!(super::fold(an.iter().map(|&x| x)), (Uint(n), Uint(d)));
        }

        check(&[1, 2], (3, 2));
        check(&[1, 2, 2], (7, 5));
        check(&[1, 2, 2, 2], (17, 12));
        check(&[1, 2, 2, 2, 2], (41, 29));

        check(&[2], (2, 1));
        check(&[2, 1], (3, 1));
        check(&[2, 1, 2], (8, 3));
        check(&[2, 1, 2, 1], (11, 4));
        check(&[2, 1, 2, 1, 1], (19, 7));
        check(&[2, 1, 2, 1, 1, 4], (87, 32));
        check(&[2, 1, 2, 1, 1, 4, 1], (106, 39));
        check(&[2, 1, 2, 1, 1, 4, 1, 1], (193, 71));
        check(&[2, 1, 2, 1, 1, 4, 1, 1, 6], (1264, 465));
        check(&[2, 1, 2, 1, 1, 4, 1, 1, 6, 1], (1457, 536));
    }

    #[test]
    fn solve_pel() {
        assert_eq!(super::solve_pel(2), (3i, 2));
        assert_eq!(super::solve_pel(3), (2i, 1));
        assert_eq!(super::solve_pel(5), (9i, 4));
        assert_eq!(super::solve_pel(6), (5i, 2));
        assert_eq!(super::solve_pel(7), (8i, 3));
    }
    #[test] #[should_fail]
    fn solve_pel_1() { let _ = super::solve_pel::<uint>(1); }
    #[test] #[should_fail]
    fn solve_pel_4() { let _ = super::solve_pel::<uint>(4); }

}
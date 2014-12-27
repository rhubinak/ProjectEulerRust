#![warn(bad_style,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

#![feature(phase)]

#[phase(plugin, link)] extern crate common;
extern crate integer;
extern crate "iter" as itercrate;
extern crate prime;

use std::iter::{mod, AdditiveIterator, Range, Rev};
use std::num::Int;
use integer::Integer;
use itercrate::BitCombination;
use prime::PrimeSet;

struct Digits<T> {
    radix: T,
    num_digits: uint,
    range: Rev<Range<T>>
}

impl<T: Int> Digits<T> {
    fn new(radix: T, num_digits: uint) -> Digits<T> {
        Digits {
            radix: radix,
            num_digits: num_digits,
            range: range(Int::zero(), radix.pow(num_digits)).rev()
        }
    }
}

impl<T: Int + Integer> Iterator<Vec<T>> for Digits<T> {
    fn next(&mut self) -> Option<Vec<T>> {
        self.range.next().map(|num| {
            let mut ds = num.into_digits(self.radix).rev().collect::<Vec<_>>();
            while ds.len() < self.num_digits { ds.insert(0, Int::zero()); }
            ds
        })
    }
}

struct RunDigits {
    d: u64,
    run_len: uint,
    other_ds: Vec<u64>,
    iter: BitCombination
}

impl RunDigits {
    fn new(run_len: uint, d: u64, other_ds: Vec<u64>) -> RunDigits {
        RunDigits {
            d: d,
            run_len: run_len,
            iter: BitCombination::new(other_ds.len(), other_ds.len() + run_len),
            other_ds: other_ds
        }
    }
}

impl Iterator<u64> for RunDigits {
    fn next(&mut self) -> Option<u64> {
        for set in self.iter {
            let first = if set.contains(&0) { self.other_ds[0] } else { self.d };
            if first == 0 { continue }

            let mut j = 0;
            let mut num = 0;
            for i in range(0, self.other_ds.len() + self.run_len) {
                num = num * 10 + if set.contains(&i) {
                    j += 1;
                    self.other_ds[j - 1]
                } else {
                    self.d
                };
            }

            return Some(num)
        }
        None
    }
}

fn compute_s(ps: &PrimeSet, n: uint, d: u64) -> (uint, uint, u64) {
    for m in iter::range_inclusive(0, n).rev() {
        let mut sum = 0;
        let mut cnt = 0;
        for mut other_ds in Digits::new(9, n - m) {
            for i in other_ds.iter_mut() { if *i >= d { *i += 1; } }

            for num in RunDigits::new(m, d, other_ds) {
                if ps.contains(num) {
                    cnt += 1;
                    sum += num;
                }
            }
        }
        if sum > 0 {
            return (m, cnt, sum)
        }
    }

    (0, 0, 0)
}

fn solve() -> String {
    let n = 10;
    let ps = PrimeSet::new();

    range(0, 10)
        .map(|d| compute_s(&ps, n, d).2)
        .sum()
        .to_string()
}

problem!("612407567715", solve);

#[cfg(test)]
mod tests {
    use std::iter::AdditiveIterator;
    use prime::PrimeSet;

    #[test]
    fn compute_s() {
        let ps = PrimeSet::new();

        assert_eq!((2, 13, 67061), super::compute_s(&ps, 4, 0));
        assert_eq!((3, 9, 22275), super::compute_s(&ps, 4, 1));
        assert_eq!((3, 1, 2221), super::compute_s(&ps, 4, 2));
        assert_eq!((3, 12, 46214), super::compute_s(&ps, 4, 3));
        assert_eq!((3, 2, 8888), super::compute_s(&ps, 4, 4));
        assert_eq!((3, 1, 5557), super::compute_s(&ps, 4, 5));
        assert_eq!((3, 1, 6661), super::compute_s(&ps, 4, 6));
        assert_eq!((3, 9, 57863), super::compute_s(&ps, 4, 7));
        assert_eq!((3, 1, 8887), super::compute_s(&ps, 4, 8));
        assert_eq!((3, 7, 48073), super::compute_s(&ps, 4, 9));

        let total = range(0, 10)
            .map(|d| super::compute_s(&ps, 4, d).2)
            .sum();
        assert_eq!(273700, total);
    }
}
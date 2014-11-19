#![warn(bad_style,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

extern crate common;

use common::Solver;

fn get_cycle_len(n: uint) -> uint {
    if n == 1 { return 1 }
    let mut buf = Vec::from_elem(n, None);
    let mut rem = 1;
    let mut idx = 1;
    loop {
        let new_rem = rem % n;
        match buf[new_rem] {
            Some(i) => { return idx - i }
            None    => { buf[new_rem] = Some(idx); }
        }
        idx += 1;
        rem = new_rem * 10;
    }
}

fn compute(limit: uint) -> uint {
    range(2, limit)
        .max_by(|&n| get_cycle_len(n))
        .unwrap()
}

fn solve() -> String {
    compute(1000).to_string()
}

fn main() { Solver::new("983", solve).run(); }

#[cfg(test)]
mod tests {
    #[test]
    fn ten() {
        assert_eq!(7, super::compute(10));
    }
}
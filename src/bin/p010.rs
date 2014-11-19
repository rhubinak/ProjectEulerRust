#![warn(bad_style,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

extern crate common;
extern crate prime;

use std::iter::AdditiveIterator;
use common::Solver;
use prime::PrimeSet;

fn compute(limit: u64) -> u64 {
    let ps = PrimeSet::new();
    ps.iter()
        .take_while(|&p| p < limit)
        .sum()
}

fn solve() -> String { compute(2000000).to_string() }

fn main() { Solver::new("142913828922", solve).run(); }

#[cfg(test)]
mod tests {
    #[test]
    fn four_seq() {
        assert_eq!(17, super::compute(10));
    }
}
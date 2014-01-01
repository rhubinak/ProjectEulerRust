#[crate_type = "rlib"];

extern mod data;
extern mod math;

use std::vec;
use data::monoid::{Max, MergeMultiMonoidIterator, Wrap};
use math::prime;
use math::prime::{Prime, FactorIterator};

pub static EXPECTED_ANSWER: &'static str = "232792560";

pub fn solve() -> ~str {
    let prime = Prime::new();
    let fs = vec::from_fn(20, |i| prime::factorize(&prime, i + 1).map(|(base, exp)| (base, Max(exp))));
    let mut it = MergeMultiMonoidIterator::new(fs).map(|(base, m)| (base, m.unwrap()));
    return it.to_uint().to_str();
}

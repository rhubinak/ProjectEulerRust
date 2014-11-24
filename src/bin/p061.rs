#![warn(bad_style,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

#![feature(slicing_syntax)]

extern crate common;

use std::iter::{mod, AdditiveIterator};
use common::Solver;

fn triangle(n: uint) -> uint { n * (n + 1) / 2 }
fn square(n: uint) -> uint { n * n }
fn pentagonal(n: uint) -> uint { n * (3 * n - 1) / 2 }
fn hexagonal(n: uint) -> uint { n * (2 * n - 1) }
fn heptagonal(n: uint) -> uint { n * (5 * n - 3) / 2 }
fn octagonal(n: uint) -> uint { n * (3 * n - 2) }

fn create_map(fs: &[fn(uint) -> uint]) -> Vec<Vec<Vec<uint>>> {
    fs.iter().map(|&f| {
        let mut result = Vec::from_fn(100, |_| Vec::with_capacity(100));
        for i in iter::count(1, 1) {
            let n = f(i);
            if n > 9999 { break }

            if n < 1000 { continue }
            let (hi, lo) = (n / 100, n % 100);
            if lo < 10 { continue }

            result[hi].push(lo);
        }
        result
    }).collect()
}

fn find_cycle(map: &mut [Vec<Vec<uint>>]) -> Vec<Vec<uint>> {
    let head = &map[map.len() - 1];

    let mut result = vec![];
    for maps in map[ .. map.len() - 1].permutations() {
        for (lst, fsts) in head.iter().enumerate() {
            for &fst in fsts.iter() {
                for mut v in find_chain(fst, lst, maps[]).into_iter() {
                    v.push(fst);
                    result.push(v)
                }
            }
        }
    }
    result
}

fn find_chain(fst: uint, lst: uint, maps: &[Vec<Vec<uint>>]) -> Vec<Vec<uint>> {
    if maps.is_empty() {
        if fst == lst {
            return vec![vec![]]
        }
        return vec![]
    }

    let mut result = vec![];
    for &n in maps[0][fst].iter() {
        for mut v in find_chain(n, lst, maps[1 ..]).into_iter() {
            v.push(n);
            result.push(v)
        }
    }
    result
}

fn cycle_to_nums(map: &[uint]) -> Vec<uint> {
    let mut result = map.to_vec();
    for (i, &n) in map[1 ..].iter().enumerate() {
        result[i] += 100 * n
    }
    result[map.len() - 1] += 100 * map[0];
    result
}

fn solve() -> String {
    let map = &[triangle, square, pentagonal, hexagonal, heptagonal, octagonal];
    find_cycle(create_map(map).as_mut_slice())
        .iter()
        .map(|vs| cycle_to_nums(vs[]).into_iter().sum())
        .sum()
        .to_string()
}

fn main() { Solver::new("28684", solve).run(); }

#[cfg(test)]
mod tests {
    #[test]
    fn three() {
        let map = &[super::triangle, super::square, super::pentagonal];
        let cycle = super::find_cycle(super::create_map(map).as_mut_slice())
            .iter()
            .map(|vs| super::cycle_to_nums(vs[]))
            .map(|mut vs| { vs.sort(); vs })
            .collect::<Vec<_>>();
        assert_eq!([vec![2882, 8128, 8281]][], cycle[]);
    }
}

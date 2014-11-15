//! Data types that represent playing cards.

#![warn(bad_style, missing_docs,
        unused, unused_extern_crates, unused_import_braces,
        unused_qualifications, unused_results, unused_typecasts)]

#![feature(if_let)]

use std::{char, fmt};
use std::from_str::FromStr;

/// Playing card's suite.
#[allow(missing_docs)]
#[deriving(Eq, PartialEq, Clone)]
pub enum Suit {
    Spade,
    Heart,
    Dia,
    Club
}

impl fmt::Show for Suit {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        let s = match self {
            &Spade => "S",
            &Heart => "H",
            &Dia   => "D",
            &Club  => "C"
        };

        write!(f, "{}", s)
    }
}

impl FromStr for Suit {
    fn from_str(s: &str) -> Option<Suit> {
        if s.len() != 1 { return None; }
        return match s {
            "S" => Some(Spade),
            "H" => Some(Heart),
            "D" => Some(Dia),
            "C" => Some(Club),
            _   => None
        };
    }
}

/// Playing card that only contains suit cards.
#[allow(missing_docs)]
#[deriving(Eq, PartialEq, Clone)]
pub struct SuitCard {
    pub num: uint,
    pub suit: Suit
}

impl fmt::Show for SuitCard {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            SuitCard { num: 1,  suit: s } => write!(f, "A{}", s),
            SuitCard { num: 10, suit: s } => write!(f, "T{}", s),
            SuitCard { num: 11, suit: s } => write!(f, "J{}", s),
            SuitCard { num: 12, suit: s } => write!(f, "Q{}", s),
            SuitCard { num: 13, suit: s } => write!(f, "K{}", s),
            SuitCard { num: n,  suit: s } => write!(f, "{}{}", n, s)
        }
    }
}

impl FromStr for SuitCard {
    fn from_str(s: &str) -> Option<SuitCard> {
        if s.len() != 2 { return None }
        let (c0, c1) = s.slice_shift_char();
        let suit = FromStr::from_str(c1);
                let num = match c0.unwrap() {
                    'A' => Some(1),
                    'T' => Some(10),
                    'J' => Some(11),
                    'Q' => Some(12),
                    'K' => Some(13),
                    d => char::to_digit(d, 10)
                };
        if let (Some(n), Some(s)) = (num, suit) {
            Some(SuitCard { num: n, suit: s })
        } else {
            None
        }
    }
}

/// Playing card that also contaiins jokers.
#[allow(missing_docs)]
#[deriving(Eq, PartialEq, Clone)]
pub enum Card {
    SuitCard_(SuitCard),
    BlackJoker,
    WhiteJoker
}

impl fmt::Show for Card {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            BlackJoker => write!(f, "BJ"),
            WhiteJoker => write!(f, "WJ"),
            SuitCard_(sc) => write!(f, "{}", sc),
        }
    }
}

impl FromStr for Card {
    fn from_str(s: &str) -> Option<Card> {
        match s {
            "BJ" => Some(BlackJoker),
            "WJ" => Some(WhiteJoker),
            _    => FromStr::from_str(s).map(|sc| SuitCard_(sc))
        }
    }
}

impl Card {
    /// Creates new `SuitCard_`.
    pub fn new(n: uint, s: Suit) -> Card {
        SuitCard_(SuitCard { num: n, suit: s })
    }
}

#[cfg(test)]
mod tests {
    use super::{Suit, Spade, Heart, Dia, Club, Card, WhiteJoker, BlackJoker};

    #[test]
    fn show_suit() {
        fn check_pair(s: String, suite: Suit) {
            assert_eq!(s, format!("{}", suite));
            assert_eq!(Some(suite), from_str(s.as_slice()));
        }
        check_pair("S".to_string(), Spade);
        check_pair("H".to_string(), Heart);
        check_pair("D".to_string(), Dia);
        check_pair("C".to_string(), Club);
    }

    #[test]
    fn show_card() {
        fn check_pair(s: String, card: Card) {
            assert_eq!(s, format!("{}", card));
            assert_eq!(Some(card), from_str(s.as_slice()));
        }
        check_pair("BJ".to_string(), BlackJoker);
        check_pair("WJ".to_string(), WhiteJoker);
        check_pair("AH".to_string(), Card::new(1, Heart));
        check_pair("2C".to_string(), Card::new(2, Club));
        check_pair("9D".to_string(), Card::new(9, Dia));
        check_pair("TS".to_string(), Card::new(10, Spade));
        check_pair("JH".to_string(), Card::new(11, Heart));
        check_pair("QC".to_string(), Card::new(12, Club));
        check_pair("KD".to_string(), Card::new(13, Dia));
    }
}

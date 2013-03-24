use common::problem::{ Problem };

pub static problem: Problem<'static> = Problem {
    id: 45,
    answer: "1533776805",
    solver: solve
};

fn triangle(i: uint) -> uint {
    let n = i + 1;
    return n * (n + 1) / 2;
}

fn pentagonal(i: uint) -> uint {
    let n = i + 1;
    return n * (3 * n - 1) / 2;
}

fn hexagonal(i: uint) -> uint {
    let n = i + 1;
    return n * (2 * n - 1);
}

fn solve() -> ~str {
    let mut n = 40755 + 1;
    let mut t_i = 0;
    let mut p_i = 0;
    let mut h_i = 0;

    loop {
        let mut t = triangle(t_i);
        while t < n {
            t_i += 1;
            t = triangle(t_i);
        }
        if t > n { n = t; }

        let mut p = pentagonal(p_i);
        while p < n {
            p_i += 1;
            p = pentagonal(p_i);
        }
        if p > n { n = p; loop; }

        let mut h = hexagonal(h_i);
        while h < n {
            h_i += 1;
            h = hexagonal(h_i);
        }
        if h > n { n = h; loop; }

        break;
    }

    return triangle(t_i).to_str();
}

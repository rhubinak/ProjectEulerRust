(function() {var implementors = {};
implementors["arrayvec"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"arrayvec/struct.IntoIter.html\" title=\"struct arrayvec::IntoIter\">IntoIter</a>&lt;A&gt;",synthetic:false,types:["arrayvec::IntoIter"]},{text:"impl&lt;'a, A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"arrayvec/struct.Drain.html\" title=\"struct arrayvec::Drain\">Drain</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a>: 'a,&nbsp;</span>",synthetic:false,types:["arrayvec::Drain"]},];
implementors["bit_vec"] = [{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.Iter.html\" title=\"struct bit_vec::Iter\">Iter</a>&lt;'a, B&gt;",synthetic:false,types:["bit_vec::Iter"]},{text:"impl&lt;B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.IntoIter.html\" title=\"struct bit_vec::IntoIter\">IntoIter</a>&lt;B&gt;",synthetic:false,types:["bit_vec::IntoIter"]},{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"bit_vec/trait.BitBlock.html\" title=\"trait bit_vec::BitBlock\">BitBlock</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"bit_vec/struct.Blocks.html\" title=\"struct bit_vec::Blocks\">Blocks</a>&lt;'a, B&gt;",synthetic:false,types:["bit_vec::Blocks"]},];
implementors["either"] = [{text:"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = L::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>&gt;,&nbsp;</span>",synthetic:false,types:["either::Either"]},];
implementors["integer"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"integer/struct.Digits.html\" title=\"struct integer::Digits\">Digits</a>&lt;T&gt;",synthetic:false,types:["integer::Digits"]},];
implementors["itertools"] = [{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Positions.html\" title=\"struct itertools::structs::Positions\">Positions</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>,&nbsp;</span>",synthetic:false,types:["itertools::adaptors::Positions"]},{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.Update.html\" title=\"struct itertools::structs::Update\">Update</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(&amp;mut I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>),&nbsp;</span>",synthetic:false,types:["itertools::adaptors::Update"]},{text:"impl&lt;X, Iter, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, C, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;X, Iter, B, C, D, E, F, G, H&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ConsTuples.html\" title=\"struct itertools::structs::ConsTuples\">ConsTuples</a>&lt;Iter, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>B, C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Iter: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>B, C, D, E, F, G, H<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>, X<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;,&nbsp;</span>",synthetic:false,types:["itertools::cons_tuples_impl::ConsTuples"]},{text:"impl&lt;I, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.PadUsing.html\" title=\"struct itertools::structs::PadUsing\">PadUsing</a>&lt;I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; I::<a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/iter/iterator/trait.Iterator.html#associatedtype.Item\" title=\"type core::iter::iterator::Iterator::Item\">Item</a>,&nbsp;</span>",synthetic:false,types:["itertools::pad_tail::PadUsing"]},{text:"impl&lt;I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RcIter.html\" title=\"struct itertools::structs::RcIter\">RcIter</a>&lt;I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a>,&nbsp;</span>",synthetic:false,types:["itertools::rciter_impl::RcIter"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.RepeatN.html\" title=\"struct itertools::structs::RepeatN\">RepeatN</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["itertools::repeatn::RepeatN"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"itertools/structs/struct.ZipLongest.html\" title=\"struct itertools::structs::ZipLongest\">ZipLongest</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.ExactSizeIterator.html\" title=\"trait core::iter::traits::ExactSizeIterator\">ExactSizeIterator</a>,&nbsp;</span>",synthetic:false,types:["itertools::zip_longest::ZipLongest"]},];
implementors["num_iter"] = [{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"num_iter/struct.Range.html\" title=\"struct num_iter::Range\">Range</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>,&nbsp;</span>",synthetic:false,types:["num_iter::Range"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"num_iter/struct.RangeInclusive.html\" title=\"struct num_iter::RangeInclusive\">RangeInclusive</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;A, Output = A&gt; + <a class=\"trait\" href=\"num_integer/trait.Integer.html\" title=\"trait num_integer::Integer\">Integer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"num_traits/cast/trait.ToPrimitive.html\" title=\"trait num_traits::cast::ToPrimitive\">ToPrimitive</a>,&nbsp;</span>",synthetic:false,types:["num_iter::RangeInclusive"]},];
implementors["phf"] = [{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/map/struct.Entries.html\" title=\"struct phf::map::Entries\">Entries</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::map::Entries"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/map/struct.Keys.html\" title=\"struct phf::map::Keys\">Keys</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::map::Keys"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/map/struct.Values.html\" title=\"struct phf::map::Values\">Values</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::map::Values"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/set/struct.Iter.html\" title=\"struct phf::set::Iter\">Iter</a>&lt;'a, T&gt;",synthetic:false,types:["phf::set::Iter"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/ordered_map/struct.Entries.html\" title=\"struct phf::ordered_map::Entries\">Entries</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::ordered_map::Entries"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/ordered_map/struct.Keys.html\" title=\"struct phf::ordered_map::Keys\">Keys</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::ordered_map::Keys"]},{text:"impl&lt;'a, K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/ordered_map/struct.Values.html\" title=\"struct phf::ordered_map::Values\">Values</a>&lt;'a, K, V&gt;",synthetic:false,types:["phf::ordered_map::Values"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"phf/ordered_set/struct.Iter.html\" title=\"struct phf::ordered_set::Iter\">Iter</a>&lt;'a, T&gt;",synthetic:false,types:["phf::ordered_set::Iter"]},];
implementors["serde_json"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Iter.html\" title=\"struct serde_json::map::Iter\">Iter</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Iter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IterMut.html\" title=\"struct serde_json::map::IterMut\">IterMut</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::IterMut"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.IntoIter.html\" title=\"struct serde_json::map::IntoIter\">IntoIter</a>",synthetic:false,types:["serde_json::map::IntoIter"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Keys.html\" title=\"struct serde_json::map::Keys\">Keys</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Keys"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.Values.html\" title=\"struct serde_json::map::Values\">Values</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::Values"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/trait.DoubleEndedIterator.html\" title=\"trait core::iter::traits::DoubleEndedIterator\">DoubleEndedIterator</a> for <a class=\"struct\" href=\"serde_json/map/struct.ValuesMut.html\" title=\"struct serde_json::map::ValuesMut\">ValuesMut</a>&lt;'a&gt;",synthetic:false,types:["serde_json::map::ValuesMut"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

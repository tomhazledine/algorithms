/**
 * ---------------------------------------
 * Fisher-Yates
 * 
 * An in-place algorithm that produces a
 * random permutation of an array/vector,
 * where every possible permutation occurs
 * with uniform probability.
 * ---------------------------------------
 */
function shuffle(array) {
    let n = array.length;
    // i from 0 to n-2, inclusive.
    for (var i = 0; i < ( n - 1 ); i++) {
        // j from i to n-1, inclusive.
        let j = Math.floor( (Math.random() * (n - i) ) + i );
        // swap a[i] and a[j].
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * -----------------------------------------------
 * Sattolo
 *
 * A permutation where no element ends up in its
 * original position is called a derangement.
 * Sattolo’s algorithm generates derangements, but
 * it only generates derangements with exactly one
 * cycle, and there are derangements with more
 * than one cycle (e.g., 3 2 1 0), so can’t
 * possibly generate random derangements with
 * uniform probability.
 * -----------------------------------------------
 */
function sattolo(array) {
    let n = array.length;
    for (var i = 0; i < ( n - 1 ) ; i++) {
        // i+1 instead of i
        let j = random.randrange(i+1, n)
        let j = Math.floor( (Math.random() * (n - ( i + 1 ) ) ) + ( i + 1 ) );
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

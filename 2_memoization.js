function fibonacci(n) {
  if (n <= 0) return 0
  if (n == 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// The starter code is a naive recursive solution for the computing the nth number in the Fibonacci sequence.
// Runtime complexity: O(2^n)
// Space complexity: O(n)

// This is a very commonly used example of repeated computations that can (and should!) be optimized with memoization, and the runtime problem is best illustrated by a tree diagram of fibonacci() calls. Google "recursive fibonacci diagram" in case you haven't seen that visual before.

// The total number of calls to the fibonacci function grows exponentially as n increases, causing a major runtime issue that will grind things to a halt, even before n gets that large.

// The easy fix here is to "remember the answer" to problems we've already solved, and this is called memoization. By simply keeping a map of all the fibonacci values we've already calculated, then we'll avoid having to repeat that work again later on.

// Specifically, the natural way to use a map (hash map) data structure here is as a kind of lookup table. After finding a solution for a given n, store a key/value pair where the key is n and the value is fibonacci(n). Then when you need that solution to build up to a higher level in the sequence, look it up in the map (a constant time operation!) rather than repeating all the work again.

// Optimize this naive solution to implement this memoization approach, for a Fibonacci implementaiton with linear O(n) (rather than exponential) runtime.

// Test cases:
console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(8)) // 21
console.log(fibonacci(17)) // 1597
// console.log(fibonacci(58)) // 591286729879

// Note: the final test case is commented out since it will blow up on even a very fast computer. With the memoized solution though, this test case will also run easily.

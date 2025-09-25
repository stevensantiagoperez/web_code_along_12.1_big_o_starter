const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function alphabet(n) {
  // your code here
  const lookup = new Map
  for (let i = 0; i < n; i++){
    lookup.set(i, letters[i])
  }
  return lookup
}

// Build a map to lookup the first n lowercase letters of the alphabet.
//  The return value of alphabet() should be a map where the keys are numbers 0-25

// Note: there are no performance gains to be gained from this kind of approach
//  in the real world...it is just intended for practice working with the map 
// data structure :)

// Test cases:
const lowercase = alphabet(26)
console.log(lowercase.get(9)) // j

const both_cases = alphabet(52)
console.log(both_cases.get(51)) // Z

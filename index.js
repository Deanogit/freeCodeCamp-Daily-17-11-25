// Fingerprint Test
// Given two strings representing fingerprints, determine if they are a match using the following rules:

// Each fingerprint will consist only of lowercase letters (a-z).
// Two fingerprints are considered a match if:
// They are the same length.
// The number of differing characters does not exceed 10% of the fingerprint length.

function isMatch(fingerprintA, fingerprintB) {
  // check the length
  console.log(fingerprintA, fingerprintB);
  if (fingerprintA.length === fingerprintB.length) {
    console.log('so far so good');
    // now maybe convert to array or set...?
    // set finds unique characters, if there are more than 10% of a.length then fail..?
    const lettersA = new Set();
    const lettersB = new Set();
    // convert to arrays
    const arrayA = fingerprintA.split('');
    const arrayB = fingerprintB.split('');
    console.log(arrayA.length, arrayB.length);
    // add the prints to set
    arrayA.map((x) => lettersA.add(x));
    // check the size of the set
    console.log(lettersA.size);
    arrayB.map((x) => lettersB.add(x));
    // check the size of the set
    console.log(lettersB.size);
    // check how many different letters there are
    const test = lettersA.difference(lettersB);
    console.log(test.size);
    // check if test.size is less than 10% of fingerprintA.length
    return test.size + 1 <= arrayA.length;
    //
    // let length = fingerprintA.match(fingerprintB)
    //console.log(length)
    // if (fingerprintA.length / 100 * 10 >= length.length) {
    // console.log("We have a match")
    // return true
  }
  //console.log(fingerprintA.length / 100 * 10)
  return false;
}
//}

// isMatch("helloworld", "jelloworld")

// Create a Set
// const letters = new Set();

isMatch(
  'thequickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthehazycat'
);

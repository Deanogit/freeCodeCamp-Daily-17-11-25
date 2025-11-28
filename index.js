// Fingerprint Test
// Given two strings representing fingerprints, determine if they are a match using the following rules:

// Each fingerprint will consist only of lowercase letters (a-z).
// Two fingerprints are considered a match if:
// They are the same length.
// The number of differing characters does not exceed 10% of the fingerprint length.

function isMatch(fingerprintA, fingerprintB) {
  console.log(fingerprintA, fingerprintB);
  // check the regex
  const regex = /[a-z]+/;
  if (regex.test(fingerprintA) && regex.test(fingerprintB)) {
    // check the length
    //  console.log(fingerprintA, fingerprintB)
    if (fingerprintA.length === fingerprintB.length) {
      console.log('so far so good');
      // now maybe convert to array or set...?
      // set finds unique characters, if there are more than 10% of a.length then fail..?
      const lettersA = new Set();
      const lettersB = new Set();
      const lettersC = new Set();
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
      arrayA.map((x) => lettersC.add(x));
      arrayB.map((x) => lettersC.add(x));
      // check the size of the set
      console.log(lettersC.size);
      // check how many different letters there are
      const test = lettersA.difference(lettersB);
      console.log(lettersC.difference(lettersA));
      console.log(lettersC.difference(lettersB));
      console.log(test);
      console.log(test.size);
      // check if test.size is less than 10% of fingerprintA.length
      // console.log("true")
      console.log(typeof test.size);
      const percent = (fingerprintB.length / 100) * 10;
      console.log('print size: ', percent);
      if (test.size <= percent) {
        return true;
      } else {
        return false;
      }
      // return test.size  <= percent;
      //
      // let length = fingerprintA.match(fingerprintB)
      //console.log(length)
      // if (fingerprintA.length / 100 * 10 >= length.length) {
      // console.log("We have a match")
      // return true
    }
    //console.log(fingerprintA.length / 100 * 10)
    //return false
  }
}
//}

// isMatch("helloworld", "jelloworld")

// Create a Set
// const letters = new Set();

isMatch(
  'thequickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthehazycat'
);

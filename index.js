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
    let length = fingerprintA.match(fingerprintB);
    console.log(length);
    if ((fingerprintA.length / 100) * 10 >= length.length) {
      console.log('We have a match');
      return true;
    }
    //console.log(fingerprintA.length / 100 * 10)
  }
  return false;
}

// isMatch("helloworld", "jelloworld")

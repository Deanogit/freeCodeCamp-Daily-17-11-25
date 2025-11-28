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

      // use another technique where a counter is created to count the different array entries when compared
      // console.log(arrayA, arrayB)

      function compareArrays(a, b) {
        let counter = [];
        for (let i = 1; i <= a.length; i++) {
          if (a[i] !== b[i]) counter.push(b[i]);
        }
        return counter;
      }

      const filtered = compareArrays(arrayA, arrayB);
      console.log('This is the filtered array: ', filtered, filtered.length);

      // check filtered.length is less than 10% of array.length
      return filtered.length <= (arrayA.length / 100) * 10;

      // console.log(arrayA.length, arrayB.length)
      // add the prints to set
      // arrayA.map((x) => lettersA.add(x))
      // check the size of the set
      // console.log("Letters A: ", lettersA.size)
      // arrayB.map((x) => lettersB.add(x))
      // check the size of the set
      // console.log("Letters B: ", lettersB.size)
      // arrayA.map((x) => lettersC.add(x))
      // arrayB.map((x) => lettersC.add(x))
      // check the size of the set
      // console.log("Letters C: ", lettersC.size)
      // check how many different letters there are
      // const test = lettersA.difference(lettersB)
      // console.log(lettersC.difference(lettersA))
      // console.log(lettersC.difference(lettersB))
      // console.log(test)
      // console.log(test.size)
      // check if test.size is less than 10% of fingerprintA.length
      // console.log("true")
      // console.log(typeof test.size)
      // const percent = fingerprintB.length / 100 * 10;
      // console.log("print size: ", percent)
      // if (test.size <= percent) {
      //   return true
      // } else {
      //   return false
    }
    return false;
    // return test.size  <= percent;
    //
    // let length = fingerprintA.match(fingerprintB)
    //console.log(length)
    // if (fingerprintA.length / 100 * 10 >= length.length) {
    // console.log("We have a match")
    // return true
    // }
    //console.log(fingerprintA.length / 100 * 10)
    //return false
  }
}
//}

// isMatch("helloworld", "jelloworld")

// Create a Set
// const letters = new Set();

// const compareArrays = (a, b) => {
//   if (a.length !== b.length) return false;
//   else {
//     // Comparing each element of your array
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };

// let array1 = [21, null, 33];
// let array2 = [21, 22, 23];
// let array3 = [21, undefined, 33];
// let array4 = [21, 22, 23];

// console.log(compareArrays(array1, array2)); //false
// console.log(compareArrays(array1, array3)); //false
// console.log(compareArrays(array2, array4)); //true

isMatch(
  'thequickbrownfoxjumpsoverthelazydog',
  'thequickbrownfoxjumpsoverthehazycat'
);

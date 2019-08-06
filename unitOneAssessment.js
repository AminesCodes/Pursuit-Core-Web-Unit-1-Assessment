let assert = require('assert')

// Question One:
// Write a function called isOdd that returns whether or not a number is odd.
// If something that is not a number is passed in, return false.
const isOdd = (num) => num % 2 === 1

// Uncomment out the next line to test your solution
runQ1Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Two:
// Write a function called numberOfDigits that returns how many digits are in a given number
const numberOfDigits = (num) => {
  let str = num.toString();
  return str.length;
}
// Uncomment out the next line to test your solution
runQ2Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Three:
// Write a function called disemvowel that removes all of the vowels from a string.
// Treat y as a consonant, not a vowel
const disemvowel = (str) => {
  let lowerStr = str.toLowerCase();
  let noVowels = '';
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] !== 'a' &&
        lowerStr[i] !== 'e' &&
        lowerStr[i] !== 'i' &&
        lowerStr[i] !== 'o' &&
        lowerStr[i] !== 'u' ) {
          noVowels += str[i];
        }
  }
  return noVowels;
}
// Uncomment out the next line to test your solution
runQ3Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Four:
// Write a function called secondSmallest that returns the second smallest number in an array
const secondSmallest = (array) => {
  let smallest = Infinity;
  let secondSmallest;
  array.map(num => {
    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest) {
        secondSmallest = num;
    }
  })
  return secondSmallest;
}
// Uncomment out the next line to test your solution
runQ4Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Five:
// Write a function called getLocations that takes in an array of objects that look like the array below,
// and returns an array of the strings corresponding to the value of the location property
// The output should be in the same order as the input

// Sample input:
// [{location: "Algeria", population: 41}, {location: "Belize", population: 0.4}, {location: "China", population: 1386}, {location: "Denmark", population: 6}]

// Sample output:
// ["Algeria", "Belize", "China", "Denmark"]
const getLocations = (array) => { 
  let keys = [];
  for (let object of array) {
      keys.push(object.location)
  }
  return keys;
}
// Uncomment out the next line to test your solution
runQ5Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Six:
// Write a function called onlyOddStrings that takes in an array of strings as input and returns an array that only 
// includes strings with an odd number of characters
// Your function should use a higher-ordered function (e.g map, filter, reduce, every, sort) in its implementation
const onlyOddStrings = (array) => {
  return array.filter(string => string.length %2 === 1)
}
// Uncomment out the next line to test your solution
runQ6Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// Question Seven:
// a.
// Make a class called Day
// Give it two properties set by the constructor named temperature and weather
// Give it a method named getDescription that returns a string in the format described below

// Example
// let myDay = Day(80, "sunny")
// myDay.getDescription() // returns "It is 80 degrees and sunny"

class Day {
  constructor(temperature, weather) {
    this.temperature = temperature;
    this.weather = weather;
  }
  getDescription() {
    let description = `It is ${this.temperature} degrees and ${this.weather}`;
    console.log(description);
    return description;
  }
}
//b.
// Make a function called getAllDayDescriptions that takes in an array of Day objects 
// and returns an array of their descriptions.  Use a higher-ordered function 
// (e.g map, filter, reduce, every, sort) in your implementation.
// The output should be in the same order as the input
const getAllDayDescriptions = (arrayOfDayObjects) => {
  return arrayOfDayObjects.map(dayObject => {
    return dayObject.getDescription();
  });
}
// Uncomment out the next line to test your solution
// let d1 = new Day(50, "raining");
// let d2 = new Day(99, "sunny");
// let d3 = new Day(24, "snowing");
// let arr = [d1, d2, d3];

// console.log(`\n================`)
// let a = getAllDayDescriptions(arr);
runQ7Tests()
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



// The code below is used to test your solutions.  Feel free to look over it, but do not change any of it.

function TestCase(input, output) {
  this.input = input
  this.output = output
  this.formattedInput = () => {
    return JSON.stringify(this.input)
  }
}

function runTests(questionNum, testCases, testCallback) {
  console.log(`Question ${questionNum} Tests`)
  try {
    for (let testCase of testCases) {
      console.log(`Running ${testCallback.name}(${testCase.formattedInput()})`)
      assert.strictEqual(JSON.stringify(testCallback(testCase.input)), JSON.stringify(testCase.output))
    }
    console.log(`All Question ${questionNum} tests passed!\n`)
  }
  catch(error) {
    if (error.expected === undefined) {
      console.log("An unexpected error occurred running the test")
      console.log(error)
    } else {
      console.log(`\nTest failed.  Was expecting "${error.expected}", but got "${error.actual}"`)
    }
  }
}

function runQ1Tests() {
  let testCases = [
    new TestCase(1,true),
    new TestCase(3, true),
    new TestCase(5, true),
    new TestCase(7, true),
    new TestCase("3", true),
    new TestCase(0, false),
    new TestCase(2, false),
    new TestCase(4, false),
    new TestCase(10, false),
    new TestCase(NaN, false),
    new TestCase("hi", false)
  ]
  runTests("One", testCases, isOdd)
}

function runQ2Tests() {
    let testCases = [
      new TestCase(4,1),
      new TestCase(14,2),
      new TestCase(8473,4),
      new TestCase(73746, 5)
    ]
    runTests("Two", testCases, numberOfDigits)
}

function runQ3Tests() {
  let testCases = [
    new TestCase("hello", "hll"),
    new TestCase("What's up?", "Wht's p?"),
    new TestCase("aeaeae", ""),
    new TestCase("y doesn't count", "y dsn't cnt"),
    new TestCase("CAPITAL LETTERS DO COUNT", "CPTL LTTRS D CNT"),
  ]
  runTests("Three", testCases, disemvowel)
}

function runQ4Tests() {
  let testCases = [
    new TestCase([5,1,4,2,5,6], 2),
    new TestCase([1,10,7,90,5,4], 4),
    new TestCase([2,1,4,90,5,6], 2),
    new TestCase([1,3,4,90,5,6], 3)
  ]
  runTests("Four", testCases, secondSmallest)
}

function runQ5Tests() {
  let testCases = [
    new TestCase(
      [
        {location: "Algeria", population: 41},
        {location: "Belize", population: 0.4},
        {location: "China", population: 1386},
        {location: "Denmark", population: 6}
      ],
      ["Algeria", "Belize", "China", "Denmark"]
    ),
    new TestCase([{location: "England", population: 56}], ["England"]),
    new TestCase([], [])
  ]
  runTests("Five", testCases, getLocations)
}

function runQ6Tests() {
  let testCases = [
    new TestCase(
      ["a", "bb", "ccc", "dddd", "eeeee"],
      ["a", "ccc", "eeeee"]
    ),
    new TestCase(
      ["Four", "score", "and", "seven", "years", "ago"],
      ["score", "and", "seven", "years", "ago"]
    ),
    new TestCase(
      ["The", "only", "thing", "we", "have", "to", "fear", "is", "fear", "itself"],
      ["The", "thing"],
    ),
    new TestCase(
      ["one", "two", "three", "four"],
      ["one", "two", "three"]
    ),
    new TestCase([],[]),
    new TestCase(["a"],["a"]),
    new TestCase(["to"],[])
  ]
  runTests("Six", testCases, onlyOddStrings)
}

function runQ7Tests() {
  let testCases = [
    new TestCase(
      [
        new Day(50, "raining"),
        new Day(99, "sunny"),
        new Day(24, "snowing")
      ],
      [
        "It is 50 degrees and raining",
        "It is 99 degrees and sunny",
        "It is 24 degrees and snowing",
      ]
    ),
    new TestCase(
      [
        new Day(31, "sleeting"),
        new Day(88, "partly cloudy")
      ],
      [
        "It is 31 degrees and sleeting",
        "It is 88 degrees and partly cloudy",
      ]
    ),
    new TestCase([], [])
  ]
  runTests("Seven", testCases, getAllDayDescriptions)
}

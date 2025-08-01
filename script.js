// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Part 1: ---------------------------------------------------------------------------------------------|
 //Check if all numbers are divisible by 5. Cache the result in a variable.
 // First plan: check if the last digit of the number is a 5 or a 0
//  const isDivisibleby5 =(n1[-1] == 0 || n1[-1] ==5) && (n2[-1] == 0 || n2[-1] ==5) && (n3[-1] == 0|| n3[-1] == 5) && (n4[-1] == 0|| n4[-1] ==5);

// Second alternative plan: determine if the type of the sum of the remainders after diving by 5 is float or not
 const isDivisibleby5 = typeof ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5)) !== "float";
//  console.log(`${n1}, ${n2}, ${n3} and ${n4} are all divisible by 5`);
 console.log(isDivisibleby5)

 // Third alternative: check of the sum of the modular division is 0
 const isDivisibleby5a = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ==0;

 // Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;

//Accomplish the following arithmetic chain:

// Subtract the first number from the second number.
const difference = n2-n1

// Multiply the result by the third number.
const product = (difference * n3)

// Find the remainder of dividing the result by the fourth number.
const remaiNder = (product % n4)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.// 

const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Part 2: ---------------------------------------------------------------------------------------------|
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
const distance = 1500;
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
const fuelEfficiency55 = 30;
// At 60 miles per hour, you get 28 miles per gallon.
const fuelEfficiency60 = 28;
// At 75 miles per hour, you get 23 miles per gallon.
const fuelEfficiency75 = 23;
// You have a fuel budget of $175.
const budget = 175;
// The average cost of fuel is $3 per gallon.
const fuelCost = 3;
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

// cost and budget traveling at 55 miles per hour
const fuelNeeded55 = distance/fuelEfficiency55;
const costAt55 = fuelNeeded55 * fuelCost;
const tripLength55 = distance / 55;

console.log(`At an average speed of 55 miles per hour, the trip will take ${tripLength55} hours and will cost ${costAt55} dollars. Because the budget is ${budget}, it will be enough for the trip.`)

// cost and budget traveling at 60 miles per hour
const fuelNeeded60 = distance/fuelEfficiency60;
const costAt60 = fuelNeeded60 * fuelCost;
const tripLength60 = distance / 60;

console.log(`At an average speed of 60 miles per hour, the trip will take ${tripLength60} hours and will cost ${costAt60} dollars. Because the budget is ${budget}, it will be enough for the trip.`)

// cost and budget traveling at 75 miles per hour
const fuelNeeded75 = distance/fuelEfficiency75;
const costAt75 = fuelNeeded75 * fuelCost;
const tripLength75 = distance / 70;

console.log(`At an average speed of 75 miles per hour, the trip will take ${tripLength75} hours and will cost ${costAt75} dollars. Because the budget is ${budget}, it will NOT be enough for the trip.`)



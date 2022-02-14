/**
 * This file contain basics of variable and datatypes in JS.
 * 
 * @author premaluu
 * @since 14 Feb 2022
 */

// Variables
let name = 'Premal';
console.log(name);

let firstName = 'Premal';
let lastName = 'Upadhyay';

console.log(firstName);
console.log(lastName);

// Constants
const interestRate = 0.3;
interestRate = 1; // Causes an error as we are changing the constant.
console.log(interestRate);

// Datatypes

// Primitive/value types

let fullname = 'Premal Upadhyay'; // String Literal.
let age = 21; // Number Literal.
let isApproved = false; // Boolean Literal.
let test = undefined; // If we not assign any value variable it will by default undefined.
let testNull = null; // Used to clear the value of variable.

console.log(' String : ' + fullname + ' Number : ' + age + ' Boolean : ' + isApproved + ' Undefined : ' + test + ' Null : ' + testNull);
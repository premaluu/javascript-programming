/**
 * This file contain sign up app to demonstrate the use of variables and datatype.
 * 
 * @author premaluu
 * @since 24 Feb 2022
 */

// Falsy values
// undefined
// null
// 0
// ''
// NaN

var user = "null";

if(user) {
    console.log("Condition is true.");
}

console.log(2 + 2); // 4
console.log(2 + "2"); // 22
console.log("2" + 2); // 22

// Coercion
 var test = 2;

 // Checking with the equality operator, which will return true, but it is'nt since type of both operands are different.
 if (test == "2") {
     console.log("Condition is true.");
 }

 //Checking with the strict equality operator, which will return false, because it will also compare the type of each operands.
 if (test === "2") {
     console.log("Condition is true.");
 }
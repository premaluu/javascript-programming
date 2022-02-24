/**
 * This file contain sign up app to demonstrate the use of variables and datatype.
 * 
 * @author premaluu
 * @since 24 Feb 2022
 */

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login sucess");
} else {
    console.log("Auth failed");
}
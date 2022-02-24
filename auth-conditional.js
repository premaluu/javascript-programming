/**
 * This file contain authentication functionality example.
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
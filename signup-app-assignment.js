/**
 * This file contain sign up app to demonstrate the use of variables and datatype.
 * 
 * @author premaluu
 * @since 24 Feb 2022
 */

var firstName = "Premal";
var lastName = "Upadhyay";
var email = "premalupadhyay56@gmail.com";
var password = "premal123";
var confirmPassword = "premal123";
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;
var courseCount = 4;
var country = "India";
var state = "Gujarat";


console.log(`
    Full name : ${firstName}
    Email : ${email}
    Password : ${password}
    Confirm password : ${confirmPassword}
    User is ${isLoggedInFromGoogle} from google.
    User is ${isLoggedInFromFacebook} from Facebook.
    User has taken ${courseCount} courses.
    User is living in ${country} in ${state}.
`);
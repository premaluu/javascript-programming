/**
 * This file contains switch case example.
 * 
 * @author premaluu
 * @since 24 Feb 2022
 */

var user = "user";

switch(user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("Get access to create/delete courses");
        break;
    case "testprep":
        console.log("Gets access to creat/delete tests");
        break;
    case "user":
        console.log("Get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}
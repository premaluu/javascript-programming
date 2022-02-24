/**
 * This file contain sign up app to demonstrate the use of variables and datatype.
 * 
 * @author premaluu
 * @since 24 Feb 2022
 */


//Formula
// D = (L - S)/L * 100

var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100

var displayDiscountPercentage = Math.round(discountPrice);

console.log(displayDiscountPercentage + "% off");
/**
 * This file contains demo of operators..
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
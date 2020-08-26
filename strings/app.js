
var text = "String: ";
var string = "Hello World";
//var sentence = "The length of " +string+ " is ";

document.getElementById("span").innerHTML = text;
document.getElementById("string").innerHTML = string;

//length method
var length = "Length method: ";
document.getElementById("text").innerHTML = length + string.length;

//replace method
var replace = "Replace method: ";
document.getElementById("text2").innerHTML = replace + string.replace("World", "Mars");

//toUpperCase()
var upper = "Upper method: ";
document.getElementById("text3").innerHTML = upper + string.toUpperCase();

//toLowerCase()
var lower = "Lower method: ";
document.getElementById("text4").innerHTML = lower + string.toLowerCase();

//access property
var charAt = "access property: ";
document.getElementById('text5').innerHTML = charAt + string[0];







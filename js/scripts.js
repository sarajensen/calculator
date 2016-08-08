var add = function(number1, number2) {
	return number1 + number2;
};
var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter a number to add:"));
alert(add(number1, number2));

var subtract = function(number1, number2) {
	return number1 - number2;
};
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter a number to subtract:"));
alert(subtract(number1, number2));

var multiply = function(number1, number2) {
	return number1 * number2;
};
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter a number to multiply:"));
alert(multiply(number1, number2));

var divide = function(number1, number2) {
	return number1 / number2;
};
var number1 = parseInt(prompt("Enter a number"));
var number2 = parseInt(prompt("Enter a number to divide:"));
alert(divide(number1, number2));

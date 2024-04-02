// Exercise 1:
// Declare a variable, name, and assign it a string value representing your name.
// Declare another variable, greeting, and assign it a string value like "Hello, ".
// Concatenate greeting and name together and store it in a new variable called welcomeMessage.
// Display welcomeMessage using console.log().

var myName = "Mike";
var greeting = "Hello, ";
var welcomeMessage = greeting + myName;
console.log(welcomeMessage);

// Exercise 2
// Declare a variable, temperatureC, and assign it a numeric value representing the current temperature in Celsius.
// Declare a second variable, temperatureF, that is the fahrenheit conversion of temperateC
// Write an if statement to check if the temperature is greater than 80 degrees fahrenheit.
// If it is, display a message saying "It's a hot day!" using console.log(). Otherwise, display "It's not too hot today."

var temperatureC = 6;
var temperatureF = (temperatureC * 9) / 5 + 32;
if (temperatureF > 80) {
  console.log("It's a hot day!");
} else {
  console.log("It's not too hot today.");
}

// Exercise 3
// Declare a variable, count, and assign it an initial value of 0.
// Use a while loop to display the value of count by 5s in the console until it reaches 50.
// Increment the value of count by 5 within the loop.

var count = 0;
while (count < 55) {
  console.log(count);
  count += 5;
}


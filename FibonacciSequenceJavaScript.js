var userInput = parseInt(prompt("How many terms in the Fibonacci series do you want to see?"));

var num1 = 0;
var num2 = 1;
var temp;

for(i=1;i<=userInput;i++){
  temp = num1 + num2;
  console.log(num1);
  num1 = num2;
  num2 = temp;
}
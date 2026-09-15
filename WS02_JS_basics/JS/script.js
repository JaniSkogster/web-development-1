const userName = "Jani";
let age = 20;
const favouriteAnimal = "Cat";

console.log(userName);
console.log(age);
console.log(favouriteAnimal);

console.log(
  `Hello! My name is ${userName} and my favourite animal is the ${favouriteAnimal}.`
);

const name = prompt("What is your name?");

console.log(`Hello ${name}! Welcome to JavaScript.`);

const userAge = Number(prompt("How old are you?"));

if (userAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are under 18.");
}

function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("John");
greetUser("Juho");
greetUser("Emma");
greetUser("Alex");

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("JavaScript works fine! I'm still learning.");
});
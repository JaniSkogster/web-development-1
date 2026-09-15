// Exercize 2
const userName = "Jani";
let age = 20;
const favouriteAnimal = "Kissa";

console.log(userName);
console.log(age);
console.log(favouriteAnimal);

console.log(
  `Hei! Minun nimeni on ${userName} ja minun lempieläimeni on ${favouriteAnimal}.`
);
// Exercize 3
const name = prompt("Mikä sinun nimesi on?");

console.log(`Hello ${name}! Tervetuloa JavaScriptiin.`);

// Exercize 4
const userAge = Number(prompt("Kuinka vanha olet?"));

if (userAge >= 18) {
  console.log("Olet aikuinen.");
} else {
  console.log("Olet alle 18.");
}
// Exercize 5
function greetUser(name) {
  console.log("Hei " + name + "!");
}

greetUser("John");
greetUser("Juho");
greetUser("Emma");
greetUser("Alex");

// Exercize 6
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("JavaScripti toimii hyvin! Opin vielä JavaScripiä");
});
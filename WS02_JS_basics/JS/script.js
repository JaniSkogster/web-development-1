// 
const userName = "Jani";
let age = 20;
const favouriteAnimal = "Kissa";

console.log(userName);
console.log(age);
console.log(favouriteAnimal);

console.log(
  `Hei! Minun nimeni on ${userName} ja minun lempieläimeni on ${favouriteAnimal}.`
);

const name = prompt("Mikä sinun nimesi on?");

console.log(`Hello ${name}! Tervetuloa JavaScriptiin.`);

const userAge = Number(prompt("Kuinka vanha olet?"));

if (userAge >= 18) {
  console.log("Olet aikuinen.");
} else {
  console.log("Olet alle 18.");
}

function greetUser(name) {
  console.log("Hei " + name + "!");
}

greetUser("John");
greetUser("Juho");
greetUser("Emma");
greetUser("Alex");

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("JavaScripti toimii hyvin! Opin vielä JavaScripiä");
});
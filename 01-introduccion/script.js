console.log("Hello World!");

// VARIABLES
let edad = 31; // Puede cambiar
const nombre = "Toni"; // No se puede cambiar
var apellido = "Delgado"; // No usar más, porque no entiende de scope

// TIPOS
let firstName = "Toni"; // STRING
let age = 31; // NUMBER
let isSingle = true; // BOOLEAN
let notDefined = undefined; // UNDEFINED
let person = { name, age, isSingle, links: ["tonii.dev", "halvingmanagermusic.com"] }; // OBJECT
let persons = ["person", "person2", "person3"]; // ARRAY

// MÉTODOS
firstName = firstName.toUpperCase();
persons.push("person4");
person.links.push("flownomada.com");

console.log(person);
console.log(person["links"]); // ES LO MISMO QUE console.log(person.links);

// FUNCIONES
// Formato clásico (declaración)
function sumarClasico(parametro1, parametro2) {
  const suma = parametro1 + parametro2;
  return suma;
}

// Formato actual (function expression)
const sumarActual = (parametro1, parametro2) => {
  const suma = parametro1 + parametro2;
  return suma;
};

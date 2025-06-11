// --------------------
// TIPOS DE DATOS COMPLEJOS
// --------------------

// Nos vamos a concentrar en dos tipos de datos complejos muy importantes en JavaScript: 
// objetos y arreglos (arrays). En esta etapa del curso los veremos de manera simplificada, 
// lo cual será suficiente para usarlos en situaciones básicas. Más adelante se abordarán 
// técnicas más avanzadas.

// --------------------
// Objeto (Object)
// --------------------

// Los objetos en JavaScript tienen muchos usos. El más básico, y el único que veremos 
// por ahora, es utilizarlos como una estructura tipo "registro". En informática, un 
// registro es un conjunto de campos con nombre. Cada campo tiene un nombre (clave o key) 
// y un valor. En JavaScript, estos campos se llaman propiedades.

// Un objeto permite almacenar múltiples valores de distintos tipos en una sola unidad. 
// Podemos crear objetos con varias técnicas, pero la más simple es usando llaves {}.

let testObj = {};
console.log(typeof testObj); // -> object

// Este objeto está vacío. Podemos agregarle propiedades 
// (pares clave-valor) al momento de crearlo:

let testObj2 = {
nr: 600,
str: "text"
};

// Cada propiedad se separa con una coma. Podemos acceder a ellas usando notación de punto:

console.log(testObj2.nr); // -> 600
console.log(testObj2.str); // -> text

// ¿Por qué usar objetos? Un caso común es agrupar datos relacionados. Por ejemplo, 
// si queremos almacenar información de usuarios:

let name1 = "Calvin";
let surname1 = "Hart";
let age1 = 66;
let email1 = "CalvinMHart@teleworm.us";

let name2 = "Mateus";
let surname2 = "Pinto";
let age2 = 21;
let email2 = "MateusPinto@dayrep.com";

// Esto funciona, pero tiene dos problemas:

//  - Necesitamos variables distintas para cada usuario.
//  - Debemos saber de antemano cuántos usuarios habrá.

// Ambos problemas se pueden mejorar usando objetos y luego arrays.

let user1 = {
name: "Calvin",
surname: "Hart",
age: 66,
email: "CalvinMHart@teleworm.us"
};

let user2 = {
name: "Mateus",
surname: "Pinto",
age: 21,
email: "MateusPinto@dayrep.com"
};

// Leer y modificar propiedades:
console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus

console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67

// También podemos agregar nuevas propiedades:

console.log(user2.phone); // -> undefined
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

// Eliminar propiedades:
delete user2.phone;
console.log(user2.phone); // -> undefined


// --------------------
// ARREGLOS (ARRAYS)
// --------------------

// Un array es una estructura que almacena una colección ordenada de elementos. A diferencia
// de los objetos, no hay claves con nombre, sino índices numéricos que empiezan desde 0.

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri

// Podemos modificar valores:

days[0] = "Sunday";
console.log(days[0]); // -> Sunday

// Y crear arrays vacíos:

let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

// Agregar valores en índices específicos (incluso dejando huecos):

let animals = [];
animals[0] = "dog";
animals[2] = "cat";

console.log(animals[0]); // -> dog
console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat

// Un array puede contener datos de cualquier tipo:

let values = ["Test", 7, 12.3, false];

// E incluso otros arrays:

let names = [
    ["Olivia", "Emma", "Mia", "Sofia"], 
    ["William", "James", "Daniel"]
];

console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James

let femaleNames = names[0];

console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia

// Podemos almacenar objetos dentro de arrays para manejar varios usuarios:

let users = [
{
name: "Calvin",
surname: "Hart",
age: 66,
email: "CalvinMHart@teleworm.us"
},
{
name: "Mateus",
surname: "Pinto",
age: 21,
email: "MateusPinto@dayrep.com"
}
];

console.log(users[0].name); // -> Calvin
console.log(users[1].age); // -> 21

// Y agregar más usuarios dinámicamente:

users[2] = {
name: "Irene",
surname: "Purnell",
age: 32,
email: "IreneHPurnell@rhyta.com"
};

console.log(users[2].name); // -> Irene

// ¿Un array es un objeto?
// Sí. Técnicamente, en JavaScript casi todo es un objeto, incluyendo los arrays:

console.log(typeof users); // -> object
console.log(users instanceof Array); // -> true

// --------------------
// MÉTODOS Y PROPIEDADES DE ARRAYS
// --------------------

// .length – Muestra cuántos elementos (incluyendo vacíos) tiene el array.

let names2 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names2.length); // -> 4

names2[5] = "Amelia";
console.log(names2.length); // -> 6
console.log(names2); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia"]

// .indexOf(valor) – Devuelve el índice del valor dado o -1 si no está.

console.log(names2.indexOf("Mateo")); // -> 2
console.log(names2.indexOf("Victor")); // -> -1

// .push(valor) – Agrega un elemento al final.

names2.push("Lucas");
console.log(names2); // -> ["Olivia", "Emma", "Mateo", "Samuel", undefined, "Amelia", "Lucas"]

// .unshift(valor) – Agrega un elemento al principio.

names2.unshift("Isabella");
console.log(names2); // -> ["Isabella", "Olivia", ..., "Lucas"]

// .pop() – Elimina el último elemento y lo retorna.

let last = names2.pop();
console.log(last); // -> Lucas
console.log(names2); // sin "Lucas"

// .shift() – Elimina el primer elemento y lo retorna.

let first = names2.shift();
console.log(first); // -> Isabella
console.log(names2); // sin "Isabella"

// .reverse() – Invierte el orden de los elementos.

names2.reverse();
console.log(names2);

// .slice() – Crea un nuevo array con parte de los elementos. (no modifica el original)

let n1 = names2.slice(2);
let n2 = names2.slice(1, 3);
let n3 = names2.slice(0, -1);
let n4 = names2.slice(-1);

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(names2); // el original sigue igual

// .concat() – Une dos arrays sin modificar los originales.

let otherNames = ["William", "Jane"];
let allNames = names2.concat(otherNames);

console.log(names2);
console.log(otherNames);
console.log(allNames);

// --------------------
// Conclusión
// --------------------

/*
    Los objetos son ideales para agrupar datos relacionados bajo un solo nombre, mientras que 
    los arrays son útiles para manejar colecciones ordenadas de datos, incluyendo objetos. 
    Ambos son pilares fundamentales en JavaScript, y más adelante los veremos combinados con 
    bucles y funciones para lograr soluciones más potentes.
*/


// Ejercicios

// Pregunta 1 - Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. 
// El objeto debe tener tres

/*
    campos:

        - estación de origen (clave from, usa como valor el nombre de la estación más cercana a tu zona);
        - estación de destino (clave to, usa como valor cualquier otra estación a menos de 100 km);
        - precio del boleto (clave price, asigna el valor que te gustaría pagar por ese boleto).

    El objeto debe crearse utilizando llaves ({}), incluyendo todos los campos inmediatamente. Luego, 
    muestra los valores de todos los campos del objeto ticket en la consola.
*/

// Respuesta:

let ticket = {
    from : "Santiago",
    to : "Arica",
    price : 60000 
};

console.log("\nEjercicio 01: \n")
console.log(`Ticket from: ${ticket.from}`);
console.log(`Ticket to: ${ticket.to}`);
console.log(`Ticket price: ${ticket.price}`);


// Pregunta 2 - Declara un objeto vacío y guárdalo en la variable person. Utilizando la notación 
// de punto (.), agrega los campos name (nombre) y surname (apellido) al objeto, introduciendo 
// tus datos como valores. Intenta mostrar cada uno de los campos por separado en la consola.

let person = {};
person.name = "Pipe";
person.surname = "Dev";

console.log("\nEjercicio 02:\n");
console.log(`Name: ${person.name}`);
console.log(`Surname: ${person.surname}`);


// Pregunta 3 - Estamos organizando nuestra pequeña biblioteca de libros sobre programación en 
// JavaScript. Tenemos tres libros y queremos preparar una lista con ellos. Vamos a almacenar 
// tres datos de cada libro: título, autor y número de páginas:

/*
        - Speaking JavaScript, Axel Rauschmayer, 460 páginas;
        - Programming JavaScript Applications, Eric Elliott, 254 páginas;
        - Understanding ECMAScript 6, Nicholas C. Zakas, 352 páginas.

    Crea un arreglo con tres objetos que representen los libros. Cada objeto debe tener las 
    siguientes propiedades: title, author y pages.
*/

// Respuesta:

let books = [
    {
        title : "Speaking JavaScript", 
        author : "Axel Rauschmayer", 
        pages : 460
    }, 
    {
        title : "Programing JavaScript Applications", 
        author : "Eric Elliott", 
        pages : 254
    }, 
    {
        title : "ECMAScript 6", 
        author : "Nicholas C. Zakes", 
        pages : 352
    } 
];


// Pregunta 4: Agrega un nuevo libro a la colección: Learning JavaScript Design Patterns, 
// de Addy Osmani, 254 páginas. Usa el método apropiado para agregar el libro al final del arreglo. 
// Muestra la longitud del arreglo y, a continuación, los títulos de todos los libros en la colección.

// Respuesta:

// books.push({title : "Learning JavaScript Design Patterns", author: "Addy Osmani", price: 254});

let newBook = {
    title : "Learning JavaScript Design Patterns", 
    author: "Addy Osmani", 
    pages: 254
};

books.push(newBook);

console.log("\nEjercicio 04:\n");
console.log(`01 - ${books[0].title}`);
console.log(`02 - ${books[1].title}`);
console.log(`03 - ${books[2].title}`);
console.log(`04 - ${books[3].title}`);


// Pregunta 5 - Utiliza el método slice para copiar los dos últimos libros a un nuevo arreglo.

// Respuesta:

let newArray = books.slice(2); // o -2 como indice

console.log(`\nEjercicio 05:\n`);
console.log(`01 - ${newArray[0].title}`);
console.log(`02 - ${newArray[1].title}`);


// Pregunta 6 - El primer libro de la colección se ha perdido en circunstancias inexplicables. 
// Ya has aceptado la pérdida, así que elimínalo del arreglo. ¿Qué método usarías para esto? 
// Muestra la longitud del arreglo y los títulos de todos los libros restantes en la colección.

// Respusta:

books.shift();

console.log(`\nEjercicio 06:\n`);
console.log(`La longitud del arreglo es: ${books.length}`)
console.log(`01 - ${books[0].title}`);
console.log(`02 - ${books[1].title}`);
console.log(`03 - ${books[2].title}`);


// Pregunta 7 - Muestra la suma total de las páginas de todos los libros de la colección.

// Respuesta:

let totalPages = books[0].pages  + books[1].pages + books[2].pages;

console.log(`\nEjercicio 07:\n`);
console.log(`Total de páginas de la colección de libros: ${totalPages}\n`)



// Laboratorio - Tipos de datos

/*
    Tiempo estimado:
    15–30 minutos

    Nivel de dificultad:
    Fácil

    Objetivos:
    Familiarizar al estudiante con:

    las propiedades básicas de los tipos de datos complejos como Array y Object (tratado como un registro), 
    y ser capaz de usarlos en la práctica.

    Escenario:
    ¿Recuerdas la lista de contactos que creaste en el ejercicio del laboratorio anterior? Hay que admitir 
    que, a primera vista, se veía bastante extraña. Tuvimos que usar nueve variables para almacenar información 
    sobre solo tres usuarios. Peor aún, agregar un nuevo usuario requeriría la creación de tres variables más. 
    Esto no es ni conveniente ni práctico.

    Afortunadamente, desde entonces hemos aprendido algo sobre arreglos (arrays) y objetos, lo que nos permitirá 
    guardar nuestra lista de una forma un poco más conveniente. Usando los mismos datos que en el laboratorio 
    anterior, crea la lista de contactos como un arreglo, donde cada elemento será un objeto que describa a un 
    único usuario. Así obtendremos un arreglo de tres elementos, y cada objeto contenido en él tendrá tres 
    datos: nombre, teléfono y correo electrónico.

    Al final de la lista declarada de esta manera, agrega un nuevo contacto utilizando el método adecuado del 
    arreglo. El nuevo contacto es: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

    Muestra en consola el primer y el último contacto, nuevamente en el formato: 
    nombre / teléfono / correo electrónico. Usa la propiedad length del arreglo para determinar el índice 
    del último elemento. Recuerda que los elementos de un arreglo se indexan comenzando desde 0.
*/

// Respuesta:

let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, 
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }
];

let newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};

contacts.push(newContact);

let lastItem = contacts.length - 1;

console.log(`Respuesta:\n`);
console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[lastItem].name} / ${contacts[lastItem].phone} / ${contacts[lastItem].email}`);

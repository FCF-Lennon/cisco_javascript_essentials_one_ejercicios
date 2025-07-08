
// FUNCIONES EN JAVASCRIPT – PARTE 1

/* 
    ¿Qué es una función?

    Una función es un bloque de código independiente que ejecuta una tarea específica. 
    Puede ser reutilizada múltiples veces, lo cual mejora la modularidad y la claridad del código.
*/

// Ejemplo sin funciones:

let temperatures;
let sum;
let meanTemp;

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> 16.666...

temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
sum = 0;
for (let i = 0; i < temperatures.length; i++) {
  sum += temperatures[i];
}
meanTemp = sum / temperatures.length;
console.log(`mean: ${meanTemp}`); // -> 18.083...

/* Se repite código. Vamos a modularizarlo usando funciones. */


// Declaración de funciones


/* 
    La sintaxis básica para declarar funciones es:

    function nombreFuncion() {
        // instrucciones
    }
*/

function getMeanTemp() {
  sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  meanTemp = sum / temperatures.length;
}

/* Solo hemos definido la función; aún no se ejecuta. */


// Llamado de funciones

let temperatures2;
let meanTemp2;

function getMeanTemp2() {
  sum = 0;
  for (let i = 0; i < temperatures2.length; i++) {
    sum += temperatures2[i];
  }
  meanTemp2 = sum / temperatures2.length;
}

temperatures2 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp2();
console.log(`mean: ${meanTemp2}`);

temperatures2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp2();
console.log(`mean: ${meanTemp2}`);

/* Las funciones se pueden declarar antes o después de su uso, debido a que son elevadas (hoisting). */


// Variables locales

/* Las variables declaradas dentro de funciones con let o var solo son accesibles dentro de esa función. */

let temperatures3;
let meanTemp3;

function getMeanTemp3() {
  let sum = 0;
  for (let i = 0; i < temperatures3.length; i++) {
    sum += temperatures3[i];
  }
  meanTemp3 = sum / temperatures3.length;
}


/* Declarar `sum` como variable local mejora la claridad del código. */


// La instrucción return

function showMsg() {
  console.log("message 1");
  return;
  // console.log("message 2"); // nunca se ejecuta
}
showMsg(); // -> message 1

function getTrue() {
  return true;
}

let test = getTrue();
console.log(test); // -> true

// Mejorando getMeanTemp para retornar el resultado:

let temperatures4;

function getMeanTemp4() {
  let sum = 0;
  for (let i = 0; i < temperatures4.length; i++) {
    sum += temperatures4[i];
  }
  return sum / temperatures4.length;
}

temperatures4 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
let mean1 = getMeanTemp4();
console.log(`mean: ${mean1}`);

temperatures4 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
let mean2 = getMeanTemp4();
console.log(`mean: ${mean2}`);

/* También podemos insertar directamente la llamada dentro del console.log */

console.log(`mean: ${getMeanTemp4()}`);


// Parámetros

/* Se declaran en los paréntesis de la función y permiten pasar valores externos. */

function add(first, second) {
  return first + second;
}

let result = add(5, 7);
console.log(result); // -> 12

function getElement(elements, index) {
  return elements[index];
}

let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve

// Refactorizando getMeanTemp para usar parámetros:

function getMeanTemp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
let day2 = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];

console.log(`mean: ${getMeanTemp(day1)}`); // -> 16.666...
console.log(`mean: ${getMeanTemp(day2)}`); // -> 18.083...


// Sombras (Shadowing)

/* 
    Si un parámetro o variable local tiene el mismo nombre que una global, "sombrea" 
    (oculta) la global dentro de su alcance. 
*/

function addShadow(first, second) {
  return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(addShadow(first, second)); // -> 30
console.log(addShadow(second, third)); // -> 60
console.log(addShadow(third, fourth)); // -> 120

// Otro ejemplo con variables globales, locales y parámetros:

let a = 100, b = 200, c = 300;

function test(a) {
  let b = 10;
  console.log(a); // parámetro (sombra global): 1
  console.log(b); // variable local: 10
  console.log(c); // variable global: 300
}

test(1);
// -> 1
// -> 10
// -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300

/* Las variables dentro de una función tienen prioridad sobre las del exterior si se llaman igual. */

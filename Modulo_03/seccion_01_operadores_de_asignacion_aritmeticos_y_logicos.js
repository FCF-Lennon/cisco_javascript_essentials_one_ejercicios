// Operadores de asignación, aritméticos y lógicos en JavaScript

// Operadores

/*
    En los lenguajes de programación, los operadores son símbolos (o en ocasiones palabras clave) 
    que se utilizan para realizar acciones sobre operandos, que pueden ser valores o variables.

    Por ejemplo, el operador + es binario porque necesita dos operandos, mientras que typeof es unario, 
    ya que actúa sobre uno solo.

    Incluso existe un operador ternario en JavaScript (que veremos más adelante), que trabaja con 
    tres operandos.

    También podemos clasificar los operadores por su posición respecto al operando:

        Prefijo: antes del operando (++x)
        Postfijo: después del operando (x++)
        Infijo: entre dos operandos (x + y)

    Otra clasificación común es por su uso:

        Operadores de asignación
        Aritméticos
        Lógicos
        Condicionales

    Un mismo símbolo puede comportarse distinto según el tipo de los operandos. Por ejemplo, + sumará si 
    ambos operandos son números, pero concatenará si alguno es cadena.
*/


// Operadores de asignación

// El operador = asigna el valor del operando derecho a la variable del lado izquierdo:

const name = "Alice";
console.log(name); // -> Alice

// Si aparecen varios operadores =, se evalúan de derecha a izquierda:

// let year = 2050;
// let newYear = year = 2051; // year = 2051, newYear = 2051


// Operadores aritméticos

// Se usan para operaciones matemáticas. Excepto +, todos convierten los operandos a tipo 
// Number. + convierte a texto si detecta cadenas.

// console.log(2 + 2 * 2);        // -> 6
// console.log((2 + 2) * 2);      // -> 8

// Ejemplo de operadores básicos:

/* 
    const x = 5;
    const y = 2;
    console.log("suma:", x + y);       // 7
    console.log("resta:", x - y);      // 3
    console.log("multiplicación:", x * y); // 10
    console.log("división:", x / y);   // 2.5
    console.log("resto:", x % y);      // 1
    console.log("potencia:", x ** y);  // 25
 */


//  Operadores aritméticos unarios

// + y - también pueden actuar sobre un solo operando:

/* 
    let str = "123";
    let n1 = +str;       // 123 como número
    let n2 = -str;       // -123
    let n3 = -n2;        // 123
    let n4 = +"abcd";    // NaN
 */


// Operadores unarios de incremento y decremento

// ++ incrementa en 1
// -- decrementa en 1

// Postfijo: primero devuelve, luego cambia:

let n1 = 5;
console.log(n1++);  // -> 5

// Prefijo: primero cambia, luego devuelve:

console.log(++n1);  // -> 7

// Nota: JavaScript usa coma flotante, lo cual genera imprecisiones:

console.log(0.2 + 0.1); // -> 0.30000000000000004


// Operadores de asignación compuesta (aritmética)
// Estos combinan un operador aritmético con =:

/* 
    let x = 10;
    x += 2;   // x = x + 2
    x -= 4;   // x = x - 4
    x *= 3;   // x = x * 3
    x /= 6;   // x = x / 6
    x **= 3;  // x = x ** 3
    x %= 10;  // x = x % 10 
// */


// Operadores lógicos (Booleanos)

// Trabajan con true o false:

/* 
    &&: AND
    ||: OR
    !: NOT
 */

/* 
    console.log(true && true);   // true
    console.log(true && false);  // false
    console.log(true || false);  // true
    console.log(!true);          // false
*/

// Precedencia: ! > && > ||

/*  
    const a = false, b = true, c = false, d = true;
    console.log(a && b && c || d);        // true
    console.log(a && b && (c || d));      // false 
 */


// Operadores lógicos con valores no Booleanos
// El operador ! convierte a booleano y luego niega:

/* 
    let nr = 0;
    let year = 1970;
    let name = "Alice";
    let empty = "";

    console.log(!nr);     // true
    console.log(!year);   // false
    console.log(!name);   // false
    console.log(!empty);  // true
    console.log(!!nr);    // false
    console.log(!!name);  // true 
*/

// && y || retornan uno de los operandos:

/* 
    console.log(2 && 5);         // 5
    console.log(0 && 5);         // 0
    console.log("Alice" && "Bob"); // Bob
    console.log("" || "Bob");     // Bob
 */

// Evaluación corta (short-circuit):

let x = 0;
let y = 0;
console.log(x++ && y++); // 0
console.log(x);          // 1
console.log(y);          // 0 (no se ejecuta y++)


// Operadores lógicos de asignación

// &&= equivale a: a = a && valor
// ||= equivale a: b = b || valor

let a = true;
a &&= false;
console.log(a); // false

let b = false;
b ||= true;
console.log(b); // true

// Esta sección cubre los conceptos esenciales para trabajar con operadores 
// en JavaScript, fundamentales para realizar operaciones matemáticas, decisiones 
// lógicas y asignaciones de manera eficiente.


// Ejercicios:

// Ejercicio 1 - Rellena los operadores faltantes para obtener el resultado esperado 
// (reemplaza el guion bajo por el operador adecuado):

/* 
    console.log(2 _ 3 _ 1);      // resultado esperado: 7
    console.log(2 _ 4);          // resultado esperado: 16
    console.log(5 _ 1);          // resultado esperado: 5
    console.log(8 _ 2 _ 5 _ 2);  // resultado esperado: 39 
*/

// Respuesta:

console.log(2 * 3 + 1);
console.log(2 ** 4);
console.log(5 * 1);
console.log(8 ** 2 - 5 ** 2);

// Ejercicio 2 - Rellena los operadores de comparación faltantes para que todas las expresiones 
// resulten en true (reemplaza el guion bajo por el operador adecuado):

/* 
    console.log(4 * 5 _ 20);
    console.log(6 * 5 _ "30");
    console.log(-17 _ 0);
    console.log(25 _ 1);
    console.log(2 + 2 * 2 _ 4);
*/

// Respuesta:

console.log(4 * 5 === 20);
console.log(6 * 5 == "30");
console.log(-17 < 0);
console.log(25 > 1);
console.log(2 + 2 * 2 > 4);

// Ejercicio 3 - Rellena los operadores lógicos faltantes para que todas las expresiones resulten 
// en true (reemplaza el guion bajo por el operador adecuado):

console.log(true || false);
console.log(false || !false);
console.log(false && false || true);
console.log(true || false || false && true);
// Tipos de datos y conversión de tipos – Parte 1

// Tipos de datos y conversiones de tipo

/*
    Los programas trabajan con datos. Toda aplicación, ya sea una red social, un sitio de compras 
    o un videojuego, lee, procesa y almacena información. Para manejar estos datos, usamos variables, 
    que ya aprendimos a declarar y modificar. Pero para trabajar correctamente con variables, 
    necesitamos entender los tipos de datos.

    JavaScript es un lenguaje débilmente tipado, lo que significa que no se necesita declarar 
    el tipo de una variable al crearla, y que se puede cambiar dinámicamente (por ejemplo, 
    una variable puede contener un número y luego una cadena).

    Podemos clasificar los datos por su naturaleza:

    Datos numéricos (como 10, 3.14).
    Datos de texto (como "Hola").
    Datos booleanos (true/false).
    Colecciones (como arreglos y objetos).

    Cada tipo de dato define qué operaciones podemos hacer sobre él. Por ejemplo, a los números se 
    les puede sumar o dividir, pero a una cadena no.

    Además, los lenguajes de programación permiten convertir entre tipos. Por ejemplo, convertir un 
    número a texto.

    En JavaScript, los datos se dividen en:

    Tipos primitivos: datos simples como números, cadenas, booleanos, etc.
    Tipos complejos: estructuras que agrupan datos, como objetos o arreglos.

    Un concepto clave es el literal: es el valor que escribimos directamente en el código.
*/

let año = 1990;       // 1990 es un literal numérico
console.log("Hola");  // "Hola" es un literal de texto


// El operador typeof

// El operador typeof nos dice qué tipo de dato tiene una variable o un valor literal. 
// Siempre devuelve una cadena de texto con el nombre del tipo.

let edad = 25;
console.log(typeof edad);      // "number"

let nombre = "Carlos";
console.log(typeof nombre);    // "string"

let esActivo = true;
console.log(typeof esActivo);  // "boolean"


// Incluso podemos usar typeof sobre typeof:

let tipo = typeof edad;
console.log(tipo);             // "number"
console.log(typeof tipo);      // "string"


// Tipos de datos primitivos

// 1. Boolean (lógioc)

// Solo puede tener dos valores: true o false. Es muy útil para tomar decisiones en el programa, 
// por ejemplo, en condiciones if.

let estaLogueado = true;
let tienePermiso = false;

console.log(estaLogueado);      // true
console.log(typeof tienePermiso); // boolean


// 2. Number (número):

// Representa números reales o enteros. JavaScript no distingue entre enteros y decimales: todo
// son tipo number.

// let año = 2025;
let precio = 12.5;
let area = 16 * 3.14;

// console.log(año);              // 2025
console.log(typeof precio);    // number

// También podemos usar:

/*
    Hexadecimal: con 0x
    Octal: con 0o
    Binario: con 0b
*/

let a = 10;     // decimal
let b = 0x10;   // 16 en decimal
let c = 0o10;   // 8 en decimal
let d = 0b10;   // 2 en decimal


// Notación cientifica:

let x = 9e3;     // 9000
let y = 123e-5;  // 0.00123


// Valores especiales:

let inf = 1 / 0;           // Infinity
let noNumero = "abc" * 3;  // NaN

console.log(inf);          // Infinity
console.log(noNumero);     // NaN
console.log(typeof inf);   // number
console.log(typeof noNumero); // number


// 3. BigInt

// Sirve para representar números enteros extremadamente grandes que sobrepasan el límite 
// del tipo number.

// Se escribe agregando una n al final:

let big = 123456789012345678901234567890n;
console.log(big);           // 123456789012345678901234567890n
console.log(typeof big);    // bigint

console.log(7n / 4n);       // 1n (porque BigInt no permite decimales)


// Nota: no se puede mezclar BigInt con Number directamente.

let resultado = 1000n * 20; // Error

// String (cadenas de texto)

// Son secuencias de caracteres, como nombres, frases o cualquier otro texto. Se pueden
// escribir con comillas simples o dobles.

let pais = "Chile";
let saludo = 'Hola';

console.log(pais);              // Chile
console.log(typeof saludo);     // string


// Se pueden usar caracteres especiales con \:

let ruta = "C:\\Windows"; // representa: C:\Windows

// También se pueden concatenar cadenas con +:

// let nombre = "Ana";
let mensaje = "Hola " + nombre;
console.log(mensaje); // Hola Ana

// O usar template literals (plantillas literales) con backticks `:

// let pais = "México";
// let frase = `${pais} está en América.`;
// console.log(frase); // México está en América.

//Algunas funciones útiles:

let texto = "JavaScript es genial";

console.log(texto.length);        // 21
console.log(texto.charAt(0));     // J
console.log(texto.slice(0, 10));  // JavaScript
console.log(texto.split(" "));    // ["JavaScript", "es", "genial"]


// 5. Undefined
// Una variable tiene el valor undefined cuando ha sido declarada pero no inicializada.


let dato;
console.log(dato);            // undefined
console.log(typeof dato);     // undefined

dato = 5;
console.log(typeof dato);     // number

// Si se intenta usar una variable que no ha sido ni declarada, da error:

console.log(typeof noExiste);  // "undefined"
console.log(noExiste);         // ReferenceError

// 6. Null

// null representa ausencia intencionada de valor. A diferencia de undefined, que es automático 
// cuando no se asigna nada, null se asigna manualmente para indicar que la variable está vacía 
// por decisión del programador.

// let resultado = null;
// console.log(resultado);         // null
// console.log(typeof resultado);  // object (esto es un error histórico de JavaScript)

// 7. Symbol
// Es un tipo de dato primitivo especial (añadido en ECMAScript 6) que se usa para crear 
// identificadores únicos. No se usa mucho en programación básica.

let simbolo = Symbol("id");
console.log(typeof simbolo);  // symbol


// Resumen de los tipos primitivos:

/*
Tipo       | Ejemplo                | typeof
-----------|------------------------|-------------
Number     | 10, 3.14, Infinity     | "number"
BigInt     | 123n                   | "bigint"
String     | "Hola"                 | "string"
Boolean    | true, false            | "boolean"
Undefined  | undefined              | "undefined"
Null       | null                   | "object" (error histórico)
Symbol     | Symbol("id")           | "symbol"
*/


// Ejercicios:

// Pregunta 1 - Escribe un código que cree variables y las inicialice con valores de 
// tipo Booleano, Número, BigInt, Cadena (String) y undefined utilizando (cuando sea posible) 
// literales y funciones constructoras.

// Respuesta:

// Inicialización usando literales:

let booleano = true;
let numero = 0;
let numeroGrande = 1n;
let cadena = "Hola mundo";
let sinDefinir;

console.log(`${booleano} : ${typeof(booleano)}`);
console.log(`${numero} : ${typeof(numero)}`);
console.log(`${numeroGrande} : ${typeof(numeroGrande)}`);
console.log(`${cadena} : ${typeof(cadena)}`);
console.log(`${sinDefinir} : ${typeof(sinDefinir)}`);

// Inicialización usando funciones constructoras:

booleano = Boolean();
numero = Number();
numeroGrande = BigInt(2);
cadena = String(0);
sinDefinir = undefined;

console.log(`${booleano} : ${typeof(booleano)}`);
console.log(`${numero} : ${typeof(numero)}`);
console.log(`${numeroGrande} : ${typeof(numeroGrande)}`);
console.log(`${cadena} : ${typeof(cadena)}`);
console.log(`${sinDefinir} : ${typeof(sinDefinir)}`);


// Pregunta 2 - Imprime todos los valores y todos los tipos de esos valores usando console.log. 
// Intenta usar interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo en una 
// única llamada a console.log, por ejemplo en la siguiente forma: 1000 [number]

// Respuesta:

console.log(`${booleano} [${typeof(booleano)}]`);
console.log(`${numero} [${typeof(numero)}]`);
console.log(`${numeroGrande} [${typeof(numeroGrande)}]`);
console.log(`${cadena} [${typeof(cadena)}]`);
console.log(`${sinDefinir} [${typeof(sinDefinir)}]`);


// Pregunta 3 - Realiza una cadena de conversiones: crea un Booleano a partir de un BigInt que 
// se haya creado a partir de un Número que fue creado a partir de una Cadena (String). 
// Comienza con el valor "1234". ¿Es posible?

// Respuesta:

let cadenaOriginal = "1234";
numero = Number(cadenaOriginal);
numeroGrande = BigInt(numero);
booleano = Boolean(numeroGrande);

console.log(`${booleano} [${typeof(booleano)}]`); // Imprime: true [boolean], sí es posible.


// Pregunta 4 - Intenta sumar dos valores del mismo tipo y verifica el tipo del resultado. 
// Hazlo para todos los tipos primitivos.

// Respuesta: 

numero = 3 + 2; // Suma aritmética
numeroGrande = 1n + 2n; // Suma aritmética con BigInt
booleano = true + false; // true es 1, false es 0 → suma = 1
cadena = "12" + "34"; // Concatenación de cadenas
sinDefinir = undefined + undefined; // Resultado: NaN (undefined no puede sumarse)
let nulo = null + null; // null se convierte a 0 → suma = 0

console.log(`${numero} [${typeof numero}]`); // 5 [number]
console.log(`${numeroGrande} [${typeof numeroGrande}]`); // 3n [bigint]
console.log(`${booleano} [${typeof booleano}]`); // 1 [number]
console.log(`${cadena} [${typeof cadena}]`); // 1234 [string]
console.log(`${sinDefinir} [${typeof sinDefinir}]`); // NaN [number]
console.log(`${nulo} [${typeof nulo}]`); // 0 [number]


// Pregunta 5 - Intenta sumar dos valores de diferentes tipos y verifica los resultados.

// Respuesta:

numero = 3; 
numeroGrande = 1n;
booleano = true; 
sinDefinir = undefined; 
nulo = null; 

// Suma entre number y null → null se convierte a 0 → 3 + 0 = 3
console.log(`${numero + nulo} [${typeof (numero + nulo)}]`); // 3 [number]

// Suma entre BigInt y Number → Error (no se pueden mezclar tipos directamente)
// console.log(numeroGrande + numero); // Descomenta para ver el error
// Solución si se desea sumar: convertir uno de los tipos
console.log(`${numeroGrande + BigInt(numero)} [${typeof (numeroGrande + BigInt(numero))}]`); // 4n [bigint]

// Suma entre number y boolean → true es 1 → 3 + 1 = 4
console.log(`${numero + booleano} [${typeof (numero + booleano)}]`); // 4 [number]

// Suma entre undefined y null → undefined es NaN, null es 0 → NaN + 0 = NaN
console.log(`${sinDefinir + nulo} [${typeof (sinDefinir + nulo)}]`); // NaN [number]


// Pregunta 6: Intenta modificar la línea const str1 = 42 + "1"; para obtener 
// el resultado 43 (sin quitar las comillas alrededor de "1").

// Respuesta:

const str1 = 42 + Number("1"); // Convierte "1" (cadena) a número antes de sumarlo

console.log(`${str1} [${typeof(str1)}]`); // 43 [number]
// Variables

// ¿Qué es una variable?

// Al principio, escribir mensajes como "Hola, Mundo" en la pantalla es entretenido,
// pero programar realmente implica resolver problemas más complejos. Para eso,
// necesitamos elementos como variables, que son como piezas de un rompecabezas
// que iremos conociendo poco a poco.
//
// Una variable es un espacio donde podemos guardar valores que pueden cambiar.
// En matemáticas, una variable representa un símbolo que puede tomar distintos
// valores; en programación cumple una función similar. Son útiles porque permiten
// almacenar resultados intermedios, modificarlos y usarlos en operaciones
// posteriores dentro de un programa.

// Nombrar variables

// Imagina una variable como un contenedor que necesita un nombre único para poder
// identificarlo. Aunque puedes elegir casi cualquier nombre, es una buena práctica
// usar nombres que indiquen su contenido, como altura, color, o contadorPasos.
//
// En JavaScript:

// - Los nombres pueden contener letras, números, guiones bajos y signos $.
// - No pueden comenzar con un número.
// - Distingue entre mayúsculas y minúsculas, así que valor, Valor y VALOR son distintos.
// - No puedes usar palabras reservadas (como if, for, let).
// - Antes de usar una variable, debe ser declarada, es decir, indicar que existe y
//   reservar espacio en memoria.

// Declarar variables

// Para declarar variables se usan las palabras clave var, let o const. Por ahora
// nos enfocamos en var y let:

let altura;

// console.log(altura); // -> undefined
// console.log(peso);   // -> ReferenceError: peso no está definido

// altura fue declarada pero no tiene valor, por eso aparece como undefined.
// peso no fue declarada, y eso genera un error.

// La diferencia entre var y let:

// - var permite redeclarar la misma variable sin error.
// - let no permite declarar dos veces una variable con el mismo nombre.

// Es recomendable usar let para evitar errores en programas más complejos.

// Inicializar variables

// Inicializar es asignar el primer valor a una variable:

/*
    let altura = 180;
    let otraAltura = altura;
    let peso;
    peso = 70;
*/

// Podemos asignarle:

// - Un valor directo.
// - El valor de otra variable.
// - El resultado de una función.

// También se puede declarar e inicializar por separado.

// Declaraciones y modo estricto

// JavaScript permite, por defecto, usar variables sin declararlas previamente,
// lo cual puede causar errores:

altura = 180; // Sin declarar

// Pero si activamos el modo estricto ("use strict";), JavaScript exigirá que las
// variables se declaren antes de usarlas:

// "use strict";
// altura = 180; // -> Error: altura no está definida

// Se recomienda usar siempre "use strict"; al principio del código, ya que ayuda
// a evitar errores y seguir buenas prácticas.

// Cambiar valores de variables

// Las variables pueden cambiar de valor durante la ejecución del programa:

let pasos = 100;
pasos = 120;
pasos = pasos + 200; // Ahora vale 320

// JavaScript es un lenguaje de tipado débil y dinámico, lo que significa que una
// variable puede cambiar de tipo:

let saludo = "Hola!";
saludo = 1; // ahora es un número

// JavaScript incluso convierte tipos automáticamente cuando lo necesita:

// let saludo = "Hola!";
// let contador = 100;
// saludo = saludo + contador;

// console.log(saludo); // -> "Hola!100"

// Constantes (const)

// Las constantes son como variables, pero no se pueden cambiar después de
// asignarles un valor:

/*
    const saludo = "Hola!";
    saludo = "Hola de nuevo"; // -> Error
*/

// Siempre deben inicializarse al momento de declararlas.
// Se usan para valores que no deben cambiar, como rutas, claves o resultados fijos.
// También ayudan a optimizar el rendimiento del programa.

// Alcance (scope)

// El alcance determina dónde puede ser utilizada una variable. Se divide en:
// - Global: declarada fuera de bloques {} → accesible en todo el programa.
// - Local: declarada dentro de un bloque → solo accesible dentro de ese bloque.


// let altura = 180;

{
    let peso = 70;
    console.log(altura); // -> 180
    console.log(peso);   // -> 70
}

console.log(altura); // -> 180
console.log(peso);   // -> Error

// altura es global.
// peso es local al bloque.

// ¿Y con var?

// Las variables declaradas con var ignoran los bloques y se comportan como si
// fueran globales, a menos que estén dentro de una función:

// var altura = 180;

{
    var peso = 70;
}

console.log(peso); // -> 70 (aunque esté dentro de un bloque)

// Solo dentro de una función var crea variables locales.

// Una palabra sobre funciones

// Una función es un conjunto de instrucciones agrupadas que podemos reutilizar.
// Se declara así:

function miFuncion() {
   console.log("Hola");
   console.log("Mundo");
}

// Luego se puede usar simplemente llamándola por su nombre:
miFuncion();

// Hoisting (Elevación de variables)

// En JavaScript, las declaraciones de variables y funciones se "elevan"
// automáticamente al principio de su contexto (función o script). Esto significa
// que puedes usar una variable antes de declararla, pero su valor será undefined
// si fue declarada con var.

console.log(altura); // -> undefined

// var altura = 180;

// Aunque la línea var altura = 180; aparece después del console.log, JavaScript
// mueve la declaración (var altura;) al inicio del programa, pero no la
// inicialización. Por eso imprime undefined.

// Con let y const esto no ocurre de la misma forma:

console.log(peso); // ❌ Error: Cannot access 'peso' before initialization
let peso = 70;

// Aunque let y const también son elevadas, no están disponibles hasta que el
// intérprete llega a su declaración. Esta zona se llama zona muerta temporal (TDZ,
// Temporal Dead Zone), y si intentas acceder a la variable antes de declararla,
// obtendrás un error.


// Ejercicios:
// Pregunta 1 - Juguemos a ser floristas.
/*
    - el precio de una rosa (8) y la cantidad de rosas que tienes (70)
    - el precio de un lirio (10) y la cantidad de lirios que tienes (50)
    - el precio de un tulipán (2) y la cantidad de tulipanes que tienes (120)

Ahora declara tres variables, una para las rosas, otra para los lirios y otra para los 
tulipanes, en las cuales colocarás su precio total. Inserta los valores correspondientes 
en las variables usando las variables declaradas en el paso anterior. Finalmente, 
declara una variable en la que almacenes el precio total de todas tus flores 
(nuevamente, usa las variables anteriores para la inicialización).

Muestra toda la información del inventario en la consola con el siguiente formato:

Salida esperada:
    Rose – precio unitario: 8 , cantidad: 70 , valor: 560
    Lily – precio unitario: 10 , cantidad: 50 , valor: 500
    Tulip – precio unitario: 2 , cantidad: 120 , valor: 240
    Total: 1300
*/

// Respuesta:

/* let precio_rosa_unidad = 8;
let precio_lirio_unidad = 10;
let precio_tulipan_unidad = 2;

let unidad_total_rosa = 70
let unidad_total_lirio = 50
let unidad_total_tulipan = 120

let precio_total_rosa = unidad_total_rosa * precio_rosa_unidad
let precio_total_lirio = unidad_total_lirio * precio_lirio_unidad
let precio_total_tulipan = unidad_total_tulipan * precio_tulipan_unidad

let total = precio_total_rosa + precio_total_lirio + precio_total_tulipan;

console.log(`Rosa - precio unitario: ${precio_rosa_unidad}, cantidad: ${unidad_total_rosa}, valor:", ${precio_total_rosa}`)
console.log(`Lirio - precio unitario: ${precio_lirio_unidad}, cantidad: ${unidad_total_lirio}, valor:", ${precio_total_lirio}`)
console.log(`Tulipan - precio unitario: ${precio_tulipan_unidad}, cantidad: ${unidad_total_tulipan}, valor:", ${precio_total_tulipan}`) 
console.log("Total:", total)  */

// Pregunta 2 - Modifica el código del ejemplo anterior.

/*
    Supón que los precios de las fleres serán constantes 
    (no cambiarán). Declara e inicializa las demás variables de la misma 
    forma que el ejemplo anterior. 

    Muestra toda la información recopilada en la consola.
    Ahora disminuye la cantidad de rosas en 20 y la de lirios en 30.
    Vuelve a mostrar toda la información recopilada en la consola.

*/


// Respuesta:

const precio_rosa_unidad = 8;
const precio_lirio_unidad = 10;
const precio_tulipan_unidad = 2;

let unidad_total_rosa = 70 - 20 
let unidad_total_lirio = 50 - 30
let unidad_total_tulipan = 120

let precio_total_rosa = unidad_total_rosa * precio_rosa_unidad
let precio_total_lirio = unidad_total_lirio * precio_lirio_unidad
let precio_total_tulipan = unidad_total_tulipan * precio_tulipan_unidad

let total = precio_total_rosa + precio_total_lirio + precio_total_tulipan;

console.log(`Rosa - precio unitario: ${precio_rosa_unidad}, cantidad: ${unidad_total_rosa}, valor:", ${precio_total_rosa}`)
console.log(`Lirio - precio unitario: ${precio_lirio_unidad}, cantidad: ${unidad_total_lirio}, valor:", ${precio_total_lirio}`)
console.log(`Tulipan - precio unitario: ${precio_tulipan_unidad}, cantidad: ${unidad_total_tulipan}, valor:", ${precio_total_tulipan}`) 
console.log("Total:", total) 


// Laboratorio:

/*

Tiempo estimado
15-30 minutos

Nivel de dificultad
Fácil

Objetivos
Familiarizar al estudiante con:

variables (es decir, nombrarlas, declararlas, inicializarlas y modificar sus valores)

Escenario
Nuestra tarea será crear una lista de contactos. Inicialmente, la lista será bastante simple: solo 
agregaremos tres personas usando los datos que se muestran en la tabla a continuación. En el resto 
del curso, volverás a este script y lo ampliarás sistemáticamente con nuevas funcionalidades, 
utilizando los elementos de JavaScript que vayas aprendiendo.

Declara e inicializa las variables donde almacenarás toda la información (nueve variables en total). 
Muestra en la consola la información del primer y último contacto en el 
siguiente formato: nombre/teléfono/email.

*/

let name_one = "Maxwell Wright";
let name_two = "Raja Villarreal";
let name_three = "Helen Richards";

let phone_one = "(0191) 719 6495";
let phone_two = "0866 398 2895";
let phone_three = "0800 1111";

let email_one = "curabitur.egestas.nunc@nonummyac.co.uk";
let email_two = "posuere.vulputate@sed.com";
let email_three = "libero@convallis.edu";

console.log(name_one, phone_one, email_one);
console.log(name_two, phone_two, email_two);
console.log(name_three, phone_three, email_three);
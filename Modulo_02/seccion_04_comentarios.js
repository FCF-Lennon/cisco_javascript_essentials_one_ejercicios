// Comentarios

/*
    Los comentarios son algo común en la programación. "Comentar" puede que no sea una técnica de programación 
    como tal, pero te permite mejorar tu trabajo con el código, principalmente haciéndolo más legible. Entonces, 
    ¿qué son los comentarios y por qué los necesitamos?

    Los comentarios son simplemente texto que el intérprete de JavaScript ignora completamente. Su propósito 
    es explicar una parte específica del código, que por alguna razón puede no ser fácil de entender a primera 
    vista. Sin embargo, no se pueden escribir de cualquier forma, porque el intérprete podría confundirlos con 
    comandos o nombres de variables. Por eso, JavaScript tiene una forma específica de reconocer los comentarios, 
    y existen dos tipos, que también están presentes en otros lenguajes como C o Python:

        - Comentarios de una sola línea
        - Comentarios multilínea
*/

// Comentarios de una sola línea

// Este es el tipo más común de comentario. Se usa con dos barras diagonales // al comienzo de la línea. 
// Todo lo que esté a la derecha de estas barras será ignorado por el intérprete. Si deseas comentar varias líneas 
// de esta forma, deberás poner // en cada línea.


// Este es un comentario de una sola línea
let x = 42; // Esto también es un comentario, pero lo que está antes de las barras se ejecuta
// Esta línea y la siguiente serán ignoradas
// x = 8;
console.log(x); // -> 42

/*
    En la mayoría de los editores de código modernos, se pueden comentar fragmentos de código con atajos de 
    teclado. Basta con poner el cursor en una línea y presionar una combinación de teclas para añadir // al inicio. 
    Al presionarla de nuevo, se elimina el comentario. Esto también se puede hacer seleccionando varias líneas. 
    Este mecanismo es compatible con editores como Sublime Text o Visual Studio Code.

    Este método se utiliza mucho para desactivar temporalmente una parte del código mientras se prueba otra.
*/


// Comentarios multilínea

// También llamados comentarios en bloque, permiten escribir texto comentado en varias líneas. Son 
// útiles cuando necesitas hacer comentarios más largos o si quieres comentar un fragmento de código 
// dentro de una línea. Se abren con /* y se cierran con */

/*
    Este es un comentario
    en bloque que puede ocupar
    varias líneas.

    Así que este código no se ejecutará:
    console.log("¡Hola, Mundo!");
*/

let j /* porque no hay un mejor nombre */ = 42;
console.log(j);


// Pero... ¿por qué comentar?

/*
    Aunque es importante dar nombres descriptivos a variables, funciones y demás, a veces el código puede 
    volverse complicado igual. Y cuando eso ocurre, los comentarios ayudan a que los demás (¡y tú mismo!) 
    entiendan mejor lo que se quiso hacer.

    Los siguientes son ejemplos exagerados, pensados para mostrar cómo se utilizan los comentarios. 
    En la práctica, hay que usarlos con moderación, ya que un exceso de comentarios obvios puede hacer que 
    el código sea más difícil de leer.

    Regla general: comenta cuando el código por sí solo no sea suficiente para entenderse, o cuando el código 
    hace algo inesperado y necesitas dejar claro que fue intencional.
*/


// También recuerda que, en proyectos reales, no serás la única persona que leerá el código. Incluso tú mismo, 
// después de unos meses, podrías tener dificultades para entender lo que hiciste.

// establecer greetingText a Hello - MALO
// const greetingText = "Hello";

let angle = 0;
angle = angle + 90; // girar 90 grados para compensar pantalla vertical - BUENO

// TODO: agregar verificación para divisor igual a 0 - BUENO
// let result = a / b;

// No es necesario verificar b - garantizado que no es cero - BUENO
// let result = a / b;

// Dividiendo a por b - MALO
// let result = a / b;


// Documentación

/*
    Los comentarios también se usan para documentar el código. Por ejemplo, 
    para explicar qué hace una función o qué parámetros recibe. A veces, los archivos tienen 
    un encabezado con información del autor, la licencia o el historial de cambios.

    Hay herramientas que generan documentación automática a partir de los comentarios, como JSDoc. 
    Si sigues su formato, puedes generar una página web que describa tu proyecto con detalles 
    como: funciones, parámetros, valores retornados, etc.
*/



// Activar/Desactivar Código (Code Toggle)

// Si sospechas que un fragmento de código está causando problemas, puedes comentar temporalmente 
// esas líneas para desactivarlas.

// const greetingText = "Hi";
const greetingText = "Hello";
// const greetingText = "Welcome";

// En este ejemplo, solo la segunda línea está activa. Puedes usar comentarios de una sola línea 
// para desactivar partes pequeñas o comentarios en bloque para desactivar funciones enteras. 
// Es muy útil para depurar errores.


// Ejercicio: 

// Tarea: Hay un código que actualmente no funciona. Intenta corregirlo usando solo comentarios. 
// Intenta, si es posible, usar los atajos de teclado de tu editor para hacerlo.

"use strict";
   
const prefix = "username_";
   
let userName = "Jack";
// const userName = "Adam";
   
let prefixedUserName;
// const prefixedUserName;
   
userName = "John";
prefixedUserName = prefix + userName;
   
console.log(prefixedUserName /* + prefixedUserName2 */);
// console.log(prefixedUserName2);

// Código corregido: ahora funciona sin errores al comentar las líneas problemáticas.

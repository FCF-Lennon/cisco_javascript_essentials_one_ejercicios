
// Errores y Excepciones (Parte 1)

// Errores y excepciones

/*
    Los errores son inevitables al programar. Pueden deberse a mal diseño, errores de tipeo,
    uso incorrecto del lenguaje, o comportamiento inesperado del usuario.

    Edsger Dijkstra lo expresó así: 

    "Si depurar es el proceso de eliminar bugs, entonces programar es el proceso de introducirlos".
*/


// Lenguaje natural y errores de comunicación


/*
    Los lenguajes de programación son similares a los lenguajes naturales.
    Tienen gramática (sintaxis) y vocabulario limitado.

    Podemos clasificar errores según analogías del lenguaje natural.
*/

// Error de sintaxis 

// Frase sin puntuación correcta:

/* 
    "Después de salir del bosque gira a la derecha en el primer camino y conduce 500m espera en ese lugar."

    El receptor puede entender, pero formalmente es incorrecto.
    En programación, los errores de sintaxis impiden la ejecución del programa. 
*/


// Ejemplo en JavaScript:


// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier

// Falta la coma entre los parámetros (error de sintaxis).


// Error semántico (Referencia) 

// Palabra mal escrita:

// "Después de salir del bosque, gira a la derecha en el primer pth y conduce 500m. Espera en ese lugar."

// "pth" no está en el vocabulario del lenguaje.

let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);

// Hemos llamado a una función que no existe (typo en el nombre).


// Error semántico (contextual) 

// Palabra existe pero usada incorrectamente:

/*
    "After leaving the forest, turn right into the fist path, and drive 500m. Wait on the spot."

    "fist" existe, pero no tiene sentido en el contexto.

    El intérprete no puede detectar esto automáticamente. Es necesario análisis contextual.
*/


// Error lógico 

// Instrucción formalmente correcta, pero con resultado incorrecto:
/*
    "After leaving the forest, turn left into the first path..."

    Queríamos escribir "right" pero pusimos "left".
*/

let multiply = (a, b) => a + b;
result = multiply(10, 20);
console.log(result); // -> 30

// La función debería multiplicar, pero está sumando (error lógico).


// Corrección del error lógico:

let multiplyCorrect = (a, b) => a * b;
let resultCorrect = multiplyCorrect(10, 20);
console.log(resultCorrect); // -> 200

/*
    Todo funciona correctamente ahora. ¡Éxito!
*/



// Errores y excepciones en JavaScript


/*
    Errores de sintaxis impiden ejecutar el programa.
    Errores de referencia (semánticos) ocurren en tiempo de ejecución y detienen el código.

    JavaScript lanza objetos de error cuando detecta un problema.
*/

// Ejemplo con error de referencia:

console.log('abc'); // -> abc
conole.log('def');  // -> Uncaught ReferenceError: conole is not defined
console.log('ghi'); // (no se ejecuta por el error anterior)


// Manejo de excepciones con try...catch 

try {
    console.log('abc');
    conole.log('abc'); // Error intencional
} catch (error) {
    console.log(error.message); // -> conole is not defined
}

// El bloque catch captura el error y evita que el programa se detenga completamente.



// Errores sin excepciones


/*
    No todos los errores en JavaScript lanzan excepciones.
    A veces devuelven valores especiales como `Infinity` o `NaN`.
*/

console.log(100 / 0);         // -> Infinity
console.log(100 * "2");       // -> 200
console.log(100 * "abc");     // -> NaN

// Aunque el tercer caso claramente es erróneo, no lanza una excepción.

console.log(Math.pow("abc", "def")); // -> NaN

/*
    En estos casos, JavaScript devuelve NaN en vez de lanzar error.
    Hay que consultar la documentación para saber si una función lanza error o no.
*/



// Confianza limitada


/*
    Los programas interactúan con usuarios y otros sistemas.
    No debemos confiar en que los datos recibidos serán correctos.
*/

// Código con validación de entrada del usuario:

// Comentado por seguridad en entornos automáticos.

/*
    let sX = prompt("Introduce el primer número");
    let sY = prompt("Introduce el segundo número");
    let x = Number(sX);
    let y = Number(sY);

    if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
        console.log(x / y);
    } else {
        console.log("Argumentos incorrectos");
    }
*/

/*
    `prompt()` devuelve strings, incluso si el usuario introduce un número.
    Se convierten explícitamente con `Number()`.
    Verificamos que ambos números sean finitos y que el divisor no sea cero.
    Así prevenimos errores en tiempo de ejecución.
*/


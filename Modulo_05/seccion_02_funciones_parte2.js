
// Sección 2 – Funciones – Parte 2

/* 
Validación de parámetros

    Antes de ejecutar una función, podemos verificar si los argumentos pasados cumplen 
    con los requisitos esperados. 

    Por ejemplo, si una función espera un array, podemos validar que realmente lo sea. 

    La validación evita errores en tiempo de ejecución y permite manejar casos inesperados 
    de forma controlada.
*/

function obtenerTemperaturaMedia(temperaturas) {
    if (!(temperaturas instanceof Array)) {
        // Si no es un array, retornamos NaN (Not a Number), valor especial que indica resultado inválido
        return NaN;
    }
    let suma = 0;
    for (let i = 0; i < temperaturas.length; i++) {
        suma += temperaturas[i];
    }
    return suma / temperaturas.length;
}

console.log(obtenerTemperaturaMedia(10));        // -> NaN (entrada inválida)
console.log(obtenerTemperaturaMedia([10, 30]));  // -> 20


// Recursión


/* 
    El factorial de un número n (n!) es el producto de todos los enteros desde 1 hasta n. 
    Por ejemplo: 6! = 6×5×4×3×2×1 = 720
*/

/* Versión iterativa (usando bucle) */
function factorialIterativo(n) {
    let resultado = 1;
    while (n > 1) {
        resultado *= n;
        n--;
    }
    return resultado;
}
console.log(factorialIterativo(6)); // -> 720

/* 
    Versión recursiva: una función que se llama a sí misma hasta llegar al caso base.
    Usamos el operador ternario: si n > 1, multiplicamos n por factorial(n - 1), si no, 
    retornamos 1 (caso base).
*/
function factorialRecursivo(n) {
    return n > 1 ? n * factorialRecursivo(n - 1) : 1;
}
console.log(factorialRecursivo(6)); // -> 720


// Funciones como miembros de primera clase


/* 
    En JavaScript, las funciones son "ciudadanos de primera clase":
    - Se pueden asignar a variables
    - Se pueden pasar como argumentos a otras funciones
    - Se pueden devolver desde otras funciones
*/

function mostrarMensaje(mensaje) {
    console.log(`Mensaje: ${mensaje}`);
}
let sm = mostrarMensaje;

sm("¡Esto funciona!");          // -> Mensaje: ¡Esto funciona!
console.log(typeof sm);         // -> function (el tipo de sm es función)

function noHacerNada() {
    return undefined;
}

let a = noHacerNada();  // guarda el valor retornado (undefined)
let b = noHacerNada;    // guarda la función en sí (referencia)
console.log(typeof a);  // -> undefined
console.log(typeof b);  // -> function

// Uso de funciones como argumentos (funciones callback)
function sumar(a, b) {
    return a + b;
}
function multiplicar(a, b) {
    return a * b;
}
function operar(func, x, y) {
    return func(x, y);
}

console.log(operar(sumar, 10, 20));       // -> 30
console.log(operar(multiplicar, 10, 20)); // -> 200


// Expresiones de función


/*
    Una expresión de función define una función directamente en una variable.
    Puede tener nombre (función nombrada) o no (anónima).
*/

// Función nombrada almacenada en variable
let miSuma = function suma(a, b) {
    return a + b;
}
console.log(miSuma(10, 20));  // -> 30

// Función anónima almacenada en variable
let miSumaAnonima = function(a, b) {
    return a + b;
}
console.log(miSumaAnonima(10, 20));  // -> 30

// Función anónima pasada directamente como argumento
console.log(operar(function(a, b) {
    return a * b;
}, 10, 20));  // -> 200


// Funciones Callback


/* 
    Una función callback es una función que se pasa como argumento a otra función y que se ejecuta dentro de esta.
*/

/* Callback síncrono: se ejecuta inmediatamente en el orden del código */

let interna = function() {
    console.log("interna 1");
}
let externa = function(callback) {
    console.log("externa 1");
    callback();
    console.log("externa 2");
}
console.log("test 1");
externa(interna);
console.log("test 2");

/*
    Salida esperada:
    test 1
    externa 1
    interna 1
    externa 2
    test 2
*/


// Callbacks Asíncronos

/* 
    Con `setTimeout`, la función callback se ejecuta después de un retraso (milisegundos), mientras el resto del 
    código sigue corriendo.
*/

let internaAsync = function() {
    console.log("interna 1");
}
let externaAsync = function(callback) {
    console.log("externa 1");
    setTimeout(callback, 1000); // Ejecuta callback luego de 1 segundo
    console.log("externa 2");
}
console.log("test 1");
externaAsync(internaAsync);
console.log("test 2");

/*
    Salida esperada:
    test 1
    externa 1
    externa 2
    test 2
    (interna 1 impreso luego de 1 segundo)
*/


// Funciones setTimeout y setInterval

/* 
    `setInterval` ejecuta una función repetidamente en intervalos de tiempo definidos. 
    `clearInterval` detiene esta repetición.
*/

let internaRepetida = function() {
    console.log("interna 1");
}
let externaConIntervalo = function(callback) {
    console.log("externa 1");
    let idTemporizador = setInterval(callback, 1000); // ejecuta callback cada segundo
    console.log("externa 2");
    setTimeout(function() {
        clearInterval(idTemporizador); // detiene el intervalo después de 5.5 segundos
    }, 5500);
}
console.log("test 1");
externaConIntervalo(internaRepetida);
console.log("test 2");

/*
    Salida:
    externa 1
    externa 2
    test 2
    (interna 1 impreso 5 veces, uno por segundo)
*/


// Funciones flecha (Arrow Functions)


/* 
    Las arrow functions son una forma más breve de escribir funciones anónimas.

    Sintaxis básica:

    - Parámetros entre paréntesis (si es uno, se pueden omitir)
    - Flecha `=>`
    - Si el cuerpo es una sola expresión, se retorna automáticamente sin usar `return` ni `{}`

    Ejemplos:

    let doble = x => x * 2;                 // un parámetro, retorno implícito
    let suma = (a, b) => a + b;             // varios parámetros
    let saludo = () => console.log('Hola'); // sin parámetros

    Si necesitas varias instrucciones, usa llaves y `return` explícito:

    let sumaCompleja = (a, b) => {
    const total = a + b;
    return total;
    };
*/

let suma = (a, b) => a + b;
console.log(suma(10, 20)); // -> 30

// Recursión con función flecha
let factorial = n => n > 1 ? n * factorial(n - 1) : 1;
console.log(factorial(5)); // -> 120

// Uso con método forEach para recorrer arrays
let nombres = ['Alicia', 'Eva', 'Juan'];
nombres.forEach(nombre => console.log(nombre)); // -> Alicia, Eva, Juan


// RESUMEN DE LA SECCIÓN

/* 
    - Las funciones son bloques fundamentales y reutilizables en JavaScript.
    - Se pueden definir de varias formas: declaración clásica, expresiones, o funciones flecha.
    - Pueden ser nombradas o anónimas.
    - Las funciones pueden almacenarse en variables, pasarse como argumentos y devolverse.
    - Los callbacks permiten ejecutar funciones en respuesta a eventos o acciones, de forma síncrona o asíncrona.
    - setTimeout y setInterval controlan la ejecución diferida o repetida de funciones.
    - Métodos como forEach facilitan trabajar con arrays usando funciones.
    - Con estas bases, podemos escribir código modular, reutilizable y claro.
*/




// EJERCICIOS:

// Ejercicio 1 - Los arrays en JavaScript tienen un método sort que, como puedes imaginar, 
// permite ordenar sus elementos. 

/* 
    - Este método recibe como argumento una función que comparará dos elementos del array. 
    - La función debe devolver cero si consideramos que los argumentos son iguales, un valor menor 
      que cero si consideramos que el primero es menor que el segundo, y un valor mayor que cero en 
      caso contrario. Mira el ejemplo:
*/

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
      retVal = -1;
     } else if(a > b) {
      retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

/* 
    Tarea 1A. Intenta modificar el código anterior para hacerlo lo más corto posible. Sugerencias:

    - usa una función anónima;
    - usa una función flecha;
    - considera omitir la instrucción if.
*/

// Desarrollo:

sorted = numbers.sort((a, b) => a - b)
console.log(sorted)

/* 
    Tarea 1B. Luego modifica la función para que los elementos se ordenen en orden descendente, 
    no ascendente como en el ejemplo.
*/

// Desarrollo:

sorted = numbers.sort((a,b) => b - a)
console.log(sorted)


//  Ejercicio 2 - Escribe tres funciones llamadas add, sub y mult, que tomen dos argumentos numéricos.

/*  
    - Las funciones deben verificar si los argumentos son enteros (usa Number.isInteger). 
      Si no lo son, deben devolver NaN, de lo contrario, deben devolver el resultado de la suma, 
    - resta o multiplicación respectivamente. 
    - Las funciones deben ser declaradas usando declaración de función.
*/

/* 
    Ejemplo de uso y resultados esperados:

    console.log(add(12, 10)); // -> 22
    console.log(mult(12, 10.1)); // -> NaN
*/

// Desarrollo:

function add (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN
    }
    return a + b
}

function sub (a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN
    }
    return a - b
}

function mult (a , b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN
    }
    return a * b
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN


// o tambien:

/* 
function validarEnteros(a, b) {
  return Number.isInteger(a) && Number.isInteger(b);
}

function add(a, b) {
  return validarEnteros(a, b) ? a + b : NaN;
}

function sub(a, b) {
  return validarEnteros(a, b) ? a - b : NaN;
}

function mult(a, b) {
  return validarEnteros(a, b) ? a * b : NaN;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN 

(DRY: Don´t Repeat Yourself).
*/


// Ejercicio 3 - Reescribe las funciones del ejercicio anterior usando expresión de función flecha, 
// intentando escribirlas en la forma más corta posible.

/* 
    Ejemplo de uso y resultados esperados:
*/

// Desarrollo:

let adicion = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let resta = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let multiplicacion = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(adicion(12, 10)); // -> 22
console.log(multiplicacion(10, 10.1)); // -> NaN


// Ejercicio 4 - Escribe una función llamada action que reciba una función callback como p
// rimer argumento y otros dos argumentos numéricos. 

/* 
    - Como función callback, podrás pasar una de las tres funciones del ejercicio anterior. 
    - La función action debe llamar a la función callback pasada y devolver el resultado obtenido. 
    - La función callback debe aceptar el segundo y tercer argumento que recibe la función action.
*/

/* 
    Ejemplo de uso y resultados esperados:

    console.log(action(adicion, 12, 10)); // -> 22
    console.log(action(resta, 12, 10)); // -> 2
    console.log(action(multiplicacion, 10, 10.1)); // -> NaN
*/

// Desarrollo:

function action (callback, a, b) {
    return callback(a, b)
}

console.log(action(adicion, 12, 10)); // -> 22
console.log(action(resta, 12, 10)); // -> 2
console.log(action(multiplicacion, 10, 10.1)); // -> NaN


// Ejercicio 5 - Escribe un programa que imprima (en la consola) números enteros consecutivos 10 veces, 
// con intervalos de dos segundos (comenzando desde el número 1). 
// Usa las funciones setInterval, clearInterval y setTimeout.

/* 
    Resultados esperados:

    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
*/

// Desarrollo:

let contador = 1

let intervalo = setInterval(() => {
    console.log(contador);
    contador++

    if (contador > 10) {
        clearInterval(intervalo);
    }
}, 2000)


// o tambien:

/*
    let contador = 1

    const intervalo = setInterval(() => {
        console.log(contador++);
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalo);
    }, 20000);
*/


// Ejercicio 6 - Escribe una función que calcule el enésimo elemento de la secuencia Fibonacci. 
//


/* 
    Esta secuencia se define por la fórmula:

    - Cada elemento de la secuencia (excepto los dos primeros) es la suma de los dos anteriores. 
    - Por ejemplo: F1 = 1, F2 = F1 + F0 = 1, F3 = F2 + F1 = 2 y F6 = F5 + F4 = 8. 
    - La función debe usar recursión. 
    - En la definición, usa una expresión de función (almacena una función anónima en una variable).
*/

/* 
    Ejemplo de uso y resultados esperados:

    console.log(fibbRec(4)); // -> 3
    console.log(fibbRec(7)); // -> 13
*/

// Desarrollo

let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13

// o tambien:

/* 
    let fibbRec = function(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return fibbRec(n - 1) + fibbRec(n - 2);
    }

    console.log(fibbRec(4)); // -> 3
    console.log(fibbRec(7)); // -> 13 
*/


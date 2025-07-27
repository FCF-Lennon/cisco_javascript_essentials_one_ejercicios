
// Tipos de errores en JavaScript

/*
    JavaScript puede lanzar varios tipos de errores. Aquí se explican los más comunes:
    - SyntaxError: Errores de sintaxis (el código no puede ejecutarse).
    - ReferenceError: Variables o funciones no definidas.
    - TypeError: Uso incorrecto del tipo de dato.
    - RangeError: Valores fuera del rango permitido por una función.
*/

// SyntaxError

/*
    Este tipo de error ocurre antes de que se ejecute el código.
    try...catch NO puede atraparlo, ya que impide que el programa se inicie.
*/

// Código inválido, no puede ser atrapado:

/*
    "use strict";

    iff (true) {
        console.log("true");
    }
*/

// ReferenceError 

/*
    Ocurre cuando se hace referencia a una variable o función no definida.
    Puede atraparse en tiempo de ejecución con try...catch.
*/

try {
    let a = b;
} catch (error) {
    console.log("Error atrapado:", error); // -> ReferenceError: b is not defined
}

try {
    fun();
} catch (error) {
    console.log("Error atrapado:", error); // -> ReferenceError: fun is not defined
}

// TypeError 

/*
    Se lanza cuando un valor no es del tipo esperado.
*/

try {
    const someConstValue = 5;
    someConstValue = 7;
} catch (error) {
    console.log("Error atrapado:", error); // -> TypeError: Assignment to constant variable.
}

try {
    let someNumber = 10;
    someNumber.length(); // intento inválido
} catch (error) {
    console.log("Error atrapado:", error); // -> TypeError: someNumber.length is not a function
}

// RangeError 

/*
    Se lanza cuando un valor está fuera del rango esperado.
*/

try {
    let testArray1 = Array(10);
    console.log(testArray1.length); // -> 10

    let testArray2 = Array(-1); // genera RangeError
    console.log(testArray2.length);
} catch (error) {
    console.log("Error atrapado:", error); // -> RangeError: Invalid array length
}


// La sentencia try...catch

/*
    Permite atrapar errores durante la ejecución del programa.
*/

try {
    let a = b; // ReferenceError
} catch (error) {
    console.log("Atrapado:", error);
}
console.log("¡La excepción fue manejada!");

// Nota: try...catch no atrapa errores de sintaxis.


// Manejo condicional de excepciones con instanceof

/*
    Permite actuar de forma diferente dependiendo del tipo de error atrapado.
*/

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Error de referencia. Reiniciando a...");
        a = -2;
    } else {
        console.log("Otro error:", error);
    }
}
console.log(a); // -> -2


// bloque finally

/*
    El bloque finally siempre se ejecuta, ocurra o no un error.
*/

let x = 10;
try {
    x = 5;
} finally {
    console.log("Valor en finally:", x); // -> 5
}
console.log("Después de finally:", x); // -> 5

try {
    x = b; // ReferenceError
} finally {
    console.log("Se ejecuta finally incluso con error."); // -> 10
}

// try con catch y finally juntos

x = 10;
try {
    x = b;
} catch (error) {
    console.log("¡Error atrapado!"); // -> An Error!
} finally {
    console.log("Siempre ejecutado (finally)"); // -> Finally!
}
console.log("Valor final:", x); // -> 10

// Error no atrapado si ocurre dentro de catch sin try anidado

try {
    x = b;
} catch (error) {
    // Genera un nuevo ReferenceError
    console.log(b); 
}
console.log("Esto no se ejecuta");

// Usando try anidado para capturar errores dentro del catch

x = 10;
try {
    x = b;
} catch (error) {
    try {
        console.log(b); // ReferenceError
    } catch {
        console.log("¡Segundo error atrapado!");
    }
} finally {
    console.log("Finalmente ejecutado");
}


// La instrucción throw y errores personalizados

/*
Podemos lanzar nuestras propias excepciones usando throw.
*/

console.log("Inicio del programa");

try {
    throw 100; // Lanzando número como excepción
} catch (error) {
    console.log("Excepción personalizada:", error); // -> 100
}

console.log("Fin del programa");

// Ejemplo con función factorial y throw personalizado

function factorial(n) {
    if (n > 20) {
        throw new RangeError("Valor máximo permitido: 20");
    }

    let result = 1;
    for (; n > 1; n--) {
        result *= n;
    }
    return result;
}

try {
    console.log(factorial(5));  // -> 120
    console.log(factorial(21)); // lanza RangeError
} catch (error) {
    console.log("Error atrapado:", error);
}


// RESUMEN DE LA SECCIÓN


/*
    - Los errores son inevitables. El código debe anticiparlos.
    - Los bloques try...catch...finally ayudan a evitar que el programa
      se detenga inesperadamente.
    - Usa instanceof para manejar distintos tipos de errores.
    - Usa throw para lanzar errores personalizados y manejar datos inválidos.
    - finally siempre se ejecuta, y es útil para limpiar recursos o 
      confirmar ejecución final.
*/


// Sección de practica:

// Ejercicio 01:

/* 
    Escribe tu propia función div que tome dos argumentos y devuelva el resultado de 
    dividir el primer argumento por el segundo. En JavaScript, el resultado de dividir 
    por cero es el valor Infinity (o -Infinity, si intentamos dividir un número negativo). 
    Cambia esto. Si pasas 0 como segundo argumento, tu función debe lanzar una excepción 
    RangeError con un mensaje apropiado. Prepara una llamada de prueba de la función tanto 
    para una división válida como para una división por cero.
*/

// Desarrollo:


function div(a, b) {
    if (b === 0) {
        throw new RangeError("División no válida.");
    }
    return `La division entre ${a} / ${b} = ${a/b}`;
}

// Comentadas para el ejercicio 02
// console.log(div(4, 2)); 
// console.log(div(4, 0)); 


// Ejercicio 02 - Se ha declarado el siguiente arreglo de números:

let numbers = [10, 40, 0, 20, 50];

/*
    Escribe un programa que, en un bucle, divida el número 1000 por los elementos sucesivos 
    del arreglo numbers, mostrando el resultado de cada división.
    Para dividir los números, utiliza la función del ejercicio anterior.
    Utiliza la estructura try...catch para manejar una excepción lanzada en caso de división 
    por cero. Si se captura una excepción de este tipo, el programa debe imprimir un mensaje 
    apropiado (extraído de la excepción) y continuar su ejecución (dividiendo por los elementos 
    sucesivos del arreglo).
*/

// Desarrollo:

for (let index = 0; index < numbers.length; index++) {
    try {
        console.log(div(1000, numbers[index]));
    } catch (error) {
        if (error instanceof RangeError) {
            console.error(`${error.name}: ${error.message}`)
        }
    }
}

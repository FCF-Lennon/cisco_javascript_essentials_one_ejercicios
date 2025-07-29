// Depuración y solución de problemas en código

// Pruebas y depuración de tu código:

/* 
    Los errores en programas son normales, especialmente al principio, cuando no se conoce bien 
    el lenguaje (por ejemplo, errores de sintaxis). Estos suelen ser fáciles de corregir porque 
    el intérprete los detecta y sugiere soluciones.

    Los errores lógicos, sin embargo, son más difíciles de encontrar porque el intérprete 
    no los detecta; debemos investigar por qué el programa no funciona como esperamos.
*/

// Ejemplo de error lógico en función para calcular promedio:

function average(a, b) {
    // ERROR: la división se aplica solo a b, no a (a + b)
    return a + b / 2;
}

console.log(average(2, 10)); // -> 7 (esperado: 6)
console.log(average(5, 5));  // -> 7.5 (esperado: 5)

/*
    Explicación:

    La operación se evalúa como a + (b / 2) debido a la precedencia de operadores.
    Para corregirlo, hay que usar paréntesis para sumar primero y luego dividir:

    return (a + b) / 2;
*/

// Ejemplo corregido:

function averageCorregido(a, b) {
    return (a + b) / 2;
}

console.log(averageCorregido(2, 10)); // -> 6
console.log(averageCorregido(5, 5));  // -> 5

/*
    Este es un típico error lógico: el código es sintácticamente correcto,
    pero la lógica no produce el resultado esperado.
*/

// Otro ejemplo con error lógico menos obvio:

function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(largest(1, 1, 2)); // -> 2
console.log(largest(1, 2, 3)); // -> 3
console.log(largest(3, 2, 1)); // -> 3
console.log(largest(2, 2, 1)); // -> 1 (incorrecto)

/* 
    Problema:
    Cuando a y b son iguales, las condiciones a > b y b > a son falsas, por lo que siempre retorna c,
    lo cual no es correcto si c no es el mayor.

    Solución:
    Cambiar los operadores '>' por '>=' para cubrir igualdad también.
*/

// Función corregida:

function largestCorregido(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(largestCorregido(2, 2, 1)); // -> 2 (correcto)


// Depuración (Debugging):

/* 
    Para depurar eficazmente, usamos herramientas disponibles en navegadores modernos.

    Ejemplo sencillo para probar si el navegador soporta el debugger:
*/

console.log("Antes del debugger");
debugger; // Punto de interrupción que detiene la ejecución si hay debugger activo
console.log("Después del debugger");

/* 
    Al llegar a la instrucción debugger, la ejecución se detiene y podemos inspeccionar 
    el estado del programa.
*/


// Ejecución paso a paso:

/*
    Con el debugger, podemos ejecutar el código línea a línea para:

    - Ver qué instrucciones se ejecutan o no.
    - Comprobar si las condiciones y el flujo lógico son correctos.
    - Entrar o salir de funciones (Step Into, Step Over, Step Out).
    - Continuar la ejecución normal (Resume).

    Estas herramientas son muy útiles para detectar errores lógicos y entender el flujo 
    del programa.
*/


// Preparación del entorno y ejemplo básico:

/*
    Para practicar, crea dos archivos: index.html y main.js

    index.html:
    ------------------------------------
    <!DOCTYPE html>
    <html>
    <head>
        <script src="main.js"></script>
    </head>
    <body>
        <p>Test Site</p>
    </body>
    </html>
    ------------------------------------

main.js:
*/

function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello !";
}

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

/* 
    Abrir index.html en el navegador y abrir las herramientas de desarrollo (Ctrl + Shift + I).
    En la consola se verán los mensajes:

    before outer() call
    Hello !
    after outer() call
*/


// Uso de la instrucción debugger:

/*
    Insertamos debugger antes de llamar a outer() para detener la ejecución ahí:
*/

console.log("before outer() call");
debugger;  // Aquí se detendrá la ejecución si el debugger está activo
console.log(outer());
console.log("after outer() call");

/* 
    Al recargar la página en el navegador, la ejecución se detendrá justo en la línea del debugger.
    Podemos inspeccionar variables, paso a paso avanzar, etc.
*/

// Reanudar ejecución y breakpoints:

/*
    - Botón Resume (▶️ o F8) para continuar ejecución hasta el final o siguiente breakpoint.
    - En el panel Sources/Debugger podemos hacer clic en número de línea para poner/quitar breakpoints.
    - Al usar breakpoints, el código se detiene donde queremos sin modificar el archivo con debugger.

    Consejo: normalmente usamos breakpoints en DevTools, no el debugger en el código.
*/


// Cómo trabajar sin la instrucción debugger:

/*
    Modifica main.js eliminando la línea con debugger. 

    Luego, en el navegador, establece dos breakpoints:

    - En console.log("before outer() call"); (línea 12)
    - En console.log("after outer() call"); (línea 14)

    Recarga la página. El programa se detendrá en el primer breakpoint.
    Al pulsar Resume, continuará hasta el segundo breakpoint y se detendrá.
    Otro Resume ejecutará el programa hasta el final.

    Esta es la forma habitual de depurar sin modificar el código con debugger.
*/


// Step Over (Saltar sobre función)

/*
    Además de moverse entre breakpoints con Resume, podemos ejecutar el código instrucción por instrucción.

    Cuando la instrucción es una llamada a función, el debugger puede:

    - Step Into: entrar en la función y ejecutar línea a línea dentro de ella.
    - Step Over: ejecutar toda la función como una sola instrucción sin entrar.

    Elige Step Over para ejecutar la función sin inspeccionarla paso a paso.
*/

// Elimina el segundo breakpoint (línea final) y recarga.
// Usa Step Over (F10) para avanzar línea a línea y observa la consola y el resaltado de código.


// Step Into (Entrar en función):

/*
    La diferencia con Step Over es que Step Into "entra" en la función llamada y permite 
    depurarla línea a línea.

    Por ejemplo:

    - Detente en console.log(outer());
    - Ejecuta Step Into para entrar en la función outer.
    - Luego Step Into nuevamente para entrar en inner y detenerte en return "Hello !".
*/


// Pila de llamadas (Call Stack):

/*
    Call Stack muestra las funciones activas en orden de llamada:

    - Función actual (ejemplo: inner)
    - Función que la llamó (outer)
    - Función global o anónima (main)

    Si estás detenido dentro de inner, la pila muestra inner > outer > global.

    En la consola, puedes probar:

    console.log(name); // muestra "inner" cuando estás dentro de inner

    Si cambias el contexto a outer (clic en Call Stack):

    console.log(name); // muestra "outer"

    Puedes cambiar contexto para inspeccionar variables locales en diferentes funciones sin 
    perder el punto de detención actual.
*/


// Modificar variables en ejecución:

/*
    Puedes modificar variables locales durante la depuración.

    Por ejemplo, en inner:

    console.log(name); // "inner"
    name = "nuevo nombre";
    console.log(name); // "nuevo nombre"

    Al continuar ejecución, el programa usará el nuevo valor.

    También puedes usar la ventana Watch para ver y modificar variables sin usar consola.
*/


// Step Out (Salir de función):

/*
    Step Out ejecuta el resto de la función actual y detiene la ejecución justo después de 
    volver a la función que la llamó.

    Ejemplo:

    - Pon breakpoint en línea dentro de inner.
    - Al detenerse, pulsa Step Out.
    - El programa ejecutará inner completa y se detendrá en outer justo después de la llamada.
*/


// Medir tiempo de ejecución de código:

/*
    Además de que un programa funcione correctamente, es importante que sea eficiente.

    Para medir tiempos de ejecución en JS, usamos console.time y console.timeEnd.

    Ejemplo: calcular π con la fórmula de Leibniz (serie infinita aproximada)
*/

// Cálculo sin medir tiempo:

let part = 0;
for (let k = 0; k < 10000000; k++) {
    part += ((-1) ** k) / (2 * k + 1);
}
let pi = part * 4;
console.log(pi); // -> aproximado a 3.1415925535897915

// Cálculo con medición de tiempo:

part = 0;
console.time('Leibniz');
for (let k = 0; k < 10000000; k++) {
    part += ((-1) ** k) / (2 * k + 1);
}
console.timeEnd('Leibniz'); // Ejemplo: Leibniz: 450 ms (varía según equipo)
pi = part * 4;
console.log(pi);

// Optimización: reemplazar potencia por condicional (más rápido)

part = 0;
console.time('Leibniz optimizado');
for (let k = 0; k < 10000000; k++) {
    part += (k % 2 === 0 ? 1 : -1) / (2 * k + 1);
}
console.timeEnd('Leibniz optimizado'); // Más rápido que el anterior
pi = part * 4;
console.log(pi);

/*
    Con estas herramientas podemos analizar el rendimiento de nuestro código,
    detectar cuellos de botella y optimizar partes lentas.
*/


// Resumen de la sección:

/*
    Saber usar las herramientas de desarrollo y el debugger es esencial para todo programador.

    Nos permite:
    - Encontrar errores lógicos difíciles de detectar.
    - Controlar la ejecución paso a paso.
    - Inspeccionar y modificar variables en tiempo real.
    - Optimizar el rendimiento midiendo tiempos.

    Sin depuración paso a paso es difícil entender por qué un programa no funciona como se espera.

    Practica el uso de breakpoints, Step Into/Over/Out y la consola para mejorar tu debugging.
*/



// SECCIÓN PRÁCTICA:


// Ejercicio 01 - Ejecuta el siguiente código:

let end = 2;
for(let i = 1; i < end; i++) {
    console.log(i);
}

/* 
    Debería imprimir en consola los números 1 y 2.

    Usa el debugger para que el programa imprima los números del 1 al 5 
    sin modificar el código.

    Solo usa breakpoints y la opción de modificar variables en tiempo de ejecución.
*/

// Respuesta:

/*
    Pondría un breakpoint justo en la línea del for. Cuando se detiene la ejecución,
    voy al DevTools, abro la consola y ahí escribo end = 6 para cambiar el valor de esa 
    variable. Así, sin modificar el código, el bucle imprime los números del 1 al 5 en
    consola como pide el ejercicio.

    Puedo usar la pestaña "Watch" solo para ver que el valor de la variable end efectivamente 
    cambió.
*/


// Ejercicio 02:

/*
    Usa el debugger para entender por qué el resultado final es cero,
    aunque en cada iteración el valor de la variable result aumenta.

    Usa la ventana Watch para seguir los cambios en las variables.
*/

let counter = 0;
let maxValue = 10;
let result = 1;
debugger;
for (counter = 0; counter < maxValue; counter++) {
    console.log(result);
    result *= maxValue - counter - 1;
}
console.log("Resultado final: ", result);

// Respuesta:

/*
    Primero agregaría un punto de quiebre en la línea del for. Luego, 
    utilizaría la pestaña "Watch" del panel de desarrollador (DevTools)
    para seguir el valor de las variables counter, maxValue y result.

    Durante la ejecución, observaría que en cada iteración result se 
    va multiplicando por un valor decreciente. En la novena iteración 
    (counter = 9), se evalúa:

    result *= maxValue - counter - 1;
    result *= 10 - 9 - 1 = 0

    Esto hace que result se convierta en 0, y como a partir de ese 
    momento cualquier multiplicación por cero sigue siendo cero, el 
    valor final impreso será 0.

*/


// Ejercicio 03 - Ejecuta este código:


function max(array) {
    let maxValue = array[1];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

console.log( max([1, 4, 6, 2]) );  // -> 6
console.log( max([10, 4, 6, 2]) ); // -> 6 (incorrecto)

/*
    La función max debería devolver el mayor número del arreglo.

    Usa el debugger para seguir la ejecución paso a paso, observando i y maxValue.
    Detecta dónde está el error y corrige el código para que funcione correctamente.
*/


// Respuesta:

/*
    Puse un breakpoint dentro del for y vi que el valor inicial de maxValue estaba mal.

    Al asignarle array[1], se está ignorando el primer elemento del arreglo, que podría 
    ser el mayor.

    Por eso, si el número más grande está en la posición 0, como en el segundo ejemplo, 
    no se considera.

    La solución es cambiar:

        let maxValue = array[1];

    por:

        let maxValue = array[0];

    Así se evalúa todo el arreglo desde el inicio.
*/


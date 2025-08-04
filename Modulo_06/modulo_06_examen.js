// Questionario:

// Pregunta 01 - ¿Cuál de las siguientes es un error de sintaxis?

/*
    Opciones:

    - Intentar llamar a una función que no existe.
    - Intentar modificar el valor de una constante. 
    - Falta de paréntesis al final de una condición en una instrucción
      if. / Respuesta
    - Intentar leer un valor de una variable que no hemos declarado 
      previamente.
*/


// Pregunta 02 - Los errores lógicos que cometemos mientras programamos
// no son indicados por el intérprete. ¿Por qué?

/*
    Opciones:

    - El intérprete ignora los errores lógicos porque no afectan el 
      resultado del programa de ninguna manera.
    - El intérprete no indica errores mientras el programa se está 
      ejecutando, porque los detecta antes de que el programa corra 
      (no permite que el programa se ejecute).
    - El intérprete no puede identificar errores lógicos porque no 
      están relacionados ni con la sintaxis ni con la semántica del 
      lenguaje JavaScript. / Respuesta
    - Se debe a la configuración predeterminada del intérprete, aunque 
      podemos modificar dicha configuración para que también se señalen 
      los errores lógicos.
*/


// Pregunta 03 - Analiza el siguiente código:

"let x = 10";
console.log(x);


// ¿Qué excepción se lanzará como resultado del intento de ejecución?

/*
    Opciones:

    - RangeError.
    - SyntaxError.
    - ReferenceError. / Respuesta
    - TypeError.
*/


// Pregunta 04 - Analiza el siguiente código:

/* 
    let x 10;
    console.log(x); 
*/


// ¿Qué excepción se lanzará como resultado del intento de ejecución?

/*
    Opciones:

    - RangeError.
    - SyntaxError. / Respuesta
    - ReferenceError.
    - TypeError.
*/


// Pregunta 05 - Analiza el siguiente código:

let x = 10;
ocnsole.log(x);


// ¿Qué excepción se lanzará como resultado del intento de ejecución?

/*
    Opciones:

    - TypeError.
    - ReferenceError. / Respuesta
    - SyntaxError. 
    - RangeError.
*/


// Pregunta 06 - Analiza el siguiente código:

/* 
    const x = 10;
    onsole.log(x);
    x += 10; 
*/


// ¿Qué excepción se lanzará como resultado del intento de ejecución?

/*
    Opciones:

    - SyntaxError. 
    - ReferenceError y TypeError. 
    - ReferenceError. / Respuesta
    - TypeError.
*/


// Pregunta 07 - Analiza el siguiente código:

/* 
    const x = 10;
    x = 20; 
*/


// ¿Qué excepción se lanzará como resultado del intento de ejecución?

/*
    Opciones:

    - TypeError. / Respuesta
    - RangeError.
    - SyntaxError. 
    - ReferenceError.
*/


// Pregunta 08 - Analiza el siguiente código:

try {
    ocnsole.log("start");
} catch (error) {
    console.log("error");
}

console.log("end");

// ¿Qué ocurrirá como resultado de su ejecución?

/*
    Opciones:

    - La ejecución del programa se interrumpirá y la consola mostrará 
      el mensaje por defecto "Uncaught ReferenceError: ocnsole is not 
      defined".
    - La consola mostrará las siguientes palabras en líneas sucesivas: 
      error, end. / Respuesta
    - La consola mostrará las siguientes palabras en líneas sucesivas: 
      start, error, end.
    - La consola mostrará las siguientes palabras en líneas sucesivas: 
      start, end.
*/


// Pregunta 09 - Analiza el siguiente código:

try {
    ocnsole.log("start");
} catch (error) {
    console.log("error");
} finally {
    console.log("end");
}


// ¿Qué ocurrirá como resultado de su ejecución?

/*
    Opciones:

    - Las siguientes palabras aparecerán en la consola: start, end.
    - Las siguientes palabras aparecerán en la consola: error, end. / Respuesta
    - La palabra error aparecerá en la consola.
    - Las palabras start, error, end aparecerán en la consola en 
      líneas sucesivas.
*/


// Pregunta 10 - Analiza el siguiente código:

try {
    console.log("start");
} catch (error) {
    console.log("error");
} finally {
    console.log("end");
}


// ¿Qué ocurrirá como resultado de su ejecución?

/*
    Opciones:

    - Las siguientes palabras aparecerán en la consola: error, end.
    - La palabra error aparecerá en la consola.
    - Las siguientes palabras aparecerán en la consola: start, error, end.
    - Las siguientes palabras aparecerán en la consola: start, end. / Respuesta
*/


// Pregunta 11 - ¿Cómo se llama el lugar donde se detiene la ejecución del código del programa?

/*
    Opciones:

    - punto de interrupción (breakpoint). / Respuesta
    - punto de pausa (pausepoint).
    - punto de salida (exitpoint).
    - punto de detención (stoppoint).
*/


// Pregunta 12 - Usando el depurador, insertamos un punto de interrupción 
// en el código, en el cual el programa se detiene después de ejecutarse. 
// En el depurador, encontramos un botón llamado Step entre las opciones 
// de ejecución paso a paso. ¿Qué ocurre al presionarlo?

/*
    Opciones:

    - Se ejecutará exactamente una instrucción inmediatamente después del 
      punto de interrupción y el programa se pausará nuevamente. / Respuesta
    - El programa se ejecutará hasta el final o hasta el siguiente punto 
      de interrupción.
    - El programa se reiniciará desde la primera instrucción.
    - El programa se ejecutará hasta el final, sin importar si hay más 
      puntos de interrupción en el resto del código o no.
*/


// Pregunta 13 - ¿Dónde puedes encontrar en el depurador la información sobre las funciones que están siendo llamadas actualmente en tu programa?

/*
    Opciones:

    - En la ventana de seguimiento (watch).
    - En la consola.
    - No hay acceso a esa información.
    - En la ventana de pila de llamadas (call stack). / Respuesta
*/


// Pregunta 14 - Quieres medir cuánto tiempo tarda en ejecutarse un 
// determinado fragmento de código. 
// Para hacerlo, basta con preceder el fragmento de código con:

/*
    Opciones:

    - El comando console.timeStart("counter") y finalizar con 
      console.timeEnd("counter").
    - El comando console.time("start") y finalizar con console.time("end").
    - El comando timestart() y finalizar con timeEnd().
    - El comando console.time("counter") y finalizar con console.timeEnd("counter"). / Respuesta
*/


// Examen:

// Pregunta 01 - La condición if(a >= 0) puede ser reemplazada por la condición:

/*
    Opciones:

    if (0 < a);
    if (!(a > 0 && a == 0));
    if (a > 0 && a == 0); 
    if (a > 0 || a == 0); / Respuesta
*/

// Pregunta 02 - La condición if (!a) puede ser reemplazada por la condición:

/*
    Opciones:

    if (a === false); 
    if (!!a);
    if (a);
    if (a == false); / Respuesta
*/

// Pregunta 03 - Queremos reescribir el siguiente fragmento de código usando el operador condicional:

let userName;
if (test) {
    userName = "alice";
} else {
    userName = "bob";
} 

/*
    Opciones:

    let name = test : "alice" ? "bob";
    let name = if test ? "alice" : "bob"; 
    let name = (test)("alice")("bob");
    let name = test ? "alice" : "bob"; / Respuesta
*/


// Pregunta 04 - ¿Cuál de las siguientes operaciones es una ternaria?

/*
    Opciones:

    - Un operador de asignación =.
    - Un operador typeof.
    - Un operador de incremento ++.
    - Un operador condicional ? :. / Respuesta
*/

// Pregunta 05 - Revisa el siguiente código:

let x = 100;
if (x < 100) 
    x = 20;
console.log(x)

// ¿Qué se mostrará en la consola como resultado de su ejecución?

/*
    Opciones:
    100 / Respuesta
    false
    20
    nada
*/

// Pregunta 06 - Revisa el siguiente código:

if (counter <= 10) {
    if (counter >= 10) {
        console.log(1);
    }
}

// Podemos reemplazarlo usando:

/*
    Opciones:

    - if (true) console.log(1); 
    - if (counter == 10) console.log(1); / Respuesta;
    - if (false) console.log(1);
    - if (counter >= 10) console.log(1);
*/

// Pregunta 07 - Revisa el siguiente fragmento de código:

if (counter <= 10 && show === false) {
    console.log("test");
}

// ¿Qué valores pueden tener las variables counter y show para que la consola 
// muestre "test" como resultado de la ejecución del código?

/*
    Opciones:

    - counter: 10, show: true;
    - counter: 11, show: false;
    - counter: 9, show: true;
    - counter: 10, show: false; / Respuesta
*/


// Pregunta 08 - La instrucción switch:

/*
    Opciones:

    - No está presente en el lenguaje JavaScript.
    - Es una instrucción condicional que funciona idénticamente a la instrucción if.
    - Es una instrucción condicional que permite tomar diferentes acciones dependiendo del valor
      almacenado en la variable indicada. / Respuesta
    - Permite cambiar el modo del programa a modo depuración.
*/

// Pregunta 09 - Analiza el siguiente código:

if (counter === 10) {
    console.log("abc");
}

// ¿Cómo podemos escribir la misma condición usando la instrucción switch?

/*
    Opciones:

    case(counter) {
        switch 10:
            console.log("abc")
    };


    switch(counter) {
        case 10:
            console.log("abc")
    }; / Respuesta

     switch(counter) 
        case 10:
            console.log("abc");
    

    switch(counter) {
        case ? 10:
            console.log("abc")
    };
*/

// Pregunta 10 - ¿Cuál secuencia de sentencias if ... else es incorrecta?

/*
    Opciones:

    - if ... else ... else if ... / Respuesta
    - if ... else ...
    - if ... else if ...
    - if ... else if ... else if ...
*/

// Pregunta 11 - ¿Cuál de las siguientes no es una instrucción de bucle en JavaScript?

/*
    Opciones:

    - for ... of
    - if ... else / Respuesta
    - for ... in
    - do ... while
*/

// Pregunta 12 - ¿Cuál de las siguientes instrucciones de bucle está destinada únicamente a recorrer 
// todas las claves del objeto indicado?

/*
    Opciones:

    - for ... in / Respuesta
    - if ... else
    - do ... while
    - for ... of 
*/

// Pregunta 13 - Si queremos mostrar todos los elementos del arreglo days en orden inverso (comenzando desde
// el último elemento), entonces podemos hacerlo usando la instrucción:

/*
    Opciones:

    for (let i = days.length; i > 0; i--)
        console.log(days[i]);

    for (let i = days.length; i > 0; i--)
        console.log(i);

    for (let i = days.length - 1; i >= 0; i--)
        console.log(days[i]); / Respuesta

    for (let i = days.length - 1; i > 0; i--)
        console.log(days[i]); 
*/


// Pregunta 14 - Analyze the following code:

let a = 10;
    do {
        console.log(a--);
    } while ( a > 3);


// ¿Qué instrucción puede reemplazar al do ... while del ejemplo anterior?

/*
    Opciones:

    while (a > 2)
        console.log(--a);

    while (a > 3)
        console.log(a--); / Respuesta

    while (a >= 3)
        console.log(a--);

    while (a > 4)
        console.log(--a);
*/

// Pregunta 15 - Analiza el siguiente código:

for (let x = 10; x > 1; x -= 2)
    console.log("hello");

// ¿Cuántas veces se mostrará "hello" en la consola como resultado de su ejecución?

/*
    Opciones:

    4
    10
    9
    5 / Respuesta
*/

// Pregunta 16 - Almacenamos un arreglo de nombres de animales en la variable animals (por ejemplo,
// let animals = ["dog", "cat", "hamster", "rabbit"];).
// ¿Cuál de las siguientes instrucciones mostrará exactamente dos nombres del arreglo?

/*
    Opciones:

    for (let i = 3; i < animals.length; i++)
        console.log(animals[i]);

    for (let i = 0; i < animals.length; i+=2)
        console.log(animals[i]); / Respuesta

    for (let n of animals)
        console.log(n);

    for (let n in animals)
        console.log(n);
*/

// Pregunta 17 - Examina el siguiente código:

for( let a = 5; a > 1; a--) {
    console.log(a);
}

// ¿Qué instrucción puede reemplazar al for del ejemplo anterior?

/*
    Opciones: 

    let a = 5; while (a > 1)
        console.log(a--); / Respuesta

    let a = 1; while (a < 5)
        console.log(a++);

    let a = 6; while (a >= 1)
        console.log(a--);

    let a = 5; while (a > 1)
        console.log(a++);
*/


// Pregunta 18 - Examina el siguiente código:

for (let a = 4; a < 4; a++) {
    console.log("test");
}

// ¿Cuántas veces se mostrará "test" en la consola como resultado de su ejecución?

/*
    Opciones:

    4
    1
    No se mostrará en absoluto. / Respuesta
    3
*/


// Pregunta 19 - Examina el siguiente código:

let car = {make: "citroen", model: "DS"};
for (let f in car)
    console.log(f)

// ¿Qué aparecerá en la consola como resultado?

/*
    Opciones:

    - "make""model" / Respuesta
    - "car"
    - "Citroen" "DS"
    - "make: Citroen" "model: DS"
*/


// Pregunta 20 - Examina el siguiente código:

let steps = [3, 2, 1];
for ( let n of steps)
    console.log(n);

// ¿Qué aparecerá en la consola como resultado?

/*
    Opciones:

    3 2 1 / Respuesta
    0 1 2
    1 2 3
    "[1, 2, 3]"
*/


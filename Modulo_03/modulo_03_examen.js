// Preguntas:

// Pregunta 1 - Analiza el fragmento de código:

let n = 2 * 3 ** 3 - 1;

/*
    El resultado almacenado en la variable n es:

    215
    18
    53 / respuesta
    36
*/

// Pregunta 2 - El número 2 está almacenado en la variable n: let n = 2;. Luego 
// se llama al comando n = n*n*n. 

/*
    Este último comando puede reemplazarse por:

    n *= 3;
    n **= 3; / Respuesta
    n ***= n;
    n **= n; 
*/

// Pregunta 3 - La cadena "12" se ha asignado a la variable str: let str = "12";. 
// Luego se realiza la siguiente operación: str = +str.

/*
    Como resultado, la variable str contendrá:

    "12" 
    "+12"
    "NaN"
    12 / Respuesta esto es debido a que el operador + convierte "1" a numero
*/

// Pregunta 4 - Analiza el siguiente fragmento de código:

n = 10;
let m = ++n;

/*
    Su ejecución dará como resultado los siguientes valores en las variables n y m:

    n: 11, m: 11 / Respusta esto es porque n se incrementa en 1 y m es asignado con el valor de m
    n: 10, m: 11 
    n: 10, m: 10
    n: 11, m: 10
*/

// Pregunta 5 - El resultado de la operación !(true && false || true) será:

/*
    Opciones:

    true 
    1
    null
    false / Respuesta
*/

// Pregunta 6 - El resultado de la operación 20 || 5 será:

/*
    25
    true 
    5
    20 / Respuesta es porque devuelve el primer valor verdadero y no true
*/

// Pregunta 7 - El resultado de la operación false || "false" será:

/*
    false
    true
    "false" / Respuesta al ser una cadena no vacia es true por eso devuelve el valor "false"
    0
*/

// Pregunta 8 - Analiza el siguiente fragmento de código:

let nr = "1";
let x = (nr === 1);
let y = (nr == 1);
let z = (nr = 1);

/*
    Después de su ejecución , las variables x, y, y z tendrán los valores:

    x: false, y: true, z: 1 / Respusta
    x: true, y: false, z: 1
    x: null, y: null, z: 1
    x: 1, y: 1, z: 1
*/

// Pregunta 9 - ¿Qué operador usamos si queremos verificar si dos variables 
// almacenan exactamente los mismos valores y del mismo tipo?

/*
    opciones:

    =
    !==
    ==
    === / Respusta
*/

// Pregunta 10 - El resultado de la comparación "abcd" > "Abcd" será:

/*
    Opciones: 

    true / Respuesta
    "abcd"
    1
    false
*/

// Pregunta 11 - El resultado de la operación 3 * 4 > 20 - 15 será:

/*
    Opciones: 

    -14
    NaN
    false
    true / Respuesta
*/

// Pregunta 12 - El método confirm permite crear un cuadro de diálogo. 
// ¿Qué valor devuelve este método cuando el usuario cierra la ventana?

/*
    Opciones:

    Siempre true.
    Siempre false.
    Depende de la opción seleccionada por el usuario.  / Respuesta
    La cadena ingresada por el usuario.
*/  

// Pregunta 13 - Los métodos window.alert, window.confirm y window.prompt son 
// métodos del objeto window. ¿Cuál de las siguientes afirmaciones no es verdadera?

/*
    - Los métodos alert, confirm y prompt requieren un argumento que especifique la 
    posición del cuadro de diálogo donde se mostrará la información. / Respusta 
    - Puedes llamar a los métodos del objeto window, como window.alert, sin incluir 
    el nombre window, por lo que llamar a alert("abc") sería correcto.
    - El objeto window representa la ventana en la que está abierto el documento HTML 
    que contiene el código JavaScript que se está ejecutando.
    - Los métodos alert, confirm y prompt muestran información en ventanas modales que 
    bloquean el acceso a la página hasta que se cierran.
*/


// Prengunta 14 - Analiza el siguiente código:

// ¿Qué valor tendrá la variable test si, después de ejecutar el código, 
// presionamos inmediatamente el botón OK en el cuadro de diálogo recién creado?

/*
    Opciones:

    "OK"
    "Hello"
    true
    "World" / Respuesta
*/

// Preguntas:

// Pregunta 1 - Necesitamos inventar un nombre para una variable donde almacenaremos la edad de un usuario. 
// Todos los siguientes nombres de variables son formalmente correctos, pero uno de ellos es el más legible. 
// Indica cuál es:

/*
    opciones:

    age
    user
    userAge / Respuesta
    ua

*/


// Pregunta 2 - Señala la declaración correcta de la variable height:

/*
    opciones:

    let height; / Respuesta
    height; 
    height is variable;
    variable hight;
*/


// Pregunta 3 Analiza el siguiente código:

// let counter = 100;
// let counter = 200;
// counter = 300;

// Como resultado de su ejecución:

/*
    opciones:

    El programa sera abortado debido a un error (redeclaración de una variable) / Respuesta
    La variable counter tendrá el valor 200.
    La variable counter tendrá el valor 100.
    La variable counter tendrá el valor 300.
*/


// Pregunta 4 - Revisa el siguiente código (nota el nombre de la variable):

let age = 32;
age = age + 1;
// console.log(Age);

// Como resultado de su ejecución, debería aparecer en la consola:

/*
    opciones:

    33
    mensaje de error: "Uncaught ReferenceError: Age is not defined" / Respuesta
    undefined
    32
*/


// Pregunta 5 - Queremos declarar una constante distance e inicializarla con el 
// valor 120. ¿Cómo debería verse dicha declaración?

/*
    opciones:

    const distance; distance = 120;
    const distance = 120; / Respuesta
    let distance; const distance = 120;
    let constant distance = 120;
*/


// Pregunta 6 -  Por defecto, JavaScript nos permite escribir en una variable no 
// declarada (la declara implícitamente por nosotros). Si queremos que el intérprete 
// trate esa situación como un error, debemos:

/*
    opciones:

    colocar la directiva "prevent undeclared variables"; al comienzo del script.
    colocar la directiva "use strict"; al comienzo del script. / Respuesta
    Realizar todas las asignaciones a variables dentro de un bloque de código delimitado por llaves.
    colocar la directiva "use strict"; antes de cada asignación que queramos proteger.
    
*/


// Pregunta 7 - Analiza el fragmento de código:

/* 
let name;
let age;

{
  let height;
  // 2
  { // 2
    { let weight; // 1 // 2
      console.log(name); // 1 // 2
      // 2
      console.log(name); // 2
    }
} 
*/

// Tenemos acceso a la variable weight:

/*
    opciones:

    en todo el programa.
    en la parte marcada como 2.
    en ninguna parte, ya que no tenemos acceso en absoluto (la variable no ha sido inicializada). 
    en la parte marcada como 1. / Respuesta
    
*/


// Pregunta 8 - ¿Qué significa sombreado (shadowing)?

/*
    opciones:

    Cambiar el valor de una variable.
    Eliminar y reescribir una parte seleccionada del código del programa.
    Declarar una variable global con el mismo nombre que una variable global previamente declarada.
    Declarar una variable local con el mismo nombre que una variable global previamente declarada. / Respuesta    
*/


// Pregunta 9 - Analiza el siguiente código:

let height = 180;
{
  let height = 200;
  height = height + 10;
}
console.log(height);

// Como resultado de su ejecución:

/*
    opciones:

    se mostrará un valor de 210 en la consola.
    se mostrará un valor de 200 en la consola.
    se mostrará un valor de 180 en la consola. / Respuesta.
    el programa se detendrá debido a un error (re-declaración de la variable height).   
*/

// Pregunta 10 - Los tipos de datos complejos (o compuestos):

/*
    opciones:

    puede consistir en múltiples elementos, cada uno de los cuales es de un tipo primitivo.
    no se utilizan en JavaScript.
    puede consistir en múltiples elementos, cada uno de los cuales puede ser de un tipo primitivo o compuesto. / Respuesta
    es un nombre alternativo para los tipos primitivos.   
*/

// Pregunta 11 - Si una variable almacena el valor false, entonces la variable:

/*
    opciones:

    es del tipo Math.
    ya no se utilizará en el programa.
    es del tipo Lógico.
    es del tipo Booleano. / Respuesta
*/

// Pregunta 12 - Analiza el siguiente código:


// let x = 10 / 100;
{
  console.log(typeof (x));
}
// Como resultado de su ejecución:

/*
    opciones:

    se mostrará "fraction" en la consola.
    aparecerá un error porque JavaScript no permite operaciones con números fraccionarios.
    se mostrará "number" en la consola. / Respuesta
    se mostrará 0.1
*/

// Pregunta 13 - Podemos reemplazar la declaración let x = 0x21; con:

/*
    opciones:

    let x = 17; 
    let x = 21; 
    let x = 33; / Respuesta
    let x = "0x21";
*/


// Pregunta 14 - Realizar la operación let x = 100 / 0; resultará en:

/*
    opciones:

    el valor 0 se almacena en la variable x.
    un valor indefinido se almacena en la variable x.
    un valor Infinity se almacena en la variable x. / Respuesta.
    el valor NaN se almacena en la variable x.
*/

// Pregunta 15 - Realizar la operación let x = 20n + 10;:

/*
    opciones:

    dará como resultado que se almacene el valor 30 en la variable x.
    dará como resultado que se almacene la cadena "20n10" en la variable x.
    provocará que el programa se aborte debido a un error. / Respuesta
    dará como resultado que se almacene el valor 30n en la variable x.
*/

// Pregunta 16 - Realizar la operación let x = "Alice" + 10; resultará en:

/*
    opciones:

    que se almacene en la variable x el valor NaN de tipo Number.
    que la ejecución del programa se interrumpa debido a un error.
    que se almacene en la variable x el valor 15 de tipo Number.
    que se almacene en la variable x el valor "Alice10" de tipo String. / Respuesta
*/


// Pregunta 17 - La variable msg contiene un valor de tipo String. La información 
// sobre la cantidad de caracteres de esta cadena se puede obtener usando:

/*
    opciones:

    msg.length()
    msg.chars
    msg.charsAt()
    msg.length / Respuesta
*/


// Pregunta 18 - Realizamos la operación: let x = "abcdefg".slice(2, 4);. Como resultado, el valor:

/*
    opciones:

    Se escribirá "cdef" en la variable x.
    Se escribirá "cdefg" en la variable x.
    Se escribirá "cd" en la variable x. / Respuesta
    Se escribirá "ab" en la variable x.
*/

// Pregunta 19 - Queremos convertir la cadena "1024" a tipo Number y almacenar el resultado en la 
// variable n. Señala la instrucción correcta:

/*
    opciones:

    let n = Number("1024"); / Respuesta
    let n = "1024" + 0;
    let n = StringToNumber("1024");
    let n = String("1024");
*/


// Pregunta 20 - Declaramos un objeto llamado dog, con dos campos: age y name:

/* let dog = {
  age: 5,
  name: "Axel"
} */

// Para cambiar el valor del campo age a 6, debemos realizar:

/*
    opciones:

    dog.age = 6; / Respuesta
    dog{age} = 6;
    dog[age] = 6;
    age of dog = 6;
*/

// Pregunta 21 - Hemos declarado un arreglo de nombres de meses seleccionados:

// let summer = ["June", "July", "August"];

// Queremos cambiar el valor "July" almacenado en el arreglo al número 7:

/*
    opciones:

    summer.July = 7;
    summer[1] = 7; / Respuesta
    summer[0] = 7;
    No podemos hacer esto (un arreglo solo puede contener elementos del mismo tipo).
*/

// Pregunta 22 - Para verificar la cantidad de elementos del arreglo almacenado en la variable names, llamamos a:

/*
    opciones:

    names.length();
    length of names;
    names.length / Respuesta
    names.count
*/

// Pregunta 23 - Analiza el siguiente fragmento de código:

let summer = ["June", "July", "August"];
let index = summer.indexOf("June");

// La variable index tendrá el valor:

/*
    opciones:

    0 / Respuesta
    True
    1
    "June"
*/


// Pregunta 24 - Hemos declarado un arreglo de animales:

// let animals = ["dog", "cat", "hamster"];

// Luego llamamos al método animals.push("canary");. Como resultado, el arreglo animals se verá así:

/*
    opciones:

    ["canary"]
    ["dog", "cat", "hamster"]
    ["dog", "cat", "hamster", "canary"] / Respuesta
    ["canary", "dog", "cat", "hamster"]
*/


// Pregunta 25 - Hemos declarado un arreglo de animales:

// let animals = ["dog", "cat", "hamster"];

// Luego llamamos al método animals.pop();. Como resultado, el arreglo animals se verá así:

/*
    opciones:

    ["hamster"]
    ["dog", "cat"] / Respuesta
    ["cat", "hamster"]
    ["dog", "cat", "hamster"]
*/

// Pregunta 26 - En la variable daysOfWeek, colocamos un arreglo con los nombres de los días 
// de la semana. Para invertir el orden de los elementos del arreglo, debemos llamar a:

/*
    opciones:

    daysOfWeek.invert();
    invert(daysOfWeek);
    daysOfWeek.reverse(); / Respuesta
    reverse daysOfWeek;
*/

// Pregunta 27 - Hemos declarado un arreglo:

let animals = ["dog", "cat", "hamster"];

// Queremos comentar temporalmente el elemento "cat", y para ello, podemos modificar la declaración 
// de la siguiente manera:

// opciones:

    // let animals = ["dog", //"cat",// "hamster"];
    // let animals = ["dog", /*"cat",*/ "hamster"]; / Respuesta
    // let animals = ["dog", #"cat",# "hamster"];
    // let animals = ["dog", "hamster"];

// Pregunta 28 - Analiza el siguiente fragmento de código:


let counter = 0;
let userName = "John";

// Después de declarar la variable counter, queremos poner un comentario corto con información 
// sobre para qué se usa la variable. Para hacerlo, modificamos la línea con la declaración 
// a la siguiente forma:

/*
    opciones:

    // let counter = 0; user visit counter
    let counter = 0; # user visit counter
    let counter = 0; /* user visit counter
    let counter = 0; // user visit counter / Respuesta
*/

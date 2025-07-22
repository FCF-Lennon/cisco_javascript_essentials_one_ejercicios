// Cuestionario:

// Pregunta 01: El fragmento de código:

function test() { };

// es:

/*
    - La llamada a la función test.
    - La declaración de la variable test en la que se almacenarán los valores
      devueltos por la función completada.
    - Incorrecto, ya que el código está mal escrito y no significa nada.
    - La declaración de una función test vacía. / Respuesta
*/


// Pregunta 02 - Si una función debe devolver algún valor calculado al finalizar, 
// ¿qué palabra clave usarías para hacerlo?

// Opciones:
/*
    - return; / Respuesta
    - ret;
    - yield;
    - function;
*/


// Pregunta 03 - Analiza el siguiente código:

function test(counter) {
  console.log("test");
  if (counter > 0)
    test(--counter);
}
test(3);

// ¿Cuántas veces se mostrará la palabra "test" en la consola?

// Opciones:
/*
    - 0
    - 4
    - 2
    - 4 / Respuesta
*/


// Pregunta 04 - Analiza el siguiente código:

let x = 10;
function test() {
  let x = 20;
  console.log(x);
}

// ¿Qué se mostrará en la consola como resultado de su ejecución?

// Opciones:
/*
    - 20 
    - 10
    - x
    - No se mostrará nada / Respuesta.
*/


// Pregunta 05 - Revisa el siguiente código:

x = 10;
function test(x) {
  console.log(x);
}
test(20);

// ¿Qué se mostrará en la consola como resultado de su ejecución?

// Opciones:
/*
    - No se mostrará nada.
    - x  
    - 10 
    - 20 / Respuesta
*/


// Pregunta 06 - Revisa el siguiente código:

x = 10;
let y = 20;
function test(y) {
  console.log(y);
}
test(x);

// ¿Qué se mostrará en la consola como resultado de su ejecución?

// Opciones:
/*
    - x
    - 10 / Respuesta
    - Nada, porque la función espera que se pase la variable y y recibe x en su lugar.
    - 20
*/


// Pregunta 07 - Has definido una función usando la siguiente expresión de función:

let sum = function(a, b) {
  return a + b;
}

// ¿Cómo podría ser la definición correspondiente usando una función flecha (arrow function)?

// Opciones:
/*
    - let sum = (a, b) => a + b; / Respuesta
    - let sum = function(a, b) => {
        return a + b;
      };
    - let sum = (a, b) > a + b;
    - let sum = (a, b) => {
        a + b;
      };
*/


// Pregunta 08 - Se ha definido la siguiente función flecha:

let multiply = (m, n) => m * n;

// ¿Cómo reescribirías la función sin cambiar lo que hace? Selecciona la definición correcta.

// Opciones:
/*
    - let multiply = (m, n) => {
        return m * n;
      }; / Respuesta
    - let multiply = (m, n) => {
        console.log(m * n);
      };
    - let multiply = (m, n) =>
        return (a * n);
    - let multiply = (m, n) => {
        m * n;
      };
*/


// Pregunta 09 - Podemos usar el método forEach para recorrer los elementos
// de un arreglo.

// ¿Cuál de los siguientes fragmentos de código mostrará todos los elementos 
// consecutivos del arreglo animals en la consola?

// Opciones:
/*
    - animals.forEach(a => {
        console.log(a);
      }); / Respuesta
    - foreach(animals, a => {
        console.log(a);
      });
    - animals.forEach(a => a);
    - animals.forEach(console.log(animals));
*/


// Pregunta 10 - Una función de retrollamada (callback) es una función que:

// Opciones:
/*
    - Siempre se llama con un cierto retraso predefinido.
    - Siempre se ejecuta en intervalos fijos.
    - Contiene una referencia a sí misma en su código.
    - Se pasa a otra función como argumento y solo se llama dentro de su código. / Respuesta
*/


// Pregunta 11 - Analiza el siguiente código:

let show = function () {
  console.log("test");
}
setTimeout(show, 2000);

// ¿Qué sucede cuando lo ejecutas?

// Opciones:
/*
    - La consola mostrará "test" después de un retraso de 2000 segundos.
    - La consola mostrará "test" 2000 veces.
    - La consola mostrará "test" después de un retraso de 2 segundos. / Respuesta
    - La consola mostrará "show" después de un retraso de 2 segundos.
*/


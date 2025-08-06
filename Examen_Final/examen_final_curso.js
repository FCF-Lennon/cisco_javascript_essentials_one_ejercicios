// Questionario:

// Pregunta 01 - Al ingresar `about:blank` en la barra de direcciones de tu navegador:

/* Opción A: borrará todas las entradas en la página actual. */
/* Opción B: generará una página con información sobre el estado del navegador. */
/* Opción C: abrirá una pestaña con información sobre tu navegador. */
/* Opción D: generará y cargará una página HTML en blanco mínima en la pestaña actual. / Respuesta */


// Pregunta 02 - Analiza el siguiente código:

let id = "100";
{
  let id = 200;
  id = id + 1;
  console.log(id);
}

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 200 */
/* Opción B: 101 */
/* Opción C: 201 / Respuesta */ 
/* Opción D: 1001 */


// Pregunta 03 - Selecciona un conjunto de tipos de datos que contenga solo tipos complejos:

/* Opción A: Array, Object */
/* Opción B: Object, String */
/* Opción C: Array, Object, String / Respuesta */
/* Opción D: Boolean, Number, Bigint */


// Pregunta 04 - Podemos reemplazar la declaración `let x = 3e-3;` con:

/* Opción A: let x = 0.003; / Respuesta */
/* Opción B: let x = 0.0003; */
/* Opción C: let x = 0.333; */
/* Opción D: let x = 3000; */


// Pregunta 05 - Usando la técnica de interpolación de strings, 
// podemos crear la cadena:

// "I do not like travelling by plane"

// y almacenarla en la variable `msg` usando el siguiente comando:

/* Opción A: 
    let means = "plane"; 
    let msg = 'I do not like travelling by \{ means \}'; */
/* Opción B: 
    let means = "plane"; 
    let msg = `I do not like travelling by {means}`; */
/* Opción C: 
    let means = "plane"; 
    let msg = "I do not like travelling by ${ means }"; */
/* Opción D: 
    let means = "plane"; 
    let msg = `I do not like travelling by ${means}`; / Respuesta */


// Pregunta 06 - Declaramos un objeto `movie` con dos campos: `title` 
// y `year`:

let movie = {
  title: "Life",
  year: 1999
}

// Para cambiar el valor del campo `title` a "Matrix" necesitamos realizar:

/* Opción A: movie.title = "Matrix"; / Respuesta */
/* Opción B: movie{title} = "Matrix"; */
/* Opción C: movie[title] = "Matrix"; */
/* Opción D: title->movie = "Matrix"; */


// Pregunta 07 - Declaras el siguiente arreglo de animales:

let animals = ["canary", "dog", "cat"];

// Luego llamas al método: 

animals.push("hamster");

// ¿Cómo se verá el arreglo `animals` después de llamar al método?

/* Opción A: ["hamster", "canary", "dog", "cat"] */
/* Opción B: ["canary", "dog", "cat", "hamster"] / Respuesta*/
/* Opción C: ["canary", "dog", "cat"] */
/* Opción D: ["hamster"] */


// Pregunta 08 - Un código JavaScript incluye el comando:
console.log("http://somethingNew.org");

// Su ejecución:

/* Opción A: mostrará el siguiente mensaje en la consola: "http://somethingNew.org". / Respuesta */
/* Opción B: mostrará en la consola información sobre el progreso de carga de la página http://somethingNew.org. */
/* Opción C: enviará un registro con información sobre el script en ejecución a la dirección indicada http://somethingNew.org. */
/* Opción D: hará que la página http://somethingNew.org se cargue en el navegador. */


// Pregunta 09 - Analiza el siguiente fragmento de código:

let winter = ["December", "January", "February"];
let index = winter.indexOf("February");

// ¿Qué valor tendrá la variable `index`?

/* Opción A: 2 / Respuesta */
/* Opción B: 3 */
/* Opción C: "February" */
/* Opción D: 1 */


// Pregunta 10 - En la variable `daysOfWeek` colocas un arreglo con los 
// nombres de los días de la semana.

// ¿Qué método llamarás para invertir el orden de los elementos del arreglo?

/* Opción A: daysOfWeek = reverse(daysOfWeek); */
/* Opción B: daysOfWeek.invert(); */
/* Opción C: daysOfWeek.order(-1); */
/* Opción D: daysOfWeek.reverse(); / Respuesta*/


// Pregunta 11 - Revisa el siguiente código:

let msg1 = 'hello';
let msg2 = msg1.slice(-1);

console.log(msg2 ? msg2 : msg2 + msg1);

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: h */
/* Opción B: hello */
/* Opción C: o / Respuesta */
/* Opción D: ohello */


// Pregunta 12 - Analiza el siguiente código:

// let test = prompt("Run", "code");

// ¿Qué valor tendrá la variable `test` si, tras ejecutar el código, 
// presionamos inmediatamente el botón OK en el diálogo recién creado?

/* Opción A: true */
/* Opción B: Run */
/* Opción C: code / Respuesta */
/* Opción D: OK */


// Pregunta 13 - Analiza el siguiente código:

let x = false || true;
let y = "true" && "false";
let z = false && true;

console.log(`${x} ${y} ${z}`);

// ¿Qué aparecerá en la consola como resultado de su ejecución?

/* Opción A: false false true */
/* Opción B: false true true */
/* Opción C: true false false  / Respuesta */
/* Opción D: false false false */


// Pregunta 14 - Analiza el siguiente código:

// let a = true && 20;   // && devuelve el segundo operando si el primero es truthy => 20
// let b = 0 || 20;      // || devuelve el segundo operando si el primero es falsy => 20
// let c = 0 && 20;      // && devuelve el primero falsy encontrado => 0


// console.log(`${a} ${b} ${c}`);

// ¿Qué aparecerá en la consola como resultado de su ejecución?

/* Opción A: 20 20 0 / Respuesta */
/* Opción B: 1 1 0 */
/* Opción C: true true false */
/* Opción D: true 20 0 */


// Pregunta 15 - Examina el siguiente código:

let a = 20 + "10";
let b = 20 + +"10"; 
let c = 20 + -"10" + "10";
let d = "10" - "10" + "100"; 
let e = "A" - "B" + 0xA; // 0xA es notación hexadecimal y equivale a 10 decimal.

console.log(`${a}, ${b}, ${c}, ${d}, ${e}`);

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 30, 31, 39, 100, NaN */
/* Opción B: 30, 30, 20, 100, 2 */
/* Opción C: 2010, 2010, 20-1010, 0100, NaN */
/* Opción D: 2010, 30, 1010, 0100, NaN / Respuesta */


// Pregunta 16 - ¿Cuál de las siguientes instrucciones de bucle verifica 
// la condición de continuación del ciclo solo después de que la iteración 
// se ha completado?

/* Opción A: for ... in */
/* Opción B: for */
/* Opción C: do ... while / Respuesta */
/* Opción D: while */


// Pregunta 17 - Se ha definido la siguiente función usando una expresión 
// de función:

let sum = function (a, b) {
    return (a + b);
}

// ¿Cómo podría ser la definición correspondiente usando una función flecha?

/* Opción A: let sum = function (a, b) => {return (a + b); } */
/* Opción B: let sum = (a, b)-- > a + b; */
/* Opción C: let sum = (a, b) => { a + b; }; */
/* Opción D: let sum = (a, b) => a + b; / Respuesta */


// Pregunta 18 - El arreglo `temp` contiene datos de temperatura del aire 
// medidos durante un período de tiempo.

// Quieres mostrar la temperatura mínima usando el siguiente código:

/* 
    temp.forEach(e => min = min > e ? e : min);
    console.log(min); 
*/

// ¿Cómo debería ser la declaración de la variable `min`?

/* Opción A: let min = temp[0]; / Respuesta */
/* Opción B: let min = 0; */
/* Opción C: let min; */
/* Opción D: No es necesario, ya que se declarará automáticamente en su primer uso. */


// Pregunta 19 - Examina el siguiente código:

/* 
    let x = [10, 20, 30, 40];
    let y = [50, 60];
    x.reverse().push(y);

    console.log(x.length);
 */

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 4 */
/* Opción B: 2 */
/* Opción C: 5 / Respuesta */
/* Opción D: 6 */


// Pregunta 20 - Analiza el siguiente código:

for(let a = 1; a < 10; a += 2) {
    console.log(a);
}

// ¿Qué instrucción puede reemplazar al `for` del ejemplo?

/* Opción A: 
    let counter = 0; 
    while (counter < 10) console.log(counter++); */
/* Opción B: 
    let counter = 1; 
    while (counter++ < 10) console.log(counter++); */
/* Opción C: 
    let counter = 0; 
    while (counter++ < 10) console.log(counter++);  */
/* Opción D: 
    let counter = 0; 
    while (counter < 9) console.log(counter++); */

// Nota: ninguna es la respuesta correcta


// Pregunta 21 - Analiza el siguiente código:

let colors = ['red', 'green', 'blue'];
for (let c of colors) console.log(c);

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 
    red
    green
    blue / Respuesta */
/* Opción B: 012 */
/* Opción C: ['red', 'green', 'blue'] */
/* Opción D: 3 */


// Pregunta 22 - Analiza el siguiente código:

let route = {distance: 131, elevation: 1.4};

for (let k in route) console.log(k)

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 
    131
    1.4 */
/* Opción B: 2 */
/* Opción C: 
    distance
    elevation / Respuesta */
/* Opción D: distance */


// Pregunta 23 - Examina el siguiente código:

a = (n) => {
    return n > 2 ? n * a(n - 1) : 2
}

console.log(a(6));

// ¿Qué aparecerá en la consola como resultado?

/* Opción A: 6 */
/* Opción B: 4 */
/* Opción C: 120 */
/* Opción D: 720 / Respuesta */


// Pregunta 24 - Examina el siguiente código:

/* 
    let x = mult(2)(10);
    console.log(x); // -> 20 
*/

// ¿Cómo debería ser la declaración de la función `mult` si la ejecución 
// de este código da como resultado el valor 20 en la consola?

/* Opción A: 
    let mult = function (a, b) {
        return b ? mult(b) : mult(a);
    } */
/* Opción B: 
    let mult = function (a, b) {
        return a * b;
    } */
/* Opción C: 
    let mult = function (a) {
        return function (b) {
            return a * b;
        }
    } / Respuesta */

/* Opción D: Hay un error en el código y no es posible declarar correctamente dicha función. */


// Pregunta 25 - Analiza el siguiente fragmento de código:

let counter = 0;
let userName = "John";

// Después de declarar la variable `counter`, queremos agregar un comentario 
// corto con información sobre para qué se usa la variable.

// Para hacerlo, modificamos la línea de declaración a la siguiente forma:

/* Opción A: let counter = 0; // user visit counter / Respuesta */
/* Opción B: // let counter = 0; user visit counter */
/* Opción C: let counter = 0; /* user visit counter */
/* Opción D: let counter = 0; ;;user visit counter */


// Pregunta 26 - Examina el siguiente código:

// x = [40, 10, 30, 20, 50];
// x.sort(cmp);

// ¿Cómo debe declararse la función `cmp` si, después de ejecutar el código, 
// los elementos del arreglo `x` quedan ordenados en orden ascendente?

/* Opción A: let cmp = (a, b) => b > a; */
/* Opción B: let cmp = (a, b) => b - a; */
/* Opción C: let cmp = (a, b) => b < a; */
/* Opción D: let cmp = (a, b) => a - b; / Respuesta */


// Pregunta 27 - Analiza el siguiente código, al que le falta una línea:

counter = 2;

let interval = setInterval(() => {
    console.log(counter);
    // Insertar la línea faltante aquí.
    if (counter-- <= 0) clearInterval(interval);
}, 1000);

// ¿Cómo debe ser la línea faltante si como resultado de la ejecución 
// se muestran en consola los valores 2, 1 y 0 en secuencia?

/* Opción A: clearInterval(interval); */
/* Opción B: while (counter-- >= 0) clearInterval(interval); */
/* Opción C: if (counter-- <= 0) clearInterval(interval) / Respuesta; */
/* Opción D: if (counter-- >= 0) clearInterval(interval); */


// Pregunta 28 - Analiza el siguiente código:

function execute(todo, a, b) {
    return todo(a, b);
}

let power = (x, y) => x ** y;

// Antes de declarar la función, debemos agregar una línea más de código.

// ¿Cuál debería ser, si como resultado de la ejecución se muestra en 
// la consola el valor 9?

/* Opción A: let power = 9; */
/* Opción B: let power = (x, y) => x ** y; / Respuesta */
/* Opción C: let power = (x, y) => x * y; */
/* Opción D: let power = () => a ** b; */


// Pregunta 29 - Analiza el siguiente código:

/* 
    const a = "hello";
        console.log(a.toUpperCase());
    }
    } catch (error) {
        console.log(a)
    } finally {
        console.log(a);
    } 
*/

const h = "hello";

try {
    console.log(h.toUpperCase());
} catch (error) {
    console.log(h);
} finally {
    console.log(h);
}


// ¿Qué ocurrirá como resultado de su ejecución?

/* Opción A: Las siguientes palabras aparecerán en la consola en líneas
   consecutivas: HELLO, hello y hello. */
/* Opción B: Las siguientes palabras aparecerán en la consola en líneas
   consecutivas: hello y hello. */
/* Opción C: La siguiente palabra aparecerá en la consola: HELLO. */
/* Opción D: Las siguientes palabras aparecerán en la consola en líneas
   consecutivas: HELLO y hello. / Respuesta */


// Pregunta 30 - Colocar una instrucción `debugger;` en el código del programa hará que:

/* Opción A: el programa se detenga sin la capacidad de continuar, siempre que el entorno de ejecución soporte "funcionalidad de depuración". */
/* Opción B: la consola muestre el estado de finalización de la instrucción anterior al debugger. */
/* Opción C: el intérprete entre en modo reporte, haciendo que la consola imprima todos los comandos ejecutados secuencialmente. */
/* Opción D: el programa se pause con la capacidad de continuar, siempre que el entorno de ejecución soporte "funcionalidad de depuración". / Respuesta*/

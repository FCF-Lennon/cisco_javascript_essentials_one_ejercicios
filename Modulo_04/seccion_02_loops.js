// Bucles en JavaScript

/*
    ¿Qué son los bucles?

    Un bucle (loop) es una estructura que permite repetir un bloque de código varias veces. 
    A diferencia de las instrucciones condicionales (if, switch) que ejecutan algo solo si 
    se cumple una condición, los bucles permiten repetir acciones mientras la condición sea 
    verdadera o durante un número determinado de veces.

    Hay dos grandes tipos de bucles:

    - Bucles que repiten un bloque de código una cantidad conocida de veces.
    - Bucles que se repiten hasta que se cumpla una condición.
*/


// El bucle while

/*
    Repite un bloque de código mientras una condición sea verdadera.
*/

// Ejemplo sin bucle:
console.log(0);
console.log(10);
console.log(20);
console.log(30);
console.log(40);
console.log(50);
console.log(60);
console.log(70);
console.log(80);
console.log(90);

// Este código funciona, pero no es práctico si necesitas hacer lo mismo muchas veces.

// Con incremento manual:
let n = 0;
console.log(n);
n += 10;
console.log(n); // ... hasta 90

// Mejor solución: usar un bucle while:
n = 0;
while(n < 91) {
    console.log(n);
    n += 10;
} // Esto es más limpio, escalable y fácil de modificar.

// Otro ejemplo con confirmación del usuario:
let isOver = false;
let counter = 1;
while (!isOver) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter++;
}

// Versión simplificada:
isOver = false;
counter = 1;
while (!isOver) {
    isOver = !confirm(`[${counter++}] Continue the loop?`);
}


// El bucle do...while

/*
    A diferencia de while, el bucle do...while siempre ejecuta el bloque al menos una vez, 
    porque la condición se evalúa después.

    Sintaxis:

    do {
        // código
    } while (condición);
*/

// Ejemplo:
let isOver2;
let counter2 = 1;
do {
    isOver2 = !confirm(`[${counter2++}] Continue the loop?`);
} while (!isOver2);

// Comparación con while:
let condition = false;
while (condition) {
    console.log("A while loop iteration."); // nunca se ejecuta
}
do {
    console.log("A do ... while loop iteration."); // se ejecuta una vez
} while (condition);

// El bucle for

/*
    Se usa cuando se conoce cuántas veces se quiere repetir algo.
*/

// Ejemplo:
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Equivalente con while:
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Sumar elementos de un arreglo:
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < values.length; i++) {
    sum += values[i];
}
console.log(sum); // -> 190


// Bucles y arreglos

// Ingresar nombres por prompt y almacenarlos en un array:
let names = [];
isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Otras formas de recorrer un array:
values = [10, 30, 50, 100];

// Orden normal
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// Orden inverso
for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
}

// Saltando elementos
for (let i = 0; i < values.length; i += 2) {
    console.log(values[i]);
}


// for...of

// Recorre los valores de un array:
values = [10, 30, 50, 100];
sum = 0;
for (let number of values) {
    sum += number;
}
console.log(sum); // -> 190

// Con array de objetos:
let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}


// for...in

// Recorre las propiedades (claves) de un objeto:
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
}


// break y continue

// break, termina el bucle prematuramente:
let j = 0;
while (true) {
    console.log(j);
    j++;
    if (j >= 5) {
        break;
    }
}
alert(`Exited the loop with a break (${i}).`);

// continue, salta a la siguiente iteración:
for (let k = 0; k < 10; k++) {
    if (k == 3) {
        continue;
    }
    console.log(k);
}

/*
    ¿Por qué evitar break y continue si no son necesarios?

    Aunque son útiles, se recomienda evitarlos si puedes resolver el problema con 
    condiciones bien definidas dentro del bucle.

    Problemas comunes:

    - Dificultan la lectura y comprensión del código.
    - Pueden ocultar errores lógicos o generar bucles infinitos.
    - Hacen el código más propenso a errores.

    Recomendación:
    Usa break o continue solo si es estrictamente necesario. En la mayoría de los casos, 
    una buena condición en el bucle es suficiente.
*/

// Ejemplo mejorado:

// En vez de esto:
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// Haz esto:
for (let i = 0; i < 10; i++) {
    if (i !== 3) {
        console.log(i);
    }
}


// break en switch

// Si no pones break, el código "cae" al siguiente caso:

let gate = prompt("Choose gate: a, b, or c");
let win = false;
switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}

// Usar break correctamente:

gate = prompt("Choose gate: a, b, or c");
win = false;
switch (gate) {
    case "a":
    case "A":
    case 1:
    case "1":
        alert("Gate A: empty");
        break;
    case "b":
    case "B":
    case 2:
    case "2":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
    case "C":
    case 3:
    case "3":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}

// Encapsular con {} si hay variables internas:

gate = prompt("Choose gate: a, b, or c");
win = false;
switch (gate) {
    case "a": {
        let message = "Gate A";
        console.log(message);
        break;
    }
    case "b": {
        let message = "Gate B";
        console.log(message);
        break;
    }
    case "c": {
        let message = "Gate C";
        console.log(message);
        break;
    }
    default:
        alert("No gate " + String(gate));
}
if (win) {
    alert("Winner!");
}


/*
    Resumen:

    - Los bucles son esenciales en programación.
    - JavaScript ofrece varias formas: while, do...while, for, for...of, for...in.
    - Existen mecanismos para salir de ellos o saltar iteraciones con break y continue, 
      pero deben usarse con criterio.
    - Saber elegir el tipo de bucle adecuado y escribir condiciones claras mejora la legibilidad, 
      la eficiencia y la mantenibilidad del código.
*/


// Ejercicios:

// Ejercici 01 - Escribe un fragmento de código que escriba en la consola los números desde 100 
// hasta 0, pero en pasos de 10; es decir: 100, 90, 80... etc.

for (let index = 100; index >= 0; index-=10) {
    console.log(index);
}

// Ejercicio 02 - Modifica el programa anterior para que en lugar de usar 100 y 0, le pida al 
// usuario el primer y último número (pista: usa el cuadro de diálogo prompt).

// Verifica que los valores ingresados sean correctos (que el valor inicial sea mayor que el final).

let valor_inicial = prompt("Ingresa el valor inicial (cuenta regresiva):");
let valor_final = prompt("Ingresa el valor final (cuenta regresiva):");

if (!valor_inicial || !valor_final) {
    console.log("Los campos no pueden estar vacíos.");
} else if (isNaN(Number(valor_inicial)) || isNaN(Number(valor_final))) {
    console.log("El valor ingresado NO es válido.");
} else {
    let inicial = Number(valor_inicial);
    let final = Number(valor_final);

    if (inicial === 0) {
        console.log("El valor inicial no puede ser cero.");
    } else if (inicial < final) {
        console.log("El valor inicial no puede ser menor que el valor final.");
    } else if (inicial < 0 || final < 0) {
        console.log("Los valores no pueden ser números menores que cero.");
    } else {
        for (let index = inicial; index >= final; index -= 10) {
            console.log(index);
        }
    }
}


// Ejercicio 02 - Hay diez números diferentes en el siguiente arreglo:

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

/*
    Escribe un programa que primero muestre todos esos números en la consola, luego solo aquellos 
    que sean pares (pista: el resto de dividir un número par por 2 es igual a 0), y después solo 
    los que sean mayores que 10 y al mismo tiempo menores que 60.
*/

// 1. Mostrar todos los números
console.log("Todos los números:");
for (let number of numbers) {
  console.log(number);
}

// 2. Mostrar solo los números pares
console.log("\nNúmeros pares:");
for (let number of numbers) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// 3. Mostrar números mayores que 10 y menores que 60
console.log("\nNúmeros mayores que 10 y menores que 60:");
for (let number of numbers) {
  if (number > 10 && number < 60) {
    console.log(number);
  }
}



// Ejercicio 04 - Escribe un programa usando un bucle que le pida al usuario el nombre de una película 
// (primer prompt) y su puntuación en www.imdb.com (segundo prompt).
// El programa permitirá ingresar tantas películas como se quiera en un arreglo llamado movies.
// Cada elemento del arreglo será un objeto que contenga dos campos: title e imdb.
// La entrada finaliza si el usuario presiona Cancelar en alguno de los cuadros de diálogo.
// Luego, el programa debe mostrar en consola primero todas las películas con una puntuación menor a 7,
// y después las que tengan puntuación mayor o igual a 7.

// Muestra el nombre de la película y su puntuación juntos, por ejemplo:

// Lost in Translation (7.7)


let movies = [
    { title: "Fight Club", imdb: 8.8 },
    { title: "The Shawshank Redemption", imdb: 9.3 },
    { title: "The Good, the Bad and the Ugly", imdb: 8.8 },
    { title: "12 Angry Men", imdb: 9.0 },
    { title: "The Godfather", imdb: 9.2 },
    { title: "The Dark Knight", imdb: 9.0 },
    { title: "Schindler's List", imdb: 8.9 },
    { title: "The Lord of the Rings: The Return of the King", imdb: 8.9 },
    { title: "Pulp Fiction", imdb: 8.9 },
    { title: "Forrest Gump 1", imdb: 8.8 },
    { title: "Forrest Gump 2", imdb: 4.8 },
    { title: "Forrest Gump 3", imdb: 6.8 },
];

let mayor_puntuacion = [];
let menor_puntuacion = [];

let n_movies = Number(prompt("¿Cuántas películas va a ingresar?"));

if (isNaN(n_movies) || !Number.isInteger(n_movies) || n_movies < 1) {
    console.log("Debe ingresar un número válido");
} else {
    for (let n_movie = 1; n_movie <= n_movies; n_movie++) {
        let movie = prompt(`Escriba el nombre de la película #${n_movie}:`);
        let v_movie = movie === null || movie.trim() === "";

        let puntuacionTexto = prompt("Ingrese la puntuación de la película según IMDB:");
        let v_puntuacion = puntuacionTexto === null || puntuacionTexto.trim() === "";

        if (v_movie || v_puntuacion) {
            break;
        }

        let puntuacion = Number(puntuacionTexto);
        if (isNaN(puntuacion) || puntuacion < 0 || puntuacion > 10) {
            console.log("Puntuación inválida. Se omite esta entrada.");
            continue;
        }

        movies.push({ title: movie, imdb: puntuacion });
        console.log(`${movie} (${puntuacion})`);
    }

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].imdb >= 7) {
            mayor_puntuacion.push(movies[i]);
        } else {
            menor_puntuacion.push(movies[i]);
        }
    }

    console.log("\nPelículas con puntuación menor a 7:");
    for (let i = 0; i < menor_puntuacion.length; i++) {
        console.log(`${menor_puntuacion[i].title} (${menor_puntuacion[i].imdb})`);
    }

    console.log("\nPelículas con puntuación mayor o igual a 7:");
    for (let i = 0; i < mayor_puntuacion.length; i++) {
        console.log(`${mayor_puntuacion[i].title} (${mayor_puntuacion[i].imdb})`);
    }
}

// Ejercicio 05 - El contenido del objeto que describe la posición de la embarcación llamada 
// "Mareno" se muestra en la consola:

/*
LATITUD -> 40.07288  
LONGITUD -> 154.48535  
RUMBO -> 285.6  
VELOCIDAD -> 14.0  
IMO -> 9175717  
NOMBRE -> MARENO
*/

// El siguiente código se utiliza para esto. Completa el programa declarando el objeto que 
// falta en lugar de los tres puntos:

// let vessel = ... 

// Respuesta: 

let vessel = {
    LATITUD: 40.07288,
    LONGITUD: 154.48535,
    RUMBO: 285.6,
    VELOCIDAD: 14.0,
    IMO: 9175717,
    NOMBRE: "MARENO"
};

for (let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

// Ejercicio 06 -  Modifica el programa de calculadora que realizaste en el Módulo 4, Sección 2, 
// de manera que funcione dentro de un bucle hasta que el usuario ingrese Q en cualquiera de 
// los cuadros de entrada (prompt).

/*
    let firstNumber = Number(prompt("Enter first number"));
    let secondNumber = Number(prompt("Enter second number"));
    let operand = prompt("Enter operand (+, -, * or /)");
    let result;

    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+": result = firstNumber + secondNumber; break;
            case "-": result = firstNumber - secondNumber; break;
            case "*": result = firstNumber * secondNumber; break;
            case "/": result = firstNumber / secondNumber; break;
            default: result = "Error: unknown operand";
        }
    } else {
        result = "Error: at least one of the entered values is not a number";
    }
    alert(result);
*/

let closed = ""

while (closed !== "q") {

    let firstNumber = prompt("Ingrese el primer número: ");
    let secondNumber = prompt("Ingrese el segundo número: ");
    let operand = prompt("Ingrese la operación (+, -, * or /): ").toLowerCase();
    let result;

    if (firstNumber.toLowerCase() === "q" || secondNumber.toLowerCase() === "q" || operand === "q"){
        closed = "q"
        console.log("Operación cancelada.")
    } else {

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

        if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
        switch (operand) {
            case "+": result = firstNumber + secondNumber; break;
            case "-": result = firstNumber - secondNumber; break;
            case "*": result = firstNumber * secondNumber; break;
            case "/": result = firstNumber / secondNumber; break;
            default: result = "Error: operación desconocida";
        }
        } else {
            result = "Error: al menos uno de los valores ingresados no es un número";
        }

        alert(result);
    }
}

// Ejecución de condicional

// Sentencias condicionales:

/*
    En programación, necesitamos que el código pueda tomar decisiones. Eso significa que no siempre 
    queremos que haga lo mismo cada vez, sino que pueda actuar de forma diferente según ciertas condiciones.

    Imagina que tu programa es como un árbol: comienza en un tronco (el inicio del código) y en distintos 
    puntos puede tomar diferentes caminos o ramas. Cada decisión que toma el programa es como una bifurcación.

    Estas decisiones se basan en cosas como lo que el usuario hace, cálculos anteriores, u otra información. 
    JavaScript tiene varias formas de hacer esto, y a partir de ahora las vas a usar mucho más porque ya tienes 
    la mayoría de las herramientas necesarias.
 */

// La instrucción `if`:

/*
    La instrucción if es la forma más básica de decirle a JavaScript:
    “Si esta condición se cumple, haz esto.”
 
    Sintaxis:
 */

if (condition) {
    // bloque de código
}

/*
    Si la condición entre paréntesis es verdadera (true), se ejecuta el bloque de código entre llaves {}. 
    Si no, simplemente se lo salta.

    Ejemplo:
 */

let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}

/*
    Este código muestra una ventana de confirmación. Si el usuario hace clic en "OK", aparecerá otra alerta 
    con el mensaje "User ready!". Si hace clic en "Cancelar", no pasa nada más.

    Aunque el if tiene solo una línea dentro, se recomienda siempre usar llaves {}, porque si después quieres 
    agregar otra línea dentro del if, puede que te olvides de agregarlas y eso cause errores.

    Ejemplo con problema:
 */

let isUserReady2 = confirm("Are you ready?");
if (isUserReady2)
    console.log("User ready!");
    alert("User ready!"); // Esto se ejecutará siempre

/*
    Aquí alert("User ready!") se ejecutará siempre, no solo si isUserReady es true, porque no está dentro del 
    bloque del if. Para corregirlo, se deben poner llaves:
 */

let isUserReady3 = confirm("Are you ready?");
if (isUserReady3) {
    console.log("User ready!");
    alert("User ready!");
}

/*
    También es importante recordar que las variables creadas con let o const dentro de un bloque ({}) 
    solo existen dentro de ese bloque.

    Ejemplo:
 */

let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined

/*
    Aquí, la variable total solo vive dentro del if. Afuera de ese bloque, el programa 
    no la reconoce y da error.

    También es importante cómo escribimos condiciones más complejas. Mira este ejemplo:
 */

let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;

if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
console.log(shippingCost);

/*
    Aquí el envío será gratis solo si:
    - el usuario tiene más de 21 años y
    - el valor del carrito es 300 o más o tiene al menos 500 puntos.
    Podemos simplificar esto combinando todo en una sola condición:
 */

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}

// `if ... else`:

/*
    A veces queremos hacer algo si se cumple la condición, y otra cosa si no se cumple. Para eso usamos else.
    Ejemplo con dos if (no recomendable):
 */

let isUserReady4 = confirm("Are you ready?");
if (isUserReady4) {
    console.log("User ready!");
}
if (isUserReady4 == false) {
    console.log("User not ready!");
}

// Es mejor escribirlo así con else:

let isUserReady5 = confirm("Are you ready?");
if (isUserReady5) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}

// Así tenemos solo una condición, más limpio y más seguro.


// if ... else if:

/*
    Cuando hay más de dos caminos posibles, usamos else if. Esto permite que el programa revise 
    varias condiciones, una por una, y ejecute solo la primera que se cumpla.

    Ejemplo:
 */

let number = prompt("Enter a number", 0);
if (number < 10) {
    alert("<10");
} else if (number < 30) {
    alert("<30");
} else if (number < 60) {
    alert("<60");
} else if (number < 90) {
    alert("<90");
} else if (number < 100) {
    alert("<100");
} else if (number == 100) {
    alert("100");
} else {
    alert(">100");
}

/*
    El programa solo mostrará una alerta, la primera que coincida.

    También puedes hacer condiciones más largas y anidadas. En un ejemplo más avanzado (no incluido 
    en este fragmento), se evalúa edad, aprobación de los padres, puntos, valor del carrito, etc., 
    para decidir si el pedido es válido o si el envío es gratis.
 */


// Operador condicional (ternario)

/*
    Es una forma más corta de escribir if ... else cuando solo queremos asignar un valor a 
    una variable dependiendo de una condición.

    Ejemplo con if:
 */

let price = 100;
let shippingCost2;

if (price > 50) {
    shippingCost2 = 0;
} else {
    shippingCost2 = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost2}`);

// Lo mismo con operador ternario:

let shippingCost3 = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost3}`);

// También se puede usar para ejecutar cosas simples:

let start = confirm("Start?");
start ? alert("Here we go!") : console.log("Aborted");

// O guardar el resultado en una variable:

let start2 = confirm("Start?");
let message = start2 ? "Here we go!" : "Aborted";
alert(message);

/*
    Si el código dentro del ternario es muy largo o complejo, es mejor usar `if`.
 */


// switch ... case

/**
    El switch se usa cuando quieres comparar una misma variable con distintos valores posibles. 
    Es como una alternativa al if ... else if cuando todas las condiciones están relacionadas 
    con el mismo dato.

    Ejemplo:
 */

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
    case "a":
        alert("Gate A: empty");
        break;
    case "b":
        alert("Gate B: main prize");
        win = true;
        break;
    case "c":
        alert("Gate C: empty");
        break;
    default:
        alert("No gate " + String(gate));
}

if (win) {
    alert("Winner!");
}

/*
    El switch evalúa la expresión y compara con los valores de cada case usando === (comparación estricta). 
    Si no hay coincidencia, ejecuta default.
 */


// RESUMEN

/*
    Las instrucciones de control de flujo son clave en cualquier programa. Nos permiten adaptar el 
    comportamiento del código según distintas situaciones.

    - Lo más común es usar if ... else.
    - Si es algo simple, puedes usar el operador ternario.
    - Si estás evaluando una misma variable con distintos valores posibles, puedes usar switch.
 */


// Ejercicios:

/*  
    Ejercicio 01 - Escribe un script que le pida al usuario que ingrese un número.

    Muestra el mensaje "¡Bingo!" cuando el número sea mayor que 90 pero menor que 110.
    En caso contrario, muestra el mensaje: "Fallaste".
    Usa la instrucción if.
*/

// Respuesta:

let numero = prompt("Ingrese un numero: ");
if (numero > 90 && numero < 110) {
    alert("¡Bingo!");
} else {
    alert("Fallaste");
};


/*
    Ejercicio 02 - Reescribe el código del ejercicio anterior, reemplazando el if por un 
    operador condicional ternario.
*/

// Respuesta:

let num = prompt("Ingrese un numero: ");
let alerta = num > 90 && num < 110 ? "¡Bingo!" : "Fallaste";
alert(alerta);


/*
    Ejercicio 03 - Escribe una aplicación simple de calculadora.

    Pídele al usuario, uno por uno, los siguientes datos de entrada:

    - Dos números.
    - Un carácter que represente una operación matemática: uno de "+", "-", "*", "/".

    Si las entradas del usuario son válidas, calcula el resultado y muéstraselo.
    Si alguna entrada es inválida, muestra un mensaje indicando que ha ocurrido un error.

    Recuerda: el valor que devuelve la función prompt es de tipo cadena de texto (string).
    Puedes usar el método Number.isNaN para verificar si un número es válido después de 
    convertirlo.

    Por ejemplo:
    Number.isNaN(10) // devuelve false
    Number.isNaN(NaN) // devuelve true
*/

let num_uno = Number(prompt("Ingrese el primer número:")); 
let num_dos = Number(prompt("Ingrese el segundo número:")); 

console.log("Número uno:", num_uno);
console.log("Número dos:", num_dos);

if (isNaN(num_uno) || isNaN(num_dos)) {
    alert("El número ingresado no es válido.");
} else {

    let operacion = prompt("Ingrese la operación aritmética (+ - * /):");

    if (operacion === "+") {
        alert(`El resultado de la suma es: ${num_uno + num_dos}`);
    } else if (operacion === "-") {
        alert(`El resultado de la resta es: ${num_uno - num_dos}`);
    } else if (operacion === "*") {
        alert(`El resultado de la multiplicación es: ${num_uno * num_dos}`);
    } else if (operacion === "/") {
        if (num_dos === 0) {
            alert("No se puede dividir por cero.");
        } else {
            alert(`El resultado de la división es: ${num_uno / num_dos}`);
        }
    } else {
        alert("La operación ingresada NO es válida.");
    }
}

// o tambien:

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


// Laboratorio:

/*
    Ejecución condicional:

    Objetivos
    Familiarizar al estudiante con:

    - la ejecución condicional (qué es la ejecución condicional)
    - la instrucción if–else
    - el operador condicional (ternario)
    - la instrucción switch–case

    Escenario
    Durante la última modificación del programa con la lista de contactos, 
    permitimos que el usuario agregara un nuevo contacto con los datos que ingresaba 
    mientras el programa estaba en ejecución.
    
    Ahora vamos un paso más allá: intenta modificar el programa para que el usuario 
    pueda elegir qué quiere hacer con la lista. Tendrá las siguientes opciones:

    - mostrar el primer contacto (first)
    - mostrar el último contacto (last)
    - agregar un nuevo contacto (new)

    Al agregar un nuevo contacto, verifica si el usuario ingresó todos los datos necesarios.
    Si falta al menos uno de los tres valores (nombre, teléfono o correo electrónico), 
    no agregues el contacto.
*/

// Respuesta:

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, 
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    }, 
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let opcion = prompt(
    "Menú:\n" +
    "Marque 1: Ver el primer contacto\n" +
    "Marque 2: Ver el último contacto\n" +
    "Marque 3: Para agregar nuevo contacto"
);

let resultado = "";
let ultimo_contacto = 0;

if (!isNaN(Number(opcion))) {
    switch (opcion) {
        case "1":
            resultado = `El primer contacto es:\n${contacts[0].name}\n${contacts[0].phone}\n${contacts[0].email}.`;
            break;
        case "2":
            ultimo_contacto = contacts.length - 1;
            resultado = `El último contacto es:\n${contacts[ultimo_contacto].name}\n${contacts[ultimo_contacto].phone}\n${contacts[ultimo_contacto].email}.`;
            break;
        case "3":
            let nombre = prompt("Ingrese el nombre:");
            let telefono = prompt("Ingrese el teléfono:");
            let email = prompt("Ingrese el correo electrónico:");

            if (!nombre.trim() || !telefono.trim() || !email.trim()) {
                resultado = "Los campos no pueden estar en blanco.";
            } else {
                contacts.push(
                    { 
                        name:nombre.trim(), 
                        phone:telefono.trim(), 
                        email:email.trim() 
                    }
                );
                ultimo_contacto = contacts.length - 1;
                resultado = `El contacto fue agregado con éxito.\nAhora el último contacto de la lista es:\nNombre: ${contacts[ultimo_contacto].name}\nTeléfono: ${contacts[ultimo_contacto].phone}\nEmail: ${contacts[ultimo_contacto].email}`;
            }
            break;
        default:
            resultado = "La opción elegida no es válida.";
            break;
    }
} else {
    resultado = "La opción elegida no es válida.";
}

alert(resultado);

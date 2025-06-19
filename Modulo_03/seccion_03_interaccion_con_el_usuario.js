/*
    Interacción con el Usuario

    Muchos programas necesitan comunicarse con el usuario para funcionar correctamente. Esto significa que el 
    usuario debe ingresar datos, tomar decisiones o responder preguntas mientras el programa se ejecuta. Por 
    ejemplo, una calculadora no solo recibe números, también necesita saber qué operación realizar (suma, resta, etc.).

    En JavaScript, podemos escribir programas tanto para el navegador (cliente) como para servidores (con Node.js). 
    En el servidor, generalmente los datos ya están definidos o vienen de archivos, bases de datos o servicios web. 
    Pero en el navegador, la interacción con el usuario es constante (formularios, botones, etc.).

    Para lograr esto en el navegador, usamos principalmente elementos HTML como <input>, <button>, <select>, etc., y 
    accedemos a ellos mediante JavaScript usando el DOM (Document Object Model). Aquí un ejemplo:
*/

// Ejemplo básico con HTML y JavaScript embebido

/*
<!DOCTYPE html> 
<html> 
    <body> 
        <input id="nombreInput" type="text"> 
        <button onclick="console.log(document.getElementById('nombreInput').value)">Mostrar texto</button> 
    </body> 
</html> 

*/

/*
Este código crea un campo de texto y un botón. Al hacer clic, el programa imprime en consola lo que el usuario escribió.

Pero, como en este curso no trabajamos directamente con HTML ni el DOM, vamos a usar un método más simple para
interactuar: los cuadros de diálogo que ofrece el navegador. Son ventanas emergentes que permiten mostrar mensajes,
pedir confirmaciones o pedir datos.
*/

// Veamos los tres tipos de cuadros de diálogo en JavaScript:

// Cuadro de Alerta (alert)

// Muestra un mensaje simple al usuario con un botón "Aceptar". Sirve para mostrar información, pero no recibe respuestas.

// Ejemplos:

alert("¡Hola, Mundo!");
window.alert("¡Hola otra vez!");
alert(4 * 5); // Muestra 20
alert(true); // Muestra "true"
alert("A", "B"); // Solo muestra "A", el segundo argumento se ignora

/*
    Diferencias con console.log:

    - alert solo acepta 1 argumento (opcional).
    - console.log puede aceptar varios y no detiene el programa.
    - Con alert, el código se pausa hasta que el usuario presione OK.
*/

//-------------------------------------

// Cuadro de Confirmación (confirm)

// Muestra un mensaje con botones "Aceptar" y "Cancelar". Devuelve true si el usuario acepta, false si cancela.

// Ejemplo:

let salir = confirm("¿Estás seguro que quieres salir?");
console.log(salir); // true o false, según lo que el usuario elija

// Uso con operador ternario:

let eliminar = confirm("¿Eliminar archivo?");
let mensaje = eliminar ? "Eliminando..." : "Cancelado";
console.log(mensaje);


// Esto es útil para decisiones simples, como confirmar si el usuario quiere continuar o no.


//-------------------------------------

// 3. Cuadro de Entrada (prompt)

// Muestra una ventana con un campo de texto y botones "Aceptar" y "Cancelar". Devuelve el texto ingresado o null si se cancela.

// Ejemplo:

let nombre = prompt("¿Cómo te llamas?", "Juan Pérez");
nombre = nombre ? nombre : "Invitado"; // Si el usuario cancela, usamos "Invitado" como valor por defecto

let edad = prompt("Hola " + nombre + ", ¿cuántos años tienes?");
alert(nombre + " tiene " + edad + " años");

/*
    Nota: prompt siempre devuelve un string, incluso si parece un número. Usa Number() si necesitas hacer cálculos:
*/

let numeroIngresado = prompt("Ingresa un número:");
let numero = Number(numeroIngresado); // convierte string a número
alert("El doble es: " + (numero * 2));

/*
    Cuidado: si el usuario ingresa texto no numérico, el resultado será NaN (Not a Number).
    Siempre hay que validar o verificar lo que se ingresa.

    Resumen:

    - alert() → muestra un mensaje
    - confirm() → muestra mensaje y devuelve true o false
    - prompt() → pide un dato y devuelve un string o null

    Aunque estos cuadros no son los más usados en aplicaciones reales modernas, son útiles para aprender 
    los conceptos básicos de interacción con el usuario.

    ¡Recuerda que mientras estén activos, detienen la ejecución del resto del programa!
*/


// Ejercicio:

/*
    Usando todo lo que has aprendido hasta este punto, escribe un script que le pida al usuario el ancho, 
    alto y largo de una caja, luego calcule y devuelva al usuario el volumen de dicha caja.

    Por ejemplo, una caja con ancho = 20, alto = 10 y largo = 50 tendrá un volumen de 10.000 (omitimos las unidades, 
    ya que no son relevantes en este escenario). Por ahora, asume que los valores proporcionados por el usuario 
    son números válidos, pero si tienes alguna idea de cómo hacerlo, puedes intentar que este script sea resistente 
    a valores no válidos.
*/

// Respusta: 

let ancho = prompt("Ingrese el ancho:");
ancho = ancho !== "" && !isNaN(ancho) && Number(ancho) > 0 ? Number(ancho) : null;
console.log("El ancho ingresado es: ", ancho);

let alto = prompt("Ingrese el alto:");
alto = alto !== "" && !isNaN(alto) && Number(alto) > 0 ? Number(alto) : null;
console.log("El alto ingresado es: ", alto);

let largo = prompt("Ingrese el largo:");
largo = largo !== "" && !isNaN(largo) && Number(largo) > 0 ? Number(largo) : null;
console.log("El largo ingresado es: ", largo);

// Validación final y cálculo
let volumen = (ancho && alto && largo) ? ancho * alto * largo : "Todos los campos deben ser válidos.";
console.log("El volumen es: ", volumen);


// Laboratirio:

/*
    LAB – Interacción

    Tiempo estimado:
    15–30 minutos

    Nivel de dificultad:
    Fácil

    Objetivos:
    Familiarizar al estudiante con:

    La interacción con el usuario (cuadros de diálogo – alert, confirm, prompt).

    Escenario
    Volvamos a nuestra lista de contactos. Después de algunos ajustes recientes (por ejemplo, usar un array 
    y objetos), realmente empieza a parecerse a una lista. Sin embargo, queda un problema bastante serio: 
    los cambios en los datos de la lista, como agregar un nuevo contacto, deben estar escritos directamente 
    en el código del programa. ¿Qué pasa si queremos darle al usuario la posibilidad de ingresar los datos 
    del nuevo contacto mientras se ejecuta el programa?

    Modifica el programa para agregar, al final de la lista, no el contacto que está definido en el código, 
    sino aquel que el usuario ingresará durante la ejecución del programa. Usa el método prompt para hacerlo. 
    Al final, muestra el primer y el último contacto de la lista.
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

let user_name = prompt("Ingrese su nombre:");
let phone = prompt("Ingrese su numero telefonico:");
let email = prompt("Ingrese su email:");

contacts.push({"name" : user_name, "phone": phone, "email":email });

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

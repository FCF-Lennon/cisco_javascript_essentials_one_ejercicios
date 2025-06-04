// ==============================================================================
// Sección 3 – ¡Hola, mundo!
// ==============================================================================

// 3.1 ¿Por qué "¡Hola, mundo!"?
// ------------------------------
// La frase "¡Hola, mundo!" es una tradición en la enseñanza de programación.
// Se originó en el libro clásico del lenguaje C y ha sido usada durante décadas
// como el primer programa que se escribe al aprender un nuevo lenguaje.
// Su objetivo principal no es el mensaje en sí, sino:
//
// - Introducir la sintaxis básica del lenguaje.
// - Verificar que el entorno de desarrollo esté bien configurado.
// - Obtener retroalimentación inmediata al ejecutar el programa.
//
// En JavaScript del lado del cliente, "mostrar algo en pantalla" puede significar:

// 1) Modificar el contenido visual del sitio web (el DOM).
// 2) Escribir mensajes en la consola del navegador (más práctico para este curso).

// 3.2 ¿Qué es la consola?
// -----------------------

// La consola es una herramienta de desarrollo del navegador que permite:

// - Mostrar mensajes (errores o personalizados) generados por JavaScript.
// - Ejecutar directamente instrucciones JavaScript en el contexto de la página cargada.

// 3.3 La función console.log()
// ----------------------------

// console.log() es una función que muestra datos en la consola:

console.log("Hello, World!");

// - console es un objeto.
// - log es un método del objeto console.
// - Recibe un argumento: el mensaje a mostrar.
// - Se recomienda terminar la instrucción con un punto y coma.

// 3.4 Ejecutar código en un entorno local
// ---------------------------------------
// El código JavaScript debe estar dentro de un documento HTML para ejecutarse.
// Ejemplo de HTML mínimo:
/*

// 3.5 Alternativa: insertar JavaScript directamente
// -------------------------------------------------
// Otra opción es escribir directamente el código JavaScript en el HTML:
/*

*/
// Este método es útil para scripts pequeños o pruebas rápidas.

// 3.6 Ejecutar código directamente en la consola
// ---------------------------------------------
// - Abrir una pestaña con about:blank.
// - Activar la consola del navegador.
// - Escribir:

console.log("Hello, Mundo desde la consola");

// Esto ejecutará el código inmediatamente sin necesidad de HTML.

// 3.7 HTML y CSS (contexto básico)
// -------------------------------

// - HTML define la estructura del sitio (secciones, párrafos, títulos, etc.).
// - CSS define el estilo visual (colores, márgenes, fuentes, etc.).
// - JavaScript permite interacción dinámica y comportamiento del sitio.

// Un sitio web típico incluye:

// - index.html      → estructura (HTML)
// - estilos.css     → estilo visual (CSS, opcional)
// - main.js         → comportamiento e interacción (JavaScript)

// 3.8 ¿Cómo ejecutar código localmente?
// -------------------------------------

// - Crear un archivo HTML con un  que apunte a main.js.
// - Crear main.js con una llamada a console.log().
// - Abrir el archivo HTML en el navegador.
// - Verificar que el mensaje aparece en la consola.

// También es posible insertar directamente el código JavaScript dentro del archivo HTML
// usando la etiqueta  sin necesidad de un archivo externo.

// 3.9 Ejecutar código en consola con about:blank
// ----------------------------------------------

// - Abrir una pestaña con about:blank
// - Activar herramientas de desarrollo (F12)
// - Usar la consola para escribir código JavaScript:

console.log("Hello desde about:blank");

// - El código se ejecuta en el contexto de una página vacía generada por el navegador.


// Ejercicios:

// Pregunta 1: Use console.log para mostrar su nombre completo en la consola.

// Respuesta:
console.log("Pipe Dev");

// Pregunta 2: Indique su año de nacimiento.

// Respuesta:
console.log("Año: 1985");

// Pregunta 3: Intente nuevamente indicar su año de nacimiento, esta vez pasando 
// la fecha sin las comillas.

// Respuesta:
console.log(1985);

// Pregunta 4: Podemos pasar varios argumentos a console.log separados por comas, 
// por ejemplo:

console.log("abc", "def", "ghi");

// Envíe información sobre usted a la consola en el formato: Nombre Apellido (Año),
// - dando toda la información como un solo argumento;
// - dando el nombre, apellido y año como argumentos separados.

// Respuesta:
console.log("Pipe Dev (1985)");
console.log("Pipe",  "Dev",  "(1985)");

// Pregunta 5: Envíe la misma información (nombre, apellido, año) a la consola,
// no una al lado de la otra, sino en líneas consecutivas.

console.log("Pipe\nDev\n(1985)");

// o

console.log("Pipe");
console.log("Dev");
console.log("(1985)");

// Pregunta 6: Una cadena se puede concatenar utilizando el +. 
// Por ejemplo, "abc" + "def" será tratado como "abcdef". 
// Intente escribir nuevamente su nombre, apellido y año de 
// nacimiento en una línea, esta vez no separados por comas, 
// sino por + ("concatenación").

// Respuesta:
console.log("Pipe" + "Dev" + "(1985)");

// Pregunta 7: Coloque espacios en los lugares apropiados, 
// de modo que cuando se muestren, obtenga el mismo efecto que en la Pregunta 4.

// Respuesta: 
console.log("Pipe " + "Dev " + "(1985)" );


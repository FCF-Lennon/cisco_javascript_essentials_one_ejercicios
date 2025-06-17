// Operadores en JavaScript: Strings, Comparaciones y Otros

// Operadores de Strings
// El único operador en esta categoría es el operador de concatenación (+).
// Este se utiliza para unir cadenas de texto.
// Si al menos uno de los operandos es un string, JavaScript convertirá los otros operandos a string automáticamente.

let greetings = "Hi";
console.log(greetings + " " + "Alice"); // -> Hi Alice

// También se puede concatenar con otros tipos:

let sentence = "Happy New Year ";
let newSentence = sentence + 10191;
console.log(newSentence); // -> Happy New Year 10191
console.log(typeof newSentence); // -> string

// Operadores de Asignación Compuesta
// Se puede usar += para concatenar cadenas directamente con el mismo operador:

let sentence2 = "Happy New ";
sentence2 += "Year ";
sentence2 += 10191;
console.log(sentence2); // -> Happy New Year 10191

// Operadores de Comparación
// Se utilizan para verificar igualdad, desigualdad y relaciones numéricas. Siempre devuelven true o false.

// Igualdad Estricta ===
// Compara valor y tipo de dato:

console.log(10 === 5);       // -> false
console.log(10 === 10);      // -> true
console.log(10 === 10n);     // -> false
console.log(10 === "10");    // -> false
console.log("10" === "10");  // -> true
console.log("Alice" === "Bob"); // -> false
console.log(0 === false);    // -> false
console.log(undefined === false); // -> false

// Igualdad Flexible ==
// Solo compara valores, haciendo conversiones implícitas:

console.log(10 == 5);        // -> false
console.log(10 == 10);       // -> true
console.log(10 == 10n);      // -> true
console.log(10 == "10");     // -> true
console.log("10" == "10");   // -> true
console.log("Alice" == "Bob"); // -> false
console.log(0 == false);     // -> true
console.log(undefined == false); // -> false
console.log(NaN == NaN);     // -> false

// Recomendación: usa === salvo que intencionalmente quieras permitir comparaciones entre distintos tipos.

// Desigualdad Estricta !== y Flexible !=

console.log(10 !== 5);       // -> true
console.log(10 !== 10);      // -> false
console.log(10 !== 10n);     // -> true
console.log(10 !== "10");    // -> true
console.log("10" !== "10");  // -> false
console.log("Alice" !== "Bob"); // -> true
console.log(0 !== false);    // -> true
console.log(undefined !== false); // -> true

console.log(10 != 5);        // -> true
console.log(10 != 10);       // -> false
console.log(10 != 10n);      // -> false
console.log(10 != "10");     // -> false
console.log("10" != "10");   // -> false
console.log("Alice" != "Bob"); // -> true
console.log(0 != false);     // -> false
console.log(undefined != false); // -> true
console.log(NaN != NaN);     // -> true

// Comparadores numéricos: <, >, <=, >=

console.log(10 > 100);       // -> false
console.log(101 > 100);      // -> true
console.log(101 > "100");    // -> true
console.log(101 < 100);      // -> false
console.log(100n < 102);     // -> true
console.log("10" < 20n);     // -> true
console.log(101 <= 100);     // -> false
console.log(10 >= 10n);      // -> true
console.log("10" <= 20);     // -> true

// Comparación de strings (orden alfabético Unicode)

console.log("b" > "a");      // -> true
console.log("a" > "B");      // -> true
console.log("B" > "A");      // -> true
console.log("A" > "4");      // -> true
console.log("4" > "1");      // -> true
console.log("ab1" < "ab4");  // -> true
console.log("ab4" < "abA");  // -> true
console.log("abB" < "aba");  // -> true
console.log("aba" < "abb");  // -> true
console.log("ab" < "ab4");   // -> true

// Nota: El símbolo => no es un operador. Es parte de la sintaxis de las arrow functions.

// Otros operadores útiles

// typeof
// Devuelve el tipo del operando como string.

let year = 10191;
console.log(typeof year);     // -> number
console.log(typeof false);    // -> boolean

// instanceof
// Verifica si un objeto es instancia de un tipo dado.

let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array);  // -> false

// delete
// Elimina una propiedad de un objeto.

let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined

// Operador ternario: condición ? valor_si_verdadero : valor_si_falso

console.log(true ? "Alice" : "Bob");  // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob

// Este operador puede usarse con expresiones:

let name2 = 1 > 2 ? "Alice" : "Bob";
console.log(name2); // -> Bob

// Precedencia y Asociatividad
// Cuando hay varios operadores en una misma expresión, se debe tener en cuenta el orden en que se ejecutan.

let a = 10;
let b = a + 2 * 3;        // -> 2 * 3 = 6; 10 + 6 = 16
let c = a + 2 < 20 - 15;  // -> 12 < 5 → false
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> false

// ¿Qué determina el orden?
// Precedencia: prioridad del operador (mayor número = mayor prioridad).
// Asociatividad: si dos operadores tienen la misma precedencia, determina si 
// se evalúa de izquierda a derecha (→) o de derecha a izquierda (←).

// Ejemplo con paréntesis forzando el orden:

let d, e;
e = (d = (20 + 20) * 2) > (3 ** 2);
console.log(d); // -> 60
console.log(e); // -> true

// Usar paréntesis mejora la legibilidad y evita errores de interpretación.

// Resumen de la Sección
// Aprendiste sobre operadores de concatenación, comparación, tipo, instancia, eliminación y ternarios.
// Conociste conceptos claves: precedencia y asociatividad.
// No necesitas memorizar todos los niveles de precedencia. Usa paréntesis cuando tengas dudas.
// Seguirás usando operadores en los siguientes temas del curso: la práctica afianza el aprendizaje.


// Introducción a la programción.

// Comentario simple.

/* 
Comentario
    multilínea.
*/

// Mostrar texto.

/*
alert('Hello World!'); // Muestra un cartel con el texto Hello World!.

console.log('Hello World!'); // Muestra en consola el texto Hello World!.
*/

// Variables.

/*
var nombreVariable; No es recomendado usarlo (Más adelante se explica el por qué).

let nombreVariable;  Declaramos la variable pero también ...

let nombreVariable = 'Hello World!'; Podemos declararla e inicializarla al mismo tiempo.

const radioTierraKm = 6371; Una constante es como una variable, pero nunca podra cambiar su valor mientras
se ejecute el programa.
*/

// Operadores aritméticos.

/*
Suma +

Resta -

Multiplicación *

División /

Podemos usar estos operadores para realizar diferentes operaciones matemáticas.
*/

// Funciones.

/*
Una funcion es un set de instrucciones que realizan la misma tarea cada vez que es llamada. Está toma 
un parámetro (Argumento o INPUT) y devolverá un resultado (OUTPUT).

function nombreFuncion(nombreArgunmento) {
    return nombreArgumento*2;
}

nombreFuncion(10); Nos devolvera el argumento multiplicado por 2 (20).

Las intrucciones definidas luego del return no tienen peso.

Para mostrar el resultado de nuestra función podemos utilizar un console.log:

console.log(nombreFuncion(10));
*/


// Condicionales If-Else.

/*
if (si), else (sino) ... digamos que tenemos que decidir qué acción realizar, utilizamos los
condicionales. Se estructuran de la siguiente manera:

if (condición) {
    Hace esto (la condición se cumplio).
} else (sino) {
    Hace otra cosa (la condición no se cumplio).
}

La condición debe ser un Boolean (True or False). También podemos "concatenar" condicionales:

if (condición) {
    Hace esto.
} else if (otra condición) {
    Sino hace esto.
} else {
    Hace otra cosa.
}
*/

// Operadores.

/*
Operador OR: |  // condición1 | condición2 (Solo se debe cumplir una de las 2).

Operador AND: && // condición1 && condición2 (Deben cumplirse ambas condiciones).

Operador NOT: ! // !condición (No debe cumplirse la condición).

Operador TERNARIO: (condición) ? expresión1 (True) : expresión2 (False).
*/

// Operadores de comparación.

/*
< Menor que.

> Mayor que.

<= Menor o igual que.

>= Mayor o igual que.

=== Exactamente igual que (1 no es igual que "1", 1 es igual que 1 y "1" es igual que "1").

!== Distinto que (Dandole importancia al tipo).

El resultado de estas comparaciones son un Boolean.
*/

// Hoisting (Izar).

/*
Si utilizamos var para declarar una variable JS lo PRIMERO que hace es izar estas variables y 
declararlas arriba de todo el código (sin inicializar) y lo mismo hace con las funciones. 
Esto es anti intuitivo por lo que se recomienda usar let para declarar las variables y 
que el código sea lógico para otra persona que lo lea.

También tenemos que tener en cuenta la localidad de una variable, si utilizamos let para declarar 
la variable dentro de una función esta será local y si utilizamos var será global (sera izada por hoisting).
Entonces si llamamos a la variable declarada con let fuera de la función ocurrirá un error.
*/

// Interpolación de Strings.

/*
Si quisiéramos mostrar un mensaje en la consola exponiendo diferentes variables 
debemos concatenarlas con las palabras (Strings). Ejemplo:

console.log('Hola soy la Tierra y mi radio en kilómetros es: ' + radioTierraKm);

Sin embargo podemos utilizar otra forma, la interpolación de strings, de la siguiente manera:

console.log(`El radio de la Tierra en kilómetros es ${radioTierraKm}`);

Como es el caso no debemos concatenar nada, simplemente escribimos dentro de las comillas invertidas `` y 
agregamos la o las variables dentro de ${}. Otro ejemplo:

console.log(`El resultado de ${numero1} ${operador} ${numero2} es ${resultado}`);

Entonces si numero1 es 10, numero2 es 20, operador es + y resultado la funcion sumar
esto nos devuelve en consola:

El resultado de 10 + 20 es 30
*/

// Arrays.

/*
Un Array (Arreglo) es una lista ordenada de valores, se pueden guardar cualquier 
cantidad y tipo: Numbers, Strings, Objects e incluso otros Arrays. Ejemplos:

let animales = ['gato', 'perro', 'caballo'];

let cosasAleatorias = [2,'libros', 36, 'Argentina'];

Para obtener el tamaño de un array podemos utilizar la propiedad .length:

console.log(cosasAleatorias.length); // Obtendremos un 4.

Para el uso del array se utiliza la “notación de corchetes”. Si se desea obtener el primer elemento del array 
su posición será 0, entonces:

console.log(cosasAleatorias[0]); // Nos devuelve 2.

console.log(cosasAleatorias[3]); // Nos devuelve Argentina.

También podemos reemplazar los valores dentro de nuestro Array:

cosasAleatorias[0] = 7; // El arreglo queda: [7, 'libro', 36, 'Argentina'].
cosasAleatorias[3] = 'Germany' // El arreglo queda: [7, 'libro', 36, 'Germany'].

Para agregar un elemento al array podemos usar el método .push(), así agregaremos un valor al final de este:

cosasAleatorias.push('Du Hast'); 

console.log(cosasAleatorias); // [7, 'libro', 36, 'Germany', 'Du Hast'].

NOTA IMPORTANTE: Un array es lo que llamamos un “tipo de referencia”, esto significa 
que aunque lo declaremos usando const los valores dentro de este pueden ser modificados, 
lo incorrecto es intentar sobrescribir el array.

const nuevoArray = ['dou', 235, 'herz'];

Es válido:

nuevoArray[2] = 'pepito'; // Cambia el valor por pepito.

nuevoArray.push('juancito'); // Agrega el valor juancito.

Es inválido:

nuevoArray = ['pepito', 'juancito']; // Genera un error.
*/

// Bucles.

/*
En programación para poder repetir una y otra vez una acción, por ejemplo escribir 10 veces 
'JavaScript es increíble', podemos usar un bucle. Cada ciclo necesita tener tres requisitos fundamentales:

1.Un punto de partida.
2.Una condición (punto final).
3.Un contador (un paso).

Sin algunas de estas condiciones podemos entrar en un bucle infinito.

Bucles While:

El bucle While hará una tarea hasta que se cumpla alguna condición. Por ejemplo:

let indice = 0; // (Punto de partida).

while (indice < 10) { // Menos que 10 es una condición (punto final).
	
console.log('JavaScript es increíble');

indice = indice + 1; //  +1 es un contador (un paso).
}

Bucles For:

Similares al bucle while, se declaran con un contador. Por lo general se utilizan cuando debemos 
recorrer algo por completo siendo más cómodo que utilizar un while. Un ejemplo:

for (let i = 0; i < 10; i = i + 1) {	// (Punto de partida; condición; un paso).

console.log('JavaScript es increíble');

}

Sabiendo como funcionan los bucles podemos resolver problemas más complejos aplicando lógica (if-else).
*/

// Hypertext Markup Language (HTML).

/*
HTML es la herramienta que determina la estructura de nuestra página web, esto lo logramos con el uso de tags.
Algunos de ellos son:

<header></header>
<p></p>
<img />

Observamos que los tags deben abrirse y cerrarse salvo algunos casos como la etiqueta <img />. 
Todos estos tags son englobados por <html> y dentro de ella tendremos dos que son fundamentales:

<head> 
    Contiene los metadatos, el título de página y los links a los archivos CSS (veremos mas adelante).
</head>

<body>
    Contiene todo el contenido.
</body>

En HTML los tags pueden tener atributos:

<div class="opciones"></div> 

Esta etiqueta tiene un atributo llamado "class" el cual tiene como valor "opciones".

Aquí una lista con información de los tags: 

https://developer.mozilla.org/es/docs/Web/HTML/Element
*/

// Cascading Style Sheets (CSS).

/*
CSS describe cómo se ven los elementos de HTML. Consisten en “bloques de declaración”, donde cada uno 
está compuesto de un "selector" y de un conjunto de reglas de estilo visuales. Una declaración se ve así:

[selector] {
	nombre-de-estilo: valor;
	nombre-de-estilo: valor;
	nombre-de-estilo: valor;
}

Los selectores especifican sobre qué elementos son aplicados los estilos. Los selectores más básicos 
se refieren a sus elementos mediante su nombre de etiqueta:

body {
	background-color: white;
}

También pueden referirse a los elementos mediante su atributo de "clase":

.settings {
	margin: 0;
}

y por su ID: 

#logo {
	text-align: center;
}

Prioridades en orden (toman mayor peso):

ID > Clase > Nombre de elemento

Lista de propiedades de CSS:

https://www.w3.org/TR/CSS21/propidx.html
*/

// Formulario (Form).

/*
Como su nombre lo dice un formulario captura información del usuario y lo hace de la siguiente manera:

.El visitante entra a la página web que contiene el formulario.
.El navegador presenta el formulario HTML.
.El usuario llena el formulario y lo envía (submit).
.El navegador envía esa información a un servidor web.
.En el backend (si existe), se procesa el formulario. Por ejemplo, se puede:
	-Enviar los datos del formulario por E-mail.
	-Guardar los datos en una base de datos o un archivo.
.Se envía la respuesta del servidor al cliente.

Validación de un formulario, este siempre debe ser validado por ambas partes (cliente y servidor).

Validación del lado del cliente:  Las validaciones del lado del cliente se escriben en JS. 
Validar un formulario con JS nos ahorra muchas llamadas innecesarias al servidor. Por ejemplo, el usuario 
podría equivocarse al ingresar datos entonces no sería necesario hacer un submit, sino, hacer una corrección 
previa. Entonces la validación sirve tanto como por una cuestión de seguridad y de usabilidad.

Validación del lado del servidor: ¿Qué ocurre si JS está deshabilitado o se hace una llamada HTTP al servidor 
sin usar un navegador?, la validación del lado del cliente no ocurre por eso es necesario hacerla también 
desde el lado del servidor.
*/

// Pruebas.

/*
La utilización de pruebas para comprobar que la implementación de las validaciones sean 
correctas son fundamentales. Imaginemos que alguien cambia algo en una función y luego nos genera 
algún problema, gracias a las pruebas podemos saber dónde surgió está complicación y no quemarnos la cabeza 
buscando donde está el problema.
*/

// Expresiones Regulares (RegEx).

/*
Las expresiones regulares describen un patrón de caracteres, nos permiten encontrar texto, buscar y 
reemplazar porciones de texto. También nos permiten tener validaciones más específicas, como por ejemplo, 
que el campo NOMBRE solo contenga letras.

const contieneSoloLetras = /^[A-z]+$/.test(valor);

.test() es función de JavaScript.
*/

// Objetos en JavaScript.

/*
Los objetos en JS son expresados mediante {}, en este caso estamos representando un objeto vacío. 
Un ejemplo de un objeto seria:

{
  nombre: 'Emiliano',
  apellido: 'Zulaica',
  "fecha-nacimiento": '1995-2-25'
}

Observemos que el key edad-nacimiento se tuvo que poner entre comillas dobles debido a que JS interpreta 
el guión medio como una resta.

const persona  = {
  nombre: 'Emiliano',
  apellido: 'Zulaica',
  "fecha-nacimiento": '1995-2-25'
}

Ahora podemos preguntar por persona y nos devolverá los atributos dentro del objeto. Para agregar o borrar 
estos atributos o propiedades hacemos lo siguiente:

persona.profesion = "programador";
persona["profesion"] = "programador";

delete persona.profesion;

Dentro de los objetos podemos tener, en pocas palabras, de todo:

Strings, Numbers, Functions, otros Objects, Arrays, Objects inside Arrays…

const miObjecto {
	p1: "Hola",
	p2: function() {console.log("Hola");},
	p3: 123,
	p4: {
	    p5: "Holap5"
    },
	p6: [{p7: "Holap7"}]
}

Esta es la notación JSON: JavaScript Object Notation.

Para obtener p5 no podemos hacer una llamada directa debemos indicar el camino:

miObjeto.p7 // Error.
miObjeto.p6[0].p7 // "Holap7".
*/

// Bootstrap.

/*
Bootstrap es una librería de CSS que contiene estilos predefinidos. Es una herramienta muy poderosa
ya que agiliza la producción de un proyecto debido a que no debemos preocuparnos de acordarnos todos
los tipos de estilos creados por varias personas.

https://getbootstrap.com/docs/5.2/getting-started/introduction/

No es la única librería hay muchas mas!.
*/

// Node Package Manager (NPM).

/*
NPM es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para 
JavaScript. Este se ejecuta desde la línea de comandos y maneja las dependencias para una aplicación.
*/

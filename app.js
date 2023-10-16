/*let nombre = "joaquin"// strings
let apellido = "maio"
let edad = 20// numeros
let jubilo = 

//COCATENANCION
console.log
let numero1= 20
let numero2= 30
console.log(nombre + "" + edad)
console.log(numero1 + numero2)
// suma +
// resta -
// multiplicacion *
// division /
let primervalor = parseInt(prompt("ingrese el primer valor"))
let segundovalor = parseInt(prompt("ingrese el segundo valor"))

/*alert(primervalor + segundovalor);*/
/*alert("Hola " + nombre + "" + apellido )*/


//SINTAXIS DE CONDICIONALES
/*if(condicion){
    //bloque de codigo verdadero.
    //esto sucede si la puerta esta abierta.
    salir(); 
}else{
    //bloque de codigo falso.
    //si no, esto sucede si la puerta esta cerrada.
    abrirPuerta();
};*/
/*if(condiciobn){

}else(otraCondicion){

}*/
/*
OPERADORES LOGICOS
> Mayor que...
< Menor que...
>= Mayor o igual que...
<= Menor o igual que...
== Igual a...
!= Distinto
&& ant
*/
/*ejemplo 1
let calificacion = prompt("Cual fue tu calificacion?") 

if (calificacion >= 8){
    console.log("Calificacion sobresaliente")
}else if(calificacion >= 7){
    console.log("Examen aprobado")
}else{
    console.log("Debes recursar")
}*/
/*ejemplo 2
let contrasena = "1234"
let contrasenaIngresada = prompt("ingrese su contrasena")

if(contrasenaIngresada == contrasena){
    console.log("Bienvenido hijo de Puta")
}else{
    console.log("Acceso denegado ladron")
}*/
/*ejemplo 3
let nombreUsuario = prompt("Nombre de usuario")
let apellidoUsuario = prompt("Apellido del usuario")

if((nombreUsuario !="") && (apellidoUsuario !="")){
    console.log("Nombre: " + nombreUsuario + " Apellido: " + apellidoUsuario)
}else{
    console.log("todos los campos son obligatorios")
}*/

// LET - CONST(CONSTANTES)
/*
let -> permite reasignar valor a variable // permite inizialiazar variables vacias (undefined)
const -> no permite la reasignacion de variables constantes // deben tener un valor 
*/

//SWITCH
//Evalua casos y en base a las condiciones arroja un resultado

//TEMPLATE LITERALS backticks `${variable}`


/* let almuerzo = prompt("Que deseas almorzar")

switch (almuerzo) {
    case "hamburguesa":
        console.log(`vas a almorzar ${almuerzo} el monto total es de 1500`)
        break
    case "pizza":
        console.log(`vas a almorzar ${almuerzo} el monnto de tu compra es de 2000`)
        break
    case "lomo":
        console.log(`vas a almorzar ${almuerzo} el monto de tu compra es de 3000`)
        break
    default:
        console.log(`vas a almorzar ${almuerzo}`)
        break
} */

/* if (condicion) {

} else if (otracondicion) {

} else if (otracondicion) {

} else {

} */

/* const valor = 200
const burguer = "Especial"

const nombre = "Coder"
const apellido = "House"
const edad = 25


alert(`Bienvenido al curso de Js, ${nombre} ${apellido}, veo que tienes ${edad} años`) */
// let pelicula = prompt(``)

/* let pelicula = prompt(`Elija su pelicula favorita:
1: Hasta el hombre
2: La monja
3: Wall E
`)

switch (pelicula) {
    case "1":
        console.log("Hasta el último hombre")
        break;
    case "2":
        console.log("La monja")
        break
    default:
        console.log("Wall E")
        break;
} 

//WHILE
// while(condicion){
//ejecutar un código -> "cuerpo del bucle"
// }

// let i = 5

//i + 1

/* while (i <= 20) {
    console.log(i)
    i++
} */

/* let entrada = prompt("Ingrese un texto o ESC para interrumpir")

let texto = ""

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}

alert(texto) */


//DO WHILE

/* do{
 // Cuerpo de bucle
}while(condicion) */
/* ++ operador de incremento
-- operador de decremento */
/* let y = 0

do {
    console.log(y)
    y++
} while (y <= 10); */

//FOR

/* 
for( desde;hasta ;actualizacion )


*/

/* for (let i = 0; i <= 10; i++) {
    console.log(`El valor de la variable es: ${i}`)
} */

//tabla de multiplicar

/*let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}*/

/* console.log(3x1)
console.log(3x2) */


//Actividad N1

/*let numero = parseInt(prompt("Ingrese un numero"))

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
}
alert(resultado = numero)*/

// OBJETO LITERAL
/*const producto = {
    //propiedades
    //clave:valor  // key:value
    nombre: "monitor de 24 pulgadas",
    precio: 2000,
    disponible: true,
}
const nombreProducto = producto.nombre

// console.log(nombreproducto)

//CRUD (CREATE,READ,UPDATE,DELETE)

//CREATE
producto.imagen = "imagen.jpg"
//UPDATE
producto.disponible = false
//DELETE
delete producto.precio
console.log(producto)

//DESESTRUCTURACION
//sacar y guardar como una variable, una propiedad de un objeto

const {nombre, imagen, disponible} = producto
console.log(nombre)
console.log(imagen)
console.log(disponible)
*/

//OBJETO CONSTRUCTOR

/*class producto {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        this.disponible = true
        //metodo -> acciones del objeto
        this.saludar = function (){
            console.log("Saludos, soy " + this.nombre)
        }
    }
}*/

//instancias

/*const producto2 = new producto("teclado", 1000)
const producto3 = new producto("mouse", 500)*/

// Arrays

// Ejemplo 1
/*let arreglo = [true, "coder", 25, "house", false, 100]

arreglo[2] = 300
arreglo[6] = "camion"
console.log(arreglo[0])*/

// recorrido de los valores de un array

/*let arreglo = [true, "coder", 25, "house", false, 100]*/


// longitud del arreglo 

/*console.log(arreglo.length)*/

// Metodo para agregar elementos

// PUSH

/*arreglo.push("elemento pusheado")

console.log(arreglo)*/

/*const carrito = []

const miProducto = {
    marca: "a",
    precio: 2000
}
/*carrito.push("Primer producto")
carrito.push("Segundo producto")

console.log(carrito)*/

// UNSHIFT agregar elementos al comienzo del array

/*const arreglo = ["primer", 2, false]

console.log(arreglo)
arreglo.unshift("otro elemento")*/

// eliminar el ultimo elemento de un arreglo

// POP

/*const carrito = ["a", "b", "c"]
//carrito.pop()
console.log(Carrito)*/
// eliminar el primer elemento de un arreglo

// SHIFT

//carrito.shift

// Splice

// eliminar elemento de cualquier posicion

//idice - cantidad de elementos a eliminar

//const nombres = ["agustin", "alex", "damian", "daniel", "emiliano"]

//nombres.slice(1,2)


// JOIN

//console.log(nombres.join("."))

/*const categoriaA = ["A", "b", "C"]
const categoriaB = ["D", "E", "F"]

// CONCAT
const miCatalogo = categortiaA.concat
(categoriaB)*/


// INDEXOF

/*const nombres = ["agustin", "alex", "damian", "daniel", "emiliano"]


console.log(nombre.indeOF("emiliano"))*/

// INCLUDES true // false

//console.log(nombres.includes("coder"))

// Ejemplos para cargar datos y almacenar en una array

/*const listaNombres = []
let cantidad = 5

do{
    let entrada = prompt("ingrese un nombre")
    listaNombres.push(entrada)
    console.log(listaNombres.length)
}while (listaNombres.length != cantidad);

 const nuevaLista = listaNombres.concat(["Q", "w", "E"])
 
 console.log(nuevaLista)*/

// FOR OF

/*const producto = [
    {id: 1, marca: "producto a", precio: 2000 },
    {id: 2, marca: "producto b", precio: 4000 },
    {id: 3, marca: "producto c", precio: 6000 },
]
for (const producto of lista) {
    console.log(producto.marca)
}

/*function sumar (a, b){
    return a + b 
}

function restar (a, b){
    return a - b 
}

function multiplicar(a, b){
    return a * b 
}

function calcularOperacion(a, b, operacion){
    return operacion (a, b)
}

const resultadoSuma = calcularOperacion(5,3,sumar)
const resultadoResta = calculadorOperacion(5,3, resta)
const resultadoMultiplicador = calcularOperacion (5,3, multiplicar)


console.log(resultadoMultiplicador) */


// CALLBACKS (FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES)
//ejemplo 1
/*function saludar (nombre, callback){
    console.log("Saludos " + nombre + "!")
    callback()
}

function despedir(){
    console.log("Hasta luego")
}

saludar("juan", despedir)*/

//callback= una función que se pasa como parámetro
//ejemplo 2

/*function realizarOperacion(a, b, callback){
    const resultado = a + b
    callback(resultado)
}

function mostrarResultado(res){
    console.log("el resultado es: " + res)
}

realizarOperacion(5,3, mostrarResultado)*/


// FOR EACH 
 /*const pendientes = ["DOM","Apis", "Json", "Librerias"]*/

/*pendientes.forEach((p, i)=>{
    console.log('${i}: ${p}')
})*/

// MAP

/*pendientes.map((p)=>{
    console.log(p)
})*/

// REDUCE 
 /*const carrito =[
    {nombre: "Monitor", precio: 1000},
    {nombre: "Teclado", precio: 2000},
    {nombre: "Mouse", precio: 3000}
 ]
 
 let total = 0 

 /*carrito.forEach((p) => (total += p.precio))
console.log(total)

let resultado = carrito.reduce((accum, p)=>{
    return accum + p.precio 
}, 0)
console.log(resultado)*/


/*const carrito =[
    {nombre: "Monitor", precio: 1000},
    {nombre: "Teclado", precio: 2000},
    {nombre: "Mouse", precio: 3000}
 ]

 // FILTER

let resultado = carrito.filter((p)=> p.nombre == "monitor")

console.log(resultado)

// FIND 

let resultado2 = carrito.find((p)=> p.nombre == "monitor")

console.log(resultado2)*/

// MATH

/*console.log(Math.PI)
console.log(Math.max(53,43,1,23,78,100))

console.log(Math.sqrt(9))
console.log(Math.random())*/

/*const pi = Math.PI
console.log(pi)
console.log(Math.ceil(PI)
console.log(Math.floor(PI))
console.log(Math.round(pi))*/

// FECHAS

/*console.log(new date())
let ahora = new date()

let anio = ahora.getfullyear()

let anio = ahora.getMonth()

console.log(ahora)*/


// METODO TRADICIONAL 

 /*const navbar = document.getElementsByClassName("form-label")
 const span = document.getElementsByTagName("span")
 const email = document.getElementById("name")

console.log(email)*/


// METODO MODERNO

//solo trae un solo elemento 
//const navbar = document.querySelector(".form-label")
// trae todos los elementos con la misma clase 
//const navbar = document.querySelectorAll(".form-label")

// MODIFICADOR DE CONTENIDO

//const titulo = document.querySelector("h1").textContent = "nuevo titulo"
//console.log(titulo)

// Eliminar contenido

/*const subtitle = document.querySelector("h3")
subtitle.remove*/


// AGREGAR CONTENIDO AL HTML

// CREAR EL ELEMENTO 
//let agregado = document.createElement("p")

// INYEECTAR EL ELEMENTO 
//agregado.innerHTML = "parrafo de demostracion"

// AGREGAR EL ELEMENTO AL HTML 
//document.body.appendChild(agregado)

// AGREGAR ELEMENTOS DESDE UN ARRAY

/*const catalogo = document.querySelector(".catalogo")
console.log(catalogo)

let otrosCursos = ["dese;o ux/ui", "react", "backend", "sql", "amazon"]

for (let c of otrosCursos){
    let listado = document.createElement("li")
    listado.innerHTML = c
    catalogo.appendChild(listado)
}*/

/*let cursos =[
    {id: 1, titulo: "JSON", precio: 1000},
    {id: 2, titulo: "react", precio: 1500},
    {id: 3, titulo: "backend", precio: 2000}
]
console.log(cursos)

for ( let c of cursos){
    let contenedor = document.createElement("div")
    contenedor.innerHTML =`
    <h3>cursos: ${c.titulo}</h3>
    <p>precio: ${c.precio}</p>

    `
    document.body.appendChild(contenedor)
}*/

//segunda pre entrega:
//VARIABLES
//FUNCIONES
//OBJETOS
//ARRAYS
//MÉTODOS DE BÚSQUEDA Y FILTRADO EN ARRAYS


/*let stickers =[
    {id: 1, titulo: "StickerChiquitos", precio: 1000, medidas: "5,8,9"},
    {id: 2, titulo: "StickersMedianos", precio: 1500, medidas: "10,12,15"},
    {id: 3, titulo: "StickersGrandes", precio: 2000, medidas: "20, 25,30"}
]
console.log(stickers)


for ( let c of stickers){
    let contenedor = document.createElement("div")
    contenedor.innerHTML =`
    <h1>
    <h3>stickers: ${c.titulo}</h3>
    <p>Precio: ${c.precio}</p>
    <p>Medidas: ${c.medidas}</p>

    <button type="button" class="btn btn-primary btn-lg">Agregar al carrito</button>
    
    `
    document.body.appendChild(contenedor)
}*/
saludar()
function saludar() {
    alert("Hola usuario......")
    console.log(" Hola usuario ");
}


let nombreUsuario = prompt("Nombre de usuario")
let apellidoUsuario = prompt("Apellido del usuario")

alert ("Bienvenido a la tabla de goleadores de la liga")

if((nombreUsuario !="") && (apellidoUsuario !="")){
    console.log("Nombre: " + nombreUsuario + " Apellido: " + apellidoUsuario)
}else{
let texto = ""
}
 
class jugadores {
    constructor(nombre, nacionalidad, equipo, edad,) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.equipo = equipo;
        this.edad = edad;
    }

}
// Datos de los goleadores
let goleadores = [
    { nombre: "E.Cavani(BOC) ", goles: 12 , equipo: "Boca", nacionalidad: "Uruguay", edad: "36"},
    { nombre: "S.Toloza(IND) ", goles: 10 ,equipo: "Independiente", nacionalidad: "Argentina", edad: "20"},
    { nombre: "L.Gondou (ARJ) ", goles: 9 ,equipo: "Argentinos Juniors", nacionalidad: "Argentina", edad: "22"},
    { nombre: "S.Rondon (RIV) ", goles: 5 ,equipo: "River", nacionalidad: "Venezuela", edad: "34"},
    {nombre: "T.Allende (GOD) ", goles: 3 ,equipo: "Godoy Cruz", nacionalidad: "Argentino", edad: "21"},
    {nombre: "A.Bareire (SAN) ", goles: 1 ,equipo: "San Lorenzo", nacionalidad: "Paraguay", edad: "27"}
    // Agrega más datos de goleadores 
];
function jugador() {

    let parametro = prompt("Ingrese el jugador a buscar:").trim().toLocaleUpperCase()
    let resultado = goleadores.find((juego) => juego.nombre.toLocaleUpperCase().includes(parametro))

    if (resultado != undefined) {
        console.table(resultado)
    } else {
        console.warn("No hay resultado con el nombre", parametro);   
    }
}


function llenarTabla() {
    let tabla = document.getElementById("tablaGoleadores");
    for (let i = 0; i < goleadores.length; i++) {
        let fila = document.createElement("tr");
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = goleadores[i].nombre;
        let celdaGoles = document.createElement("td");
        celdaGoles.textContent = goleadores[i].goles;
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaGoles);
        tabla.appendChild(fila);
    }
}

console.table(goleadores);
llenarTabla();

   











































































































/*class cliente  {
    constructor(nombre, apellido){
    this.nombre = joaquin
    this.apellido = maio
    this.disponible = true
    }
}


const nombre = new cliente (joaquin, aceptado)
console.log(nombre)






//pequeño minijuego de decisiones ver 0.02:
saludar()
function saludar() {
    alert("Hola usuario......")
    console.log(" Hola usuario ");
}

let nombreUsuario = prompt("Nombre de usuario")
let apellidoUsuario = prompt("Apellido del usuario")

if((nombreUsuario !="") && (apellidoUsuario !="")){
    console.log("Nombre: " + nombreUsuario + " Apellido: " + apellidoUsuario)
}else{
    let entrada = prompt("Ingrese un texto o ESC para interrumpir")

let texto = ""

while (nombreUsuario != "" && nombreUsuario != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
    console.log("todos los campos son obligatorios")
 }
}

alert(`BIENVENIDO A DECISION MACHT , ${nombreUsuario} ${apellidoUsuario}`)

alert(" Dame el celular ")


// ACTO O

let decision = prompt(`Elija su desicion:
1: le doy el celular
2: no le doy el celular
3: me voy corriendo
`)
switch (decision) {
    case "1":
        console.log("Le doy el celular")
        alert("Se va correindo")
        alert("Sobreviviste al acto 1 ")
        break;
    case "2":
        console.log("No le doy el celular")
        alert("No le doy el celular")
        alert("*Te tira dos tiros")
        alert("Moriste")
        let entrada = prompt("PONGA ESC PARA RECARGAR LA PAGINA Y TORMAR OTRA DECISION")

        let texto = ""
        
        while (entrada != "ESC" && entrada != "ESC") {
            texto += entrada + " "
            entrada = prompt("PONGA ESC PARA RECARGAR LA PAGINA Y TORMAR OTRA DECISION")
        }
        break;
    default:
        console.log("Me voy corriendo ")
        alert("El ladron te sigue")
        break;
}

// ACTO 1

alert("Corriste hasta una callejon")
let acto1 = prompt(`Elija su decision:
1: Saltas a una ventana a tu derecha
2: Te escondes antes de que llegue el ladron
3: Te rendis ante el ladron
`)
switch (acto1) {
    case "1":
        console.log("Saltas a una ventana abierta a tu derecha")
        alert("Saltas sin dudar a la ventana y te encuentras en un geriatrico")
        alert("Te pones a investigar y te das cuenta que el lugar pasan cosas raras")
        alert("Sobreviviste a la al acto 1")
        break;
    case "2":
        console.log("Te escondes antes de que llegue el ladron")
        alert("El ladron te busca, no te encuntra y se va")
        alert("Tienes un momento de respiro asi que sales de tu escondite")
        alert("Caminas sin rumbo y con miedo que el ladron te encuentre")
        alert("Fin del acto 1")
        break;
    default:
        console.log("Te rendis ante el ladron")
        alert("El ladron te insulta te pega y te dispara 5 veces")
        alert("Mueres fin del acto 1")
        let entrada = prompt("PONGA R PARA RECARGAR LA PAGINA Y TORMAR OTRA DECISION")
        let texto = ""
        while (entrada != "ESC" && entrada != "esc") {
            texto += entrada + " "
            entrada = prompt("PONGA ESC PARA RECARGAR LA PAGINA Y TORMAR OTRA DECISION")
        }
        break;
}

//PARTE DEL ACTO 0
*/

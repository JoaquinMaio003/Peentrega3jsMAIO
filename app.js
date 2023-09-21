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

alert(" Dame el celular ")

let decision = prompt(`Elija su desicion:
1: le doy el celular
2: no le doy el celular
3: me voy corriendo
`)
switch (decision) {
    case "1":
        console.log("le doy el celular")
        alert("Se va correindo")
        alert("sobreviviste a la al acto 1 ")
        break;
    case "2":
        console.log("no le doy el celular")
        alert("no le doy el celular")
        alert("*te tira dos tiros")
        alert("moriste")
        let entrada = prompt("RECARGA LA PAGINA PARA TOMAR OTRA DECISON, AVISO VOLVERAS A EMPEZAR DE 0")

        let texto = ""
        
        while (entrada != "ESC" && entrada != "esc") {
            texto += entrada + " "
            entrada = prompt("RECARGA LA PAGINA PARA TOMAR OTRA DECISON, AVISO VOLVERAS A EMPEZAR DE 0")
        }
        break;
    default:
        console.log("me voy corriendo ")
        alert("el ladron te sigue")
        break;
}

alert("corriste hasta una callejon")
let acto1 = prompt(`Elija su decision:
1: saltas a una ventana a tu derecha
2: te escondes antes de que llegue el ladron
3: te rendis ante el ladron
`)
switch (acto1) {
    case "1":
        console.log("saltas a una ventana abierta a tu derecha")
        alert("saltas sin dudar a la ventana y te encuentras en un geriatrico")
        alert("te pones a investigar y te das cuenta que el lugar pasan cosas raras")
        alert("sobreviviste a la al acto 1")
        break;
    case "2":
        console.log("te escondes antes de que llegue el ladron")
        alert("el ladron te busca, no te encuntra y se va")
        alert("tienes un momento de respiro asi que sales de tu escondite")
        alert("caminas sin rumbo y con miedo que el ladron te encuentre")
        alert("fin del acto 1")
        break;
    default:
        console.log("te rendis ante el ladron")
        alert("el ladron te insulta te pega y te dispara 5 veces")
        alert("mueres fin del acto 1")
        let entrada = prompt("RECARGA LA PAGINA PARA TOMAR OTRA DECISON, AVISO VOLVERAS A EMPEZAR DE 0")
        let texto = ""
        while (entrada != "ESC" && entrada != "esc") {
            texto += entrada + " "
            entrada = prompt("RECARGA LA PAGINA PARA TOMAR OTRA DECISON, AVISO VOLVERAS A EMPEZAR DE 0")
        }
        break;
}

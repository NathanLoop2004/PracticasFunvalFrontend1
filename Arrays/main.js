/*

//Esto es una variable, solo permite guardar una variable
let nombre = "Harold";


//Esto es un Array 

//                      0        1         2       3
      let frutas = ["fresa","Manzana","platano","Pera"]


      //En este caso tengo acceso en la pos 0, por lo tanto es "fresa"
console.log(frutas[0]);













//Objetos

let persona = {
    nombre: "Elias",
    apellido: "Borja",
    edad: 21,
}

console.log(persona.apellido)


//Array random

let arrayRandom = [
    "Elias", 
    23,
    -56.5,
    true,
    ["fresa","mango","platano","asd","piña"],
    {
        nombre: "yo",
        edad: "99",
        capilla: "Laurelty",
    }
]
 console.log(arrayRandom[5].capilla)


 //Objeto Random

 paraguay = {
    independizacion: 1811,
    poblacion: 7,
    partido: "Colorados",
    curso: ["robotica","Programacion","Literatura"]
 }

 console.log(paraguay.curso[2])

 */


/*

 //Funciones con arrays

 function sumar(a, b){
    return a + b;
 }

 function restar(a, b){
    return a - b;
 }

 let funciones = [sumar, restar]

 console.log(funciones[1](2, 1))


 //funciones con objetos

 funciones= {
    suma: sumar,
    restar: restar,

 }

 console.log(funciones.restar(1, 2))


 //Ejercicio de funciones con objetos y adentro arrays

 let funciones2 = {
   nombre: "elias",
   edad: 21,
   pais: "paraguay",
   funciones: [sumar,restar]
 }

 console.log(funciones2.funciones[1](10 , 2))
 */



 let libros = [
   {
     titulo: "harry potter",
     año: 2002,
     autor: "JK ROWLING",
   },
   {
     titulo: "jesus el cristo",
     año: 1987,
     autor: "Talmage James",
   },
   {
     titulo: "la arrogancia fatal",
     año: 1988,
     autor: "Federick Haiek",
   },
 ];


 function fetchLibros() {
   return new Promise((resolve, reject) => {
     let cumplio = true;
     if (cumplio) {
       setTimeout(() => {
         resolve(libros);
       }, 7000);
     } else {
       reject("los libros no pudieron ser extraidos ");
     }
   });
 }

async function DatosLibros() {
   try{
      let informacion = await fetchLibros()
      
   }
   catch(error){
      console.log(error)
   }
}
 
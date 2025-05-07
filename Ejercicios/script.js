



let array = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];


for (let index = 0; index < array.length; index++) {
    element = array[index];
    if(element % 2 === 0){
        console.log("El numero "+ element+" es par")
    }
    else{
        console.log("El numero "+element+ " es impar")
    }
}

console.log(array)


//Crear una aplicacion que muestre los n terminos de la seria de los numeros primos

/*
let numero = 2;

for (let index = 0; index < array.length; index++) {
    
    
}*/

/*
let profesores = [
    {
      nombre: "kevin",
      estudiantes: ["Gino", "ana", "cristian", "ricardo"],
    },
    {
      nombre: "Diego",
      estudiantes: ["milton", "kevin", "elias", "Luis"],
    },
    {
      nombre: "Jorge",
      estudiantes: ["tomas", "pedro"],
    },
  ];


  function prosor(alumno){
    for(let profesor of profesores){
         if(profesor.estudiantes.includes(alumno)){
            console.log("El profesor de "+ alumno + " es "+profesor.nombre)
         
         }
         else{
            console.log("No se encontro el profesor de "+ alumno)
         }
    }
  }


*/


const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Marta", edad: 30 }
  ];
  /* Obtener un array con solo los nombres?
  Filtrar a los mayores de edad (edad >= 18)?
  Encontrar a la primera persona mayor de 25 años?
  Calcular la edad total de todos?*/




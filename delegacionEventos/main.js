/*

















































































































*/

/*

let edades = [12,54,22,64, 88]

//foreach

edades.forEach((edad)=>{
    console.log(edad * 2);
})


//map
let edadesMap = edades.map((edad) =>{
    return edad * 2;
})

console.log(edadesMap)




//forEach con arrays anidados          ES mejor trabajar con for normal


let numero= [
    [1, 2],
    [3, 5]
];

numero.forEach((e) => {
e.forEach((i)=>{
    console.log(i);
})
})


//destructuracion del array
let numeros = [18, 22, 34, 89, 100, 23, 322];


let [primero, , , , , , septimo, octavo = 0, decimo = 0] = numeros;







//destructuracion de objetos

let persona = {
    nombre: "Tomas",
    edad: 20,
    pais: "Argentina",
};

let {nombre,edad,pais} = persona;


console.log(nombre)
console.log(edad)
console.log(pais)



//Propagacion de Arrays
let numbers = [1 , 2, 3, 4, 5, 6, 7];
let numeritos = [11 , 22, 33, 44, 55, 66, 77];
let resultado = [...numbers,322,777,numeritos];

console.log(resultado);



*/




//Propagacion de Objetos
/*
let estudiante = {
    nombre: "kevin",
    edad: 20,
}
let superestudiante = {
    nombre: "Ricado",
    pais : "Mexico",
}


let fusion = { ...estudiante, ...superestudiante}

console.log(fusion)
*/


//Ejercicios
const usuarios = [
    { id: 1, nombre: "Ana", roles: ["admin"] },
    { id: 2, nombre: "Gino", roles: ["user"] },
    { id: 3, nombre: "Cristian", roles: ["admin", "user"] },
  ];
//NO SE PUEDE MODIFICAR EL ARRAY USUARIOS

/*
    FILTRAR A TODOS LOS USUARIOS DE TIPO ADMIN
    A CADA OBJETO LE AGREGEN UNA LLAVE Q SE LLAMA CORREO NOMBRE*@GMAIL.COM
    MOSTRAR DEL PRIMER ELEMENTO LAS LLAVES CORREO Y NOMBRE USANDO DESESTRUCTURACION DE ARRAYS Y OBJETOS
*/




//Ejercicio 1
const chill = usuarios.filter(usuarios => usuarios.roles.includes("admin"));
console.log(chill)

const usuarioGMAIL = usuarios.map(usuarios => {
    return{
        ...usuarios,
        correo: `${usuarios.nombre}@GMAIL.COM`
    }
})
console.log(usuarioGMAIL)

const [primerElemento] = usuarioGMAIL
const {nombre, correo} = primerElemento
console.log(nombre, correo)
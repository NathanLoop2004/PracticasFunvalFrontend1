let input1 = document.querySelector("#inputSearch")
let contenedor = document.querySelector(".card-container")


async function traerTodos(){
let respuesta = await fetch("https://rickandmortyapi.com/api/character")
let data = await respuesta.json();
console.log(data)
}

traerTodos()
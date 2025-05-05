


//fiona dia y noche shrek movie


let fiona = document.querySelector("#cambiarBtn");

let kevin = document.querySelector("#kevin")

let esDia = true;
fiona.addEventListener("click", function(){
    if(esDia){
     kevin.textContent = "dia";
     fiona.textContent = "Princesa Fiona"
    }
    else{
kevin.textContent = "noche";
fiona.textContent = "Ogra fiona"
    }
  esDia = !esDia;
})






/*

let parrafo = document.querySelector("#parrafoLoco")


function nathan(evento, pais){
    console.log(evento)
    console.log(pais)
}

parrafo.addEventListener("click", function(evento){
   nathan(evento, "Paraguay")
})
*/




//EVENTO SUBMIT

/*
let formulario = document.querySelector("#elias")

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Formulario enviado")
    let formdata = new FormData(formulario)
    console.log(formdata.get("nombre"))
    if(formdata.get("nombre") === ""){
        alert("Ta vacio mi compa")
    }
    if(formdata.get("celular").length !==8){
    alert("Bro no escribas macanadas")
    }
})*/












//Ejercicio crear un formulario que reciba
//Nombre de usuario
//2 edad          validar q tenga mas de 18 años
//pais de origen   validar q sea chileno


/*
let formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", function(eventos){
    eventos.preventDefault();
    console.log("Se a enviado con exito")
    let megaformulario = new FormData(formulario);
    console.log(megaformulario.get("nombre"))
    
    if(megaformulario.get("nombre") == "" ){
       alert("ta vacio mano")
    }
    if(megaformulario.get("edad")< 18){
        alert("No teni 18, chau")
    }
    if(megaformulario.get("pais")!== "chile"){
        alert("No hay handrolls para ti")
    } 
})
*/


//Eventos del mouse
/* mouseover 
*/





let megainput = document.querySelector("#inputCadena")

let cuenta = document.querySelector("#supercontador")
let contador = 0;
megainput.addEventListener("keyup", function(evento){
    console.log(evento.target.value);
    contador = evento.target.value.length;
    cuenta.textContent = `Contador : ${contador}`
})
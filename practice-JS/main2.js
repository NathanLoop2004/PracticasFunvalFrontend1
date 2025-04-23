/*alert("Bienvenido a la Maquina de votar")




edad = prompt("Para comenzar necesitamos que pueda colocar su Edad");

while (edad < 18){
    if(edad < 18){
        alert("Lo sentimos, no puede votar, vuelva cuando tenga 18 años o mas")
    }
    else{
        alert("Puede votar porfavor siga las instrucciones")
    }
}
alert("Puede votar porfavor siga las intrucciones")

*/





/*
numero = prompt("Colo que un numero y veremos si es negativo o positivo")
let cont = true;

while(cont){
if(numero === 0){
    alert("Tu numero es 0")
}
else if(numero < 0){
    alert("Tu numero es: " +numero+ " por lo tanto es negativo");
    cont = false
}
else{
    alert("Tu numero es: "+numero+" por lo que es positivo")
    cont = false
}
}

*/


// Programas del dia de las semanas


/*let dia = prompt("Selecciones un numero del 1 al 7:")


switch(dia){
    case 1:
    alert("Escogiste el Lunes")
break;

    case 2:
        alert("Escogiste el Martes")
break;

    case 3:
        alert("Escogiste el Miercoles")
break;

    case 4:
        alert("Escogiste el Jueves")
break;

    case 5:
        alert("Escogiste el Viernes")
break;

   case 6:
    alert("Escogiste el Sabado")
   break;

   case 7:
    alert("Escogiste el Domingo")
   break;

   default:
    alert("Lo que escogiste no es correcto")
    break;
}
*/

/* Numero par y impar */



/*
numero = prompt("Tu numero es par o impar?");


if(numero%2 == 0){
alert("tu numero: "+numero + " Es par!")
}
else{
    alert("tu numero: " +numero+" No es par!")
}
*/




//Notas escolares

/*
let nota = prompt("Cuantos puntos hiciste del 1 a 20?:  ")

if(nota <= 10){
    alert("Has sido desaprobado ")
}
else if(nota <= 13){
alert("Nota regular")
}
else if(nota <= 18){
    alert("Nota buena")
}
else if(nota ===  20){
    alert("Nota Excelente")
}
else{
    alert("Numero incorrecto")
}
*/



//Tablas de Multiplicacion
/*
let tabla = prompt("Tabla de Multiplicar  Elije una opcion del 1 al 10:   \n 1x \n 2x \n 3x \n 4x \n x5 \n x6 \n x7 \n x8 \n x9")

let numeroMultiplicador = 0;

switch (tabla) {
    case "1":
        alert("El numero que escogio para la multiplicacion es 1, El siguiente numero que escoja será su multiplicador")
    numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
       alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
        break;
        case "2":
            alert("El numero que escogio para la multiplicacion es 2, El siguiente numero que escoja será su multiplicador")
        numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
           alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
            break;
            case "3":
                alert("El numero que escogio para la multiplicacion es 3, El siguiente numero que escoja será su multiplicador")
            numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
               alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                break;
                case "4":
                    alert("El numero que escogio para la multiplicacion es 4, El siguiente numero que escoja será su multiplicador")
                numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                   alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                    break;
                    case "5":
                        alert("El numero que escogio para la multiplicacion es 5, El siguiente numero que escoja será su multiplicador")
                    numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                       alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                        break;
                        case "6":
                            alert("El numero que escogio para la multiplicacion es 6, El siguiente numero que escoja será su multiplicador")
                        numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                           alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                            break;                
                            case "7":
                                alert("El numero que escogio para la multiplicacion es 7, El siguiente numero que escoja será su multiplicador")
                            numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                               alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                                break;
                                case "8":
                                    alert("El numero que escogio para la multiplicacion es 8, El siguiente numero que escoja será su multiplicador")
                                numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                                   alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                                    break;
                                    case "9":
                                        alert("El numero que escogio para la multiplicacion es 9, El siguiente numero que escoja será su multiplicador")
                                    numeroMultiplicador = prompt("por cuanto desea multiplicarlo?: ")
                                       alert("Usted escogio el numero 1, la multiplicacion es "+ tabla+" x "+ numeroMultiplicador+" = "+ tabla*numeroMultiplicador)
                                        break;
                                        default:
        alert("No escogiste un numero valido")
        break;
}

*/

// Sumar los primeros 100 numeros



let numero = 0;


for (let index = 0; index <= 100; index++){
    numero = numero+index
}
console.log(numero)
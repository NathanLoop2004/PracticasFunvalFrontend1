

function calculadora(){
    alert("Bienvenido a la calculadora")
  
   
    while (true) {
    
        opcion=prompt("Escoge una de las opciones \n 1- Sumar  \n 2- Restar \n 3- Multiplicar  \n 4- Dividir \n 5- Salir de la calculadora")

    switch (opcion) {
        case "1":
            sumar()

            break;
        case "2":
            restar()
            break;
         case "3":
            Multiplicar()
            break;
         case "4":
            Dividir()
            break;
            case "5":
                return false
                break;      
        default:
            alert("No escogio la opcion correcta")
            break;
    }
    
}
    function sumar(num1, num2){
        num1 = parseInt(prompt("Escoge el Numero a sumar:  "))
        num2 = parseInt(prompt("Escoge tu segundo numero para sumar: "))
        sumado = num1 +  num2
     alert("El numero que usted sumo es:"+ sumado) 
    }


    
    function restar(num1, num2){
        num1 = parseInt(prompt("Escoge el Numero a restar:  "))
        num2 = parseInt(prompt("Escoge tu segundo numero para restar: "))
        restado = num1 -  num2
     alert("El numero que usted resto es:  "+ restado) 
    }

    function Multiplicar(num1, num2){
        num1 = parseInt(prompt("Escoge el Numero a multiplicar:  "))
        num2 = parseInt(prompt("Escoge tu segundo numero para multiplicar: "))
        multiplicado = num1 * num2 
        alert("El numero que usted multiplico es:  "+multiplicado)
    }

    function Dividir(num1, num2){
        num1 = parseInt(prompt("Escoge el Numero a dividir:  "))
        num2 = parseInt(prompt("Escoge tu segundo numero para dividir: "))
        dividido = num1 / num2 
        alert("El numero que usted multiplico es:  "+dividido)
    }
}


calculadora()
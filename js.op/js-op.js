// ATM.js

alert("Bienvenido al ATM");

// Declarar la variable fuera del bucle
let codigoPIN = 0;

// Bucle para verificar el PIN
while (codigoPIN !== 1234) {
    // Actualizar el valor de codigoPIN
    const entrada = prompt("Numero de PIN:1234 Introduzca su Codigo PIN:  ");
    codigoPIN = parseInt(entrada);

    // Validar si la entrada no es un número
    if (isNaN(codigoPIN)) {
        alert("Por favor, introduzca un número válido.");
        continue; // Volver al inicio del bucle
    }

    if (codigoPIN === 1234) {
        alert("Ha ingresado correctamente su PIN");
    } else {
        alert("El PIN es incorrecto, intente nuevamente");
    }
}

// Este alert se ejecutará después de que el while termine// Este alert se ejecutará después de que el while termine
alert("Bienvenido al ATM");

//Declarar las variables 
let saldo = 1000;

let option = prompt("Bienvenido al ATM, por favor elija una opcion: \n 1. Retirar dinero \n 2. Depositar dinero \n 3. Consultar saldo \n 4. Salir");

while (option !== "4") {
    // Bucle para las opciones del ATM
    switch (option) {
        case "1":
            let retiro = parseFloat(prompt("Cuanto dinero desea retirar?"));
            if (retiro > saldo) {
                alert("NO tiene suficiente saldo para retirar esa cantidad");
            } else {
                saldo -= retiro;
                alert("Usted ha retirado: " + retiro + "\n Su saldo actual es: " + saldo);
            }
            break;

        case "2":
            let deposito = parseFloat(prompt("Cuanto dinero desea depositar?"));
            if (deposito <= 0) {
                alert("El monto a depositar debe ser mayor que cero.");
            } else {
                saldo += deposito;
                alert("Usted ha depositado: " + deposito + "\n Su saldo actual es: " + saldo);
            }
            break;

        case "3":
            alert("Su saldo actual es: " + saldo);
            break;

        case "4":
            if (confirm("¿Está seguro que desea salir?")) {
                alert("Gracias por usar el ATM");
                break;
            } else {
                alert("Regresando al menú principal");
            }
            break;

        default:
            alert("Opción no válida, por favor elija una opción válida");
            break;
    }

    // Volver a mostrar el menú para que el usuario elija otra opción
    option = prompt("Por favor elija una opcion: \n 1. Retirar dinero \n 2. Depositar dinero \n 3. Consultar saldo \n 4. Salir");
}

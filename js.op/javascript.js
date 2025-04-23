









alert("Bienvenido a la Calculadora de Areas Geometricas")



point = prompt("Elige una de estas opciones \n 1- Caluclar Area de un cuadrado   \n 2- Calcular el area de un rectangulo.  \n 3- Calcular el area de un triangulo. ")



switch (point) {
    case "1":
        areaDelCuadrado()
        break;
     case "2":
      areaDelRectangulo()
     break;
     case "3":
     areaDelTriangulo()
     break;

    default:
        alert("La opcion que eligio no esta dentro de las opciones")
        break;
}






function areaDelCuadrado(){
    let ladoCuadrado = parseFloat(prompt("Ingrese el largor de un lado en cm"))
       ladoCuadrado = ladoCuadrado**2
       alert("El Area del Cuadrado es:  "+ladoCuadrado)
}

function areaDelRectangulo(){
    let baseDelRectangulo = parseFloat(prompt("Ingrese la magnitud de la base del Rectangulo:  "))
    let alturaDelRectangulo = parseFloat(prompt("Ingrese la Altura del Rectangulo:   "))
      areaDElRectangulo = baseDelRectangulo * alturaDelRectangulo
      alert("El Area del Rectangulo es:  "+areaDElRectangulo) 
}

function areaDelTriangulo(){
    let baseDELTriangulo = parseFloat(prompt("Ingrese la magnitud de la base del Triangulo"))
    let alturaDelTriangulo = parseFloat(prompt("Ingrese la Altura del Triangulo:  "))
    areaDELTriangulo = baseDELTriangulo * alturaDelTriangulo / 2
    alert("El Area del Triangulo es: "+areaDELTriangulo)
}
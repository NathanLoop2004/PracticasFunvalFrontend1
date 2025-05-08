
/*
function hola(nombre){
    console.log(`${nombre} como estas?`)
}

hola("kevin")
*/


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function preprarEnsalada(frutas, accion){
    //Codigo que nos interesa realizar con las frutas
    return accion(frutas)
}

function pelar(fruta){
    console.log(`${fruta} ha sido pelado con exito`)
}

function jugo(fruta){
    console.log(`la fruta :${fruta} licuada con exito.`)
}

preprarEnsalada("Banana",pelar)


//CALLBACKS
/*
function pedirHelado(tipoHelado, callback){
    let numerodeCaracteres = tipoHelado.length;
    console.log(numerodeCaracteres)
    callback()
}

function helado(){
    console.log("este helado esta sabroso")
}

pedirHelado("helado")

*/


//Funciones Sincronas

/*
console.log("Llegamos ala heladeria");
console.log("esperamos el helado")
console.log("esperamos helado")*/




//Funciones Asincronica
/*
console.log("llegamos a la Heladeria")
setTimeout(()=>{
    console.log("helado entregado");
},5000);
console.log("esperamos helado");
*/


/*
console.log("Compramo la harina")
console.log("preparamo la masa")
console.log("le ponemo salsa")
console.log("le ponemo al horno")
setTimeout(()=>{
    console.log("Salio del horno")
},5000)
console.log("viendo la tele")
setTimeout(()=>{
    console.log("Disfrutar noma")
},7000)




function despertar(callback) {
    console.log("Despertando...");
    setTimeout(() => {
      console.log("Me desperté");
      callback();
    }, 2000);
  }
  function desayunar(callback) {
    console.log("Preparando desayuno...");
    setTimeout(() => {
      console.log("Desayuné");
      callback();
    }, 2500);
  }
  function irAlColegio() {
    console.log("Caminando al colegio...");
    setTimeout(() => {
      console.log("Llegué al colegio");
    }, 2000);
  }


  // Llamada en orden


  despertar(() => {
    desayunar(() => {
      irAlColegio();
    });
  });
  */


  /*
  let superpromesa = new Promise((resolve, reject)=> {
    let ellaTeespero = false;
    if(ellaTeespero){
        resolve("ella si te espero hermanito")
    }
    else{
        reject("ella no te espero bro :c")
    }
  });


  superpromesa.then((mensaje)=>{
    console.log(mensaje);
  })
  .catch((error)=> {
    console.log(error)
  })
*/


/*
    let traerDatos = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([
                {
                    nombre: "kevin",
                    edad: 20
                },
                {
                    nombre: "matias",
                    edad: 22
                },
                {
                    nombre: "gino",
                    edad: 23
                },
            ])
        },5000)
    })
reject("No found dates")

    traerDatos.then((item)=>{
        console.log("Datos recibidos")
        console.log(item);
        let objetos = item;
        objetos.forEach((element)=>{
    console.log(element)
        })
    })
    traerDatos.catch((item)=>{
        console.log("No llegaron los datos")
    })

    console.log(objetos)




    function laPromesa(){
        return new Promise((resolve, reject)=> {
          setTimeout(()=>{
            let peliculasLlegaron = true;
            if (peliculasLlegaron) {
                resolve([
                    { nombre: "Terminarto", año: 2019},
                    { nombre: "Terminarto", año: 2019},
                    { nombre: "Terminarto", año: 2019},
                    { nombre: "Terminarto", año: 2019},
                ]);

            }else{
                reject("Las peliculas no llegaron pa")
            }
          }, 5000)
        });
    }

    laPromesa()
    .then((item)=>{
        item.forEach((element)=>{
            console.log(element)
        })
    })
    .catch((error)=>{
        console.log(error)
    });
    */
/*

    function promesa(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                let pizza = true
                if(pizza){
                    resolve([
                        {nombre: "Peperoni", gaseosa:"pepsi"},
                        {nombre: "Mexicana", gaseosa:"Fanta"},
                        {nombre: "Chessy Pop", gaseosa:"Fruna cola"},
                    ])
                }
            },5000)
        })
    }


    promesa().then((item)=>{
        item.forEach((element)=>{
            console.log(element)
        })
    })
    .catch((error)=>{

    });*/

/*

    function obtenerUsuarios() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const exito = true;
            if (exito) {
              resolve([
                { nombre: "Juan", edad: 25 },
                { nombre: "María", edad: 30 },
                { nombre: "Pedro", edad: 17 },
              ]);
            } else {
              reject("No se pudieron obtener los usuarios");
            }
          }, 1500);
        });
      }

      obtenerUsuarios().then((tabien)=>{
        tabien.forEach(element => {
            if(element.edad >= 18){
                console.log(`${element.nombre}tienes ${element.edad} asi que ta bien`)
            }
          else{
            console.log(` ${element.nombre} tienes ${element.edad} que haces aca loco?`)
          }
          })
        }).catch((error)=>{
            console.log(error)
        })
    
    
    */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Ejercicios de asincronia
/*
        function obtenerProductos() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const exito = true;
                if (exito) {
                  resolve([
                    { nombre: "Laptop", precio: 1200, stock: 5 },
                    { nombre: "Celular", precio: 800, stock: 0 },
                    { nombre: "Monitor", precio: 300, stock: 3 },
                    { nombre: "Teclado", precio: 50, stock: 10 },
                  ]);
                } else {
                  reject("Error al obtener los productos del servidor.");
                }
              }, 2000);
            });
          }


          obtenerProductos().then((item)=>{
            item.forEach(element => {
                if(element.stock > 0){
                    console.log(`El stock de ${element.nombre}  es: ${element.stock}`)
                }
                else{
                    console.log(`El stock de ${element.nombre}  es : ${element.stock} asi que no nos importa`)
                }
                
            });
          }).catch((error)=>{
            console.log(error)
          })
            */ 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   //Primer ejercicio ASYNC AWAIT




/*

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
      }, 2000);
    } else {
      reject("los libros no pudieron ser extraidos ");
    }
  });
}

async function DatosLibros() {
  holapapu = await fetchLibros()
  try{
     let recientes = holapapu.filter((libros)=> libros.año >= 2000)
     recientes.forEach((element)=>{
      console.log(element.autor)
     })
    }
  catch(error){
     console.log(error)
  }
}

DatosLibros();
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Ejercicio


function fetchUsuarios() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          nombre: "Ana",
          edad: 28,
          librosFavoritos: ["1984", "Cien años de soledad"],
          historialCompras: [
            {
              fecha: "2024-02-12",
              libros: ["1984", "Rebelión en la granja"],
            },
            {
              fecha: "2025-01-01",
              libros: ["Cien años de soledad"],
            },
          ],
        },
        {
          id: 2,
          nombre: "Luis",
          edad: 34,
          librosFavoritos: ["La naranja mecánica"],
          historialCompras: [
            {
              fecha: "2023-12-10",
              libros: ["La naranja mecánica", "El extranjero"],
            },
          ],
        },
        {
          id: 3,
          nombre: "Carla",
          edad: 21,
          librosFavoritos: [],
          historialCompras: [],
        },
      ]);
    }, 1000);
  });
}
let suma = 0;
async function clienteFrecuente() {
  try {
    let usuarioCantidad = await fetchUsuarios();
    /// aqui usamos filter para filtrar a los usuarios q tengan un historial de compras mayor o igual a 1
    let frecuentes = usuarioCantidad.filter(
      (usuario) => usuario.historialCompras.length >= 1
    );
    console.log(frecuentes);
    ///aqui filtramos a los clientes  q tengan en su historial de compras mas de un libro comprado
    let superfrecuentes = frecuentes.filter(
      (cliente) => cliente.historialCompras[0].libros.length > 1
    );
    ///AQUI ITERAMOS SOBRE LOS CLIENTES SUPER FRECUENTAS PARA ENCONTRAR LA CANTIDAD DE LIBROS Q COMPRARON Y SUS NOMBRES
    superfrecuentes.forEach((element) => {
      element.historialCompras.forEach((item) => {
        suma = item.libros.length + suma;
      });
      console.log(
        `el usuario de nombre ${element.nombre} a comprado ${suma} cantidad de libros`
      );
      suma = 0;
    });
  } catch (error) {
    console.log(error);
  }
}

clienteFrecuente();
/* Mostrar usuarios con más de 1 compra y mostrar la cantidad de libros comprados x ese usuario
    Mostrar todos los libros comprados por un usuario
    Agregar un libro favorito a un usuario si no lo tiene
*/
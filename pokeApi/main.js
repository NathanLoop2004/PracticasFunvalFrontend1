
let contenedor = document.querySelector("#card-container");

function traerPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      pintarPokemons(data);
    });
}

function traerPokemons(numero) {
  for (let i = 1; i <= numero; i++) {
    traerPokemon(i);
  }
}

function pintarPokemons(pokemon) {
  let tipospok = pokemon.types;
  let cadtipos = "";
  tipospok.forEach((element) => {
    cadtipos += element.type.name + ",";
  });
  contenedor.innerHTML += `

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex items-center">
    <a href="#">
        <img class="rounded-t-lg" src="${pokemon.sprites.front_default}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${pokemon.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" class="tipos-pokemon">${cadtipos}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
`;
}

traerPokemons(12);

let btnfuego = document.querySelector("#fuego");

btnfuego.addEventListener("click", function (evento) {
  contenedor.innerHTML = "";
  fetch("https://pokeapi.co/api/v2/type/fire")
    .then((response) => response.json())
    .then((data) => {
      let arraydepokefuego = data.pokemon.slice(0, 12);
      arraydepokefuego.forEach((poke) => {
        fetch(poke.pokemon.url)
          .then((respuesta) => respuesta.json())
          .then((datopo) => {
            pintarPokemons(datopo);
          });
      });
    });
});

function tipopokemonfuego(pokemon) {
  let poketipo = pokemon.types;
  poketipo.forEach((t) => {
    if (t.type.name === "fire") {
      pintarPokemons(pokemon);
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Agua

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let btnAgua = document.querySelector("#Agua");


//Escuchador
btnAgua.addEventListener("click", function (evento) {
    contenedor.innerHTML = "";
    fetch("https://pokeapi.co/api/v2/type/water")
      .then((response) => response.json())
      .then((data) => {
        let arraydepokefuego = data.pokemon.slice(0, 12);
        arraydepokefuego.forEach((poke) => {
          fetch(poke.pokemon.url)
            .then((respuesta) => respuesta.json())
            .then((datopo) => {
              pintarPokemons(datopo);
            });
        });
      });
  });



//Filtrado
function tipopokemonAgua(pokemon) {
    let poketipo = pokemon.types;
    poketipo.forEach((t) => {
      if (t.type.name === "water") {
        pintarPokemons(pokemon);
      }
    });
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//planta

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let btnPlanta = document.querySelector("#planta");


//Escuchador
btnPlanta.addEventListener("click", function (evento) {
    contenedor.innerHTML = "";
    fetch("https://pokeapi.co/api/v2/type/grass")
      .then((response) => response.json())
      .then((data) => {
        let arraydepokefuego = data.pokemon.slice(0, 12);
        arraydepokefuego.forEach((poke) => {
          fetch(poke.pokemon.url)
            .then((respuesta) => respuesta.json())
            .then((datopo) => {
              pintarPokemons(datopo);
            });
        });
      });
  });



//Filtrado
function tipopokemonAgua(pokemon) {
    let poketipo = pokemon.types;
    poketipo.forEach((t) => {
      if (t.type.name === "grass") {
        pintarPokemons(pokemon);
      }
    });
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Electrico

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let btnElectrico = document.querySelector("#electric");


//Escuchador
btnElectrico.addEventListener("click", function (evento) {
    contenedor.innerHTML = "";
    fetch("https://pokeapi.co/api/v2/type/electric")
      .then((response) => response.json())
      .then((data) => {
        let arraydepokefuego = data.pokemon.slice(0, 12);
        arraydepokefuego.forEach((poke) => {
          fetch(poke.pokemon.url)
            .then((respuesta) => respuesta.json())
            .then((datopo) => {
              pintarPokemons(datopo);
            });
        });
      });
  });



//Filtrado
function tipopokemonAgua(pokemon) {
    let poketipo = pokemon.types;
    poketipo.forEach((t) => {
      if (t.type.name === "electric") {
        pintarPokemons(pokemon);
      }
    });
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Fantasma

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let btnFantasma = document.querySelector("#fantasma");


//Escuchador
btnFantasma.addEventListener("click", function (evento) {
    contenedor.innerHTML = "";
    fetch("https://pokeapi.co/api/v2/type/ghost")
      .then((response) => response.json())
      .then((data) => {
        let arraydepokefuego = data.pokemon.slice(0, 12);
        arraydepokefuego.forEach((poke) => {
          fetch(poke.pokemon.url)
            .then((respuesta) => respuesta.json())
            .then((datopo) => {
              pintarPokemons(datopo);
            });
        });
      });
  });



//Filtrado
function tipopokemonAgua(pokemon) {
    let poketipo = pokemon.types;
    poketipo.forEach((t) => {
      if (t.type.name === "ghost") {
        pintarPokemons(pokemon);
      }
    });
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Veneno

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let btnVeneno = document.querySelector("#veneno");


//Escuchador
btnVeneno.addEventListener("click", function (evento) {
    contenedor.innerHTML = "";
    fetch("https://pokeapi.co/api/v2/type/poison")
      .then((response) => response.json())
      .then((data) => {
        let arraydepokefuego = data.pokemon.slice(0, 12);
        arraydepokefuego.forEach((poke) => {
          fetch(poke.pokemon.url)
            .then((respuesta) => respuesta.json())
            .then((datopo) => {
              pintarPokemons(datopo);
            });
        });
      });
  });



//Filtrado
function tipopokemonAgua(pokemon) {
    let poketipo = pokemon.types;
    poketipo.forEach((t) => {
      if (t.type.name === "poison") {
        pintarPokemons(pokemon);
      }
    });
  }
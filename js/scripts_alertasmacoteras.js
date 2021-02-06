/*
alumno:LUCIANO COTTO
Tutora: SOLEDAD ZAMBRANO
 
PREENTREGA - EXPIRA EL JUEVES 28/01/2021 23:59HS
Primera Entrega del Proyecto Final

PROYECTO "ALERTAS MASCOTERAS" - Bootstrap 4, SASS, CSS, JS.
CODE >> https://github.com/LucianoCotto/AlertasMascoteras-JS
PAGE >> https://lucianocotto.github.io/AlertasMascoteras-JS/crear-alerta.html

>> Objetos JS (elementos estimados):

1) Muro de Anuncios 
    Es el Objeto GRID-CARDS en index.html,
    que tendrá un Filtro de "perdidas", "encontradas", .

2) Persona (Usuario) -objeto-
    -propiedades- PersonaID | Nombre | Apellido | Email | Celular

3) Mascota -objeto-
    Perro -objeto-
    -propiedades- Raza | Sexo | Colores | PersonaID | MascotaID
    
    Gato -objeto-
    -propiedades- Raza | Sexo | Colores | PersonaID | MascotaID

4) Anuncio -objeto-
    AnuncioID    
    TipoAnuncio
    -propiedades- Perdidas | Encontradas
    Mensaje
    == PersonaID
    == MascotaID

    // script_alertasmasoteras.js //
    // script_func_constructoras.js //
    // data-anuncios-personas-mascotas.json //

*/



// // // // // // // // // // // // // // //
//      ARRAYS y OBJETOS PRINCIPALES      //
// // // // // // // // // // // // // // //

let myArrayMuroAnuncios = [];
let myArrayFichasAnuncios = [];

let myArrayPersonas = [];
let myArrayMascotas = [];
let myArrayAnuncios = [];



// // // // // // // // // //
// FUNCIONES CONSTRUCTORAS      //
// script_func_constructoras.js //
// // // // // // // // // //


function showAnuncios(listaDeAnunciosRecibidos){
    cardsList.innerHTML = "";
    listaDeAnunciosRecibidos.forEach(function (card){
        const card = buildAnuncioCard(anuncio);
        cardsList.innerHTML += card;
    })
}

function buildAnuncioCard(card) {
    let div = '<div class="card"></div>'
            
    return div;
}



// // // // // // // // // //
// INICIALIZACIÓN

var btnSubmit = document.getElementById('btnSubmit');

// Campos de Persona
var paramNombrePersona = document.getElementById('nombre');
var paramApellidoPersona = document.getElementById('apellido');
var paramCelularPersona = document.getElementById('celular');
var paramEmailPersona = document.getElementById('email');

// Campos de Mascota
var paraEspecieMascota = document.getElementById('especie');
var paraRazaMascota = document.getElementById('raza');
var paraSexoMascota = document.getElementById('sexo');
var paraColoresMascota = document.getElementById('colores');

// Campos de Anuncio
var paramTipoAnuncio = document.getElementById('tipoAnuncio');
var paramComentAnuncio = document.getElementById('comentAnuncio');
var paraFotosAnuncio = document.getElementById('fotosAnuncio');
var paramFechaPerdida = document.getElementById('fechaPerdida');
var paramFechaEncontrada = document.getElementById('fechaEncontrada');
var paramBarrioCaba = document.getElementById('barrioCaba');
var paramCallePrincipal = document.getElementById('callePrincipal');
var paramCalleEntreUno = document.getElementById('calleEntreUno');
var paramCalleEntreDos = document.getElementById('calleEntreDos');



/////////////////////////////////////////////
// PRUEBAS

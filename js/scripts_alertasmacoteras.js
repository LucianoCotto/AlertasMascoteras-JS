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
*/

// // // // // // // // // //
// ARRAYS DE OBJETOS PRINCIPALES //
// // // // // // // // // //

let myArrayPersonas = [];
let myArrayMascotas = [];
let myArrayAnuncios = [];

// // // // // // // // // //
// FUNCIONES CONSTRUCTORAS //
// // // // // // // // // //

// FUNCIÒN CONSTRUCTORA "Nuevo Gato"
function NuevaPersona(paramNombrePersona, paramApellidoPersona, paramCelularPersona, paramEmailPersona){
    
    // Parámetros del PERSONA
    
    // Datos Privado
    var personaID = Symbol.for('hid-');
    this.getPersonaID = function(personaID) {
        return "PersonaID: " + this.personaID;
    } 
    // Datos Públicos
    this.nombrePersona = paramNombrePersona;
    this.apellidoPersona = paramApellidoPersona;
    this.celularPersona = paramCelularPersona;
    this.emailPersonao = paramEmailPersona;

    return getPersonaID();
}
var paramNombrePersona = document.getElementById("nombre");
var paramApellidoPersona = document.getElementById("nombre");
var paramCelularPersona = document.getElementById("celular");
var paramEmailPersona = document.getElementById("email");


// FUNCIÒN CONSTRUCTORA "Nuevo Perro"
function NuevoPerro(paraEspecieMascota, paraRazaMascota, paraSexoMascota, paraColoresMascota){
    
    // Parámetros del PERRO

    // Datos Privado
    var mascotaID = Symbol.for('mpid-');
    this.getMascotaID = function(mascotaID) {
        return this.mascotaID;
    }

    // Datos Pùblico
    this.especieMascota = paraEspecieMascota;
    this.razaMascota = paraRazaMascota;
    this.sexoMascota = paraSexoMascota;
    this.coloresMascota = paraColoresMascota;

    this.getColoresArray = function(coloresMascota) {
        return "Estos son los colores: " + this.coloresMascota.slice(', ');
    }

    return getMascotaID();
    

}
var paraEspecieMascota = document.getElementById("especie");
var paraRazaMascota = document.getElementById("raza");
var paraSexoMascota = document.getElementById("sexoMascota");
var paraColoresMascota = document.getElementById("coloresMascota");



// FUNCIÒN CONSTRUCTORA "Nuevo Gato"
function NuevoGatos(paraEspecieMascota, paraRazaMascota, paraSexoMascota, paraColoresMascota){
    
    // Parámetros del GATO

    // Datos Privado
    var mascotaID = Symbol.for('mgid-');
    this.getMascotaID = function(mascotaID) {
        return "MascotaID: " + this.mascotaID;
    }
    // Datos Pùblico
    this.especieMascota = paraEspecieMascota;
    this.razaMascota = paraRazaMascota;
    this.sexoMascota = paraSexoMascota;
    this.coloresMascota = paraColoresMascota;
    this.getColoresArray = function(coloresMascota) {
        return "Estos son los colores: " + this.coloresMascota.slice(', ');
    }

    return getMascotaID();

}

var paraEspecieMascota = document.getElementById("especie");
var paraRazaMascota = document.getElementById("raza");
var paraSexoMascota = document.getElementById("sexo");
var paraColoresMascota = document.getElementById("colores");


// FUNCIÒN CONSTRUCTORA "Nuevo Anuncio"
function NuevoAnuncio(paramTipoAnuncio, paramComentAnuncio, paraFotosAnuncio, paramFechaPerdida, paramFechaEncontrada,
    paramBarrioCaba, paramCallePrincipal, paramCalleEntreUno, paramCalleEntreDos) {
        // Parámetros del ANUNCIO

        // ID del Anuncio Dato Privado - "HARDCODEADO"
        var anuncioID = Symbol.for('mid-');   
        this.getAnuncioID = function(anuncioID) {
            return "AnuncioID: " + this.anuncioID;
        }
        //
        this.personaID = getPersonaID();
        this.mascotaID = getMascotaID();


        this.getMascotaID = function(mascotaID) {
            return "MascotaID: " + this.mascotaID;
        }

        // Datos Públicos
        this.tipoAnuncio = paramTipoAnuncio;
        this.comentarioAnuncio = paramComentAnuncio;
        this.fotosAnuncio = paraFotosAnuncio;
        this.fechaPerdida = paramFechaPerdida;
        this.fechaEncontrada = paramFechaEncontrada;
        this.barrioCaba = paramBarrioCaba;
        this.callePrincipal = paramCallePrincipal;
        this.calleEntreUno = paramCalleEntreUno;
        this.calleEntreDos = paramCalleEntreDos;

}
var paramTipoAnuncio = document.getElementById("tipoAnuncio");
var paramComentAnuncio = document.getElementById("comentAnuncio");
var paraFotosAnuncio = document.getElementById("fotosAnuncio");
var paramFechaPerdida = document.getElementById("fechaPerdida");
var paramFechaEncontrada = document.getElementById("fechaEncontrada");
var paramBarrioCaba = document.getElementById("barrioCaba");
var paramCallePrincipal = document.getElementById("callePrincipal");
var paramCalleEntreUno = document.getElementById("calleEntreUno");
var paramCalleEntreDos = document.getElementById("calleEntreDos");



// // // // //
var btnSubmit = document.getElementById("btnSubmit");

window.onload = function eventoCrear(){
    // this.NuevoAnuncio.push("")
    localStorage.setItem('anuncio-1', 'Miguel Antonio');
    console.log( NuevoAnuncio[0]);
}


// "HARDCODEO" de parámetros del Anuncio N°1
var miAnuncio_01 = new NuevoAnuncio(miNuevoAnuncio);

// Ingreso de parámetros del Anuncio N°2
var miAnuncio_02 = new NuevoAnuncio(miNuevoAnuncio);
 
// Mostrar parámetro Perro o Gato del objeto miAnuncio
console.log(miAnuncio_01.especieMascota);
console.log(miAnuncio_02.especieMascota);
console.log(typeof miAnuncio_01.coloresMascota);

// Mostrar con método todos los parámetros del objeto miAnuncio
console.log(miAnuncio_01.getDatosLista());
console.log(miAnuncio_02.getDatosLista());

// Mostrar variables (parámetro) Privadas del 1er Anuncio
console.log(miAnuncio_01.getAnuncioID());
console.log(miAnuncio_01.getPersonaID());

// Mostrar variables (parámetro) Privadas del 2do Anuncio
console.log(miAnuncio_02.getAnuncioID());
console.log(miAnuncio_02.getPersonaID());

// Transformar en array el parámetro 'coloresMascotas' que ingresa como string
console.log(miAnuncio_01.getColoresArray());
    
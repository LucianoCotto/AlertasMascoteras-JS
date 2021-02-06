
// // // // // // // // // //
// FUNCIONES CONSTRUCTORAS //
// // // // // // // // // //


// FUNCIÒN CONSTRUCTORA "Nuevo Gato"
function NuevaPersona(paramNombrePersona, paramApellidoPersona, paramCelularPersona, paramEmailPersona){
    
    // Parámetros del PERSONA
    let infoPersona = [];
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

}




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

}




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


}




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

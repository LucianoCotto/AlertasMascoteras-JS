
// // // // // // // // // //
// FUNCIONES CONSTRUCTORAS //
// // // // // // // // // //


// FUNCIÒN CONSTRUCTORA "Nuevo Gato"
function NuevaPersona(paramNombrePersona, paramApellidoPersona, paramCelularPersona, paramEmailPersona){
    
    let infoPersona = [];
    // Datos Privado
    var personaID = "";

    // Datos Públicos
    this.nombrePersona = paramNombrePersona;
    this.apellidoPersona = paramApellidoPersona;
    this.celularPersona = paramCelularPersona;
    this.emailPersonao = paramEmailPersona;

}



// FUNCIÒN CONSTRUCTORA "Nuevo Perro"
function NuevoPerro(paraEspecieMascota, paraRazaMascota, paraSexoMascota, paraColoresMascota){
    
    // Datos Privado
    var mascotaID = "";

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
    var mascotaID = "";

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
        var anuncioID = "";   
        
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

let arrayDatosJSON = [{

            "Nombre" : "Carolina",
            "Apellido": "García",
            "Email" : "carolinagarcia@gmail.com",
            "Celular" : 5491143332222,
            "PersonaID" : ["P",1],

            "AnuncioID" : "AN-1",
            "anuncioTipo" : "Perdida",
            "comentarioAnuncio" : "Es muy viejita y necesita medicación diaria.",
            "fotosAnuncio" : {
                "fotoUno" : "../img/AlertasImg/gato-001-a.jpg",
                "fotoDos" : "../img/AlertasImg/gato-001-b.jpg",
                "fotoTres" : "../img/AlertasImg/gato-001-c.jpg",
                },
            "fechaPerdida" : "15/07/2020",
            "fechaEncontrada" : "",
            "barrioCaba" : "Villa Crespo",
            "callePrincipal" : "Av. Corrientes",
            "calleEntreUno" : "Salguero",
            "calleEntreDos" : "Medrano",

            "MascotaID" : ["gato",1],
            "Especie" : "Gato",
            "Raza" : "Siamés",
            "Sexo" : "Hembra",
            "Colores" : ["negro", "beige"]

        },{
            "Nombre" : "Sergio",
            "Apellido": "Casco",
            "Email" : "sergiocasco@gmail.com",
            "Celular" : 5491156667777,
            "PersonaID" : ["P",2],

            "anuncioID" : "AN-2",
            "anuncioTipo" : "Encontrada",
            "comentarioAnuncio" : "Tiene chapita con un teléfono pero nadie atiende cuando llamamos",
            "fotosAnuncio" : {
                "fotoUno" : "../img/AlertasImg/perro-001-a.jpg",
                "fotoDos" : "../img/AlertasImg/perro-001-b.jpg",
                "fotoTres" : "../img/AlertasImg/perro-001-c.jpg",
                },

            "fechaPerdida" : "",
            "fechaEncontrada" : "21/09/2020",
            "barrioCaba" : "San Nicolas",
            "callePrincipal" : "Uruguay",
            "calleEntreUno" : "Sarmiento",
            "calleEntreDos" : "J.D. Perón",

            "MascotaID" : ["perro",1],
            "Especie" : "Perro",
            "Raza" : "Callejero",
            "Sexo" : "Macho",
            "Colores" : ["negro", "blanco", "beige"],
       
        },{
        
}];

JSON.parse(arrayDatosJSON)

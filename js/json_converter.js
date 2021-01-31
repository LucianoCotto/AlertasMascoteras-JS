var myAnuncio1 = '{"HumanoID" : ["H",1],"MascotaID" : ["MG",1],"AnuncioID" : "AN-1"}';
var jsonObject = JSON.parse(myAnuncio1);

var myAnuncio2 = '{"HumanoID" : ["H",2],"MascotaID" : ["MP",1],"AnuncioID" : "AN-2"}';
var jsonObject = JSON.parse(myAnuncio2);


console.log(jsonObject.MascotaID);
console.log(jsonObject.AnuncioID);

localStorage.setItem("myAnuncio1", JSON.stringify(jsonObject));
localStorage.setItem("myAnuncio2", JSON.stringify(jsonObject));
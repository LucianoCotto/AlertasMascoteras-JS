let arrayProductos=[];
class Persona{
constructor(numero,nombre,genero){
    this.id=numero;
    this.nombre=nombre;
    this.genero=genero
}
}
arrayProductos.push(new Persona (0,"algo","femenino"));
arrayProductos.push(new Persona (0,"nombre","masculino"));
arrayProductos.push(new Persona (0,"apellido","no especifica"));

console.log(arrayProductos);

function generacion(){
    let numero=Math.floor(Math.random()*10);
    return numero
}

function verificacion(array){
    for (let i =1; i<array.length;i++){
        let num=generacion();
        //antes de asignacion de numero
        console.log(array[i]);
        if(array[i].id===num){
            num=generacion();
        }
        else{
            array[i].id=num;
            //resultado despues
            console.log(array[i]);
        }
    }
}

verificacion(arrayProductos);
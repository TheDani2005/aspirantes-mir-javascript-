 let pedro = {
    nombre : "Pedro Perez",
    edad : 30,
    activo : true,
    hobbies : ["programar", "squash", "piano" ] ,
     saluda : function(){
        console.log( "Hola, me llamo " + this.nombre)
    },
};
 
let edad = pedro.edad;
console.log(edad)

console.log("=========================")
pedro.estatura = 1.8;
delete pedro.activo;

for ( let it in pedro ){
    console.log(it, " : ", pedro[it]);
}
pedro.saluda()
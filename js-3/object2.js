let persona = {
    nombre: "Joshua",
    edad: 17,
    ciudad: "Cartagena",
    profesion: "Ingeniero de sistemas",
};

console.log(persona);

function presentacion(persona){
    return "Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["leer", "camicar", "jugar", "practicar deporte"];

for (let i = 0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}



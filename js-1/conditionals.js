function calcularColor(x){
    
    if (x === 1){
        return "El color es negro";
    } else if (x === 2){
        return"El color es blanco";
    } else if (x === 3){
        return "El color es rojo";
    }else {
            return "El color es verde";
        }

}
console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(4));
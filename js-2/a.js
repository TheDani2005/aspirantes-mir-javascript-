function join(arreglo) {
    if (arreglo.length === 0) {
      return '';
    }
  
    let resultado = arreglo[0].toString();
  
    for (let i = 1; i < arreglo.length; i++) {
      resultado += ' ' + arreglo[i].toString();
    }
  
    return resultado;
  }
  
  console.log(join([1, 2, 3])); // Imprimirá "1 2 3"
  console.log(join(['Hola', 'Mundo', '!'])); // Imprimirá "Hola Mundo !"
  console.log(join([])); // Imprimirá ""
  
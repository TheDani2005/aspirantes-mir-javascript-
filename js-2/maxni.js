function maxIndex(arreglo) {
    if (arreglo.length === 0) {
      return -1;
    }
  
    let maximo = arreglo[0];
    let indiceMaximo = 0;
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
        indiceMaximo = i;
      }
    }
  
    return indiceMaximo;
  }
  
  console.log(maxIndex([1, 3, 2])); // Imprimirá 1
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // Imprimirá 0
  console.log(maxIndex([])); // Imprimirá -1
  
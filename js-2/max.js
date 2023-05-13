function max(arreglo) {
    if (arreglo.length === 0) {
      return undefined;
    }
  
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i];
      }
    }
    return maximo;
  }
  
  console.log(max([1, 3, 2])); // Imprimirá 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])); // Imprimirá 10
  console.log(max([])); // Imprimirá undefined
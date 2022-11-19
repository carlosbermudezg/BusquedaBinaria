//Función de búsqueda binaria dentro de un array
const binarySearch = ( array, objective) => {
    //Ordenamos el array
    let orderedArray = array.sort((a,b) => a - b)
    //Variables que almacenan: La mitad, el inicio y el final del arreglo
    let firstIndex = 0
    let lastIndex = orderedArray.length - 1
    let middleIndex = Math.trunc((firstIndex + lastIndex) / 2)
    //Validamos si el objetivo se encuentra a la mitad y devolvemos el resultado
    if( orderedArray[middleIndex] === objective ){
      return {['objetivo'] : orderedArray[middleIndex], ['posicion'] : middleIndex}
    }
    //Iteramos para encontrar el resultado
    for( let i = 0; orderedArray[middleIndex] != objective; i++){
        console.log(i);
      //Validamos si el objetivo es mayor al valor en la mitad del Array
      if( objective > orderedArray[middleIndex] ){
        //Movemos el primer índice a la posición siguiente de la mitad calculada del Array
        firstIndex = middleIndex + 1
        //Definimos la nueva mitad de búsqueda hacia el lado derecho del array
        middleIndex = Math.trunc((firstIndex + lastIndex) / 2)
      }
      //Validamos si el objetivo es menor al valor en la mitad del array
      if( objective < orderedArray[middleIndex] ){
         //Movemos el último indice a la posición anterior de la mitad calculada del Array
        lastIndex = middleIndex - 1
        //Definimos la nueva mitad de búsqueda hacia el lado izquierdo del array
        middleIndex = Math.trunc((firstIndex + lastIndex) / 2)
      }
    }
    //Retornamos el resultado encontrado
    return {['objetivo'] : orderedArray[middleIndex], ['posicion'] : middleIndex}
  }

  //Ejemplo de ejecución
  let array = [9,10,11,14,15,1,2,3,4,5,6,7,12,13,8,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,45,56,58,74]
  console.log(binarySearch(array, 23));
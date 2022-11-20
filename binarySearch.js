/* 
Función que permite realizar una búsqueda binaria dentro de un arreglo de números
Autor: Carlos Bermúdez García
JavaScript
*/
const binarySearch = ( array, objective) => {
  let x = 0 //Define el inicio del Arreglo
  let y = array.length - 1 //Define el Final del Arreglo
  let m //Define el punto medio para empezar la búsqueda
  let response //Almacena la respuesta de la función

  array = array.sort((a,b) => a - b) //Ordenamos el arreglo de forma ascendente

  for( let i = 0; x!= y; i++){ //Iteramos hasta que ambos extremos del arreglo se encuentren en un punto medio
    m = Math.trunc(( x + y )/2) // Definimos la mitad del arreglo
    // console.log(array[m] + ' : ' + objective); //Muestra el recorrido que realiza para encontrar el resultado
    if(array[m] === objective) { // Validamos si el punto medio actual del array es igual al objetivo
      response = `Encontrado : ${array[m]} - Posicion ${m}`
      return response
    }
    array[m] > objective ? y = m - 1 : x = m + 1 //Validamos si el punto medio es mayor o menor al objetivo
    x === y ? m = Math.trunc(( x + y )/2) : false //Si "x" y "y" se encuentran en el mismo indice - Fin de la iteración
  }
  array[m] != objective ? response = `Valor no encontrado : ${objective}` :  response = `Encontrado : ${array[m]} - Posicion ${m}`
  return response
}
  //Ejemplo de ejecución
  let array = [9,10,11,14,15,1,2,3,4,5,6,7,12,13,8,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,45,56,58,74]
  console.log(binarySearch(array, 100));
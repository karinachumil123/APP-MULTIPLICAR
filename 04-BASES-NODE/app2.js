//Ejercicio -requerido paquete internos
//Importar archivos a nuestro proyecto utilizando writeFile
const fs = require('fs') //require para poder operar archivos


/**
* En este ejercicio se desea evolucionar la aplicacién para que
* se puede imprimir cualquier base para la tabla de multiplicar
* y luego de imprimir en consola se genere un archivo .txt con
* el nombre de la tabla y sus datos.
* Para poder crear y guardar datos en un archivo es neceario utilizar
* el paquete interno File Sistem (fs) y el método writeFile
*/

//Algo interasante de NODE es que podemos opearar archivos es de decir podemos
//crear, modificar y eliminar archivos por medio DE NODE

re

const base = 14;  // Define la base de la tabla de multiplicar.
let salida = ''; // Inicializa una cadena vacía donde se almacenará el resultado.

console.clear(); // Limpia la consola.
console.log(`=================`) // Imprime el borde superior de la tabla.
console.log(`    Tabla del : ${base}`) // Imprime el título de la tabla con la base.
console.log(`=================`) // Imprime el borde inferior del título.


for (let i = 1; i <= 10; i++) { // Bucle que itera desde 1 hasta 10.
  salida += `${base} x ${i} = ${base * i}\n` // Construye la cadena con cada línea de la tabla de multiplicar.
}


console.log(salida); // Imprime el resultado completo de la tabla en la consola.
// Se utiliza el módulo fs (File System) para guardar la tabla en un archivo txt en la ruta especificada.
// La función writeFile toma el nombre del archivo, el contenido (salida) y un callback para manejar el resultado.
fs.writeFile(`tabla-${base}.txt`, salida, (err) => { 
  if (err) throw err; // Si hay un error, lanza una excepción.

  console.log(`tabla-${base}.txt creado con writeFile`) // Confirma que el archivo ha sido creado.
})

//Ejercicio - COnversion de funcion a promesas
//Aca se utiliza el arhivo app5.js
const fs = require('fs');

// La función 'crearArchivo' ahora retorna una Promesa que genera la tabla de multiplicar 
// y la guarda en un archivo de texto. La promesa permite manejar la operación de manera asíncrona.
const crearArchivo = (base = 5) => {  
  return new Promise((resolve, reject) => { // Crea y retorna una nueva promesa.
    console.log('==============='); // Imprime un borde decorativo.
    console.log('   Tabla del: ', base); // Imprime el título con la base de la tabla.
    console.log('==============='); // Imprime otro borde decorativo.

    let salida = ''; // Inicializa la cadena vacía donde se almacenará la tabla de multiplicar.

    // Bucle que genera la tabla de multiplicar del 1 al 10.
    for (let i = 1; i <= 10; i++) { 
      salida += `${base} x ${i} = ${base * i}\n`; // Concatena cada línea de la tabla en la variable 'salida'.
    }

    console.log(salida); // Muestra la tabla generada en la consola.

    // Escribe el archivo 'tabla-[base].txt' de manera sincrónica utilizando 'fs.writeFileSync'.
    // Si la escritura del archivo es exitosa, la promesa se resuelve.
    try {
      fs.writeFileSync(`tabla-${base}.txt`, salida); // Guarda el archivo con el contenido generado.
      resolve(`tabla-${base}.txt`); // Resuelve la promesa con el nombre del archivo como valor.
    } catch (err) {
      reject(err); // En caso de error, la promesa es rechazada con el error correspondiente.
    }
  });
};

// Exporta la función 'crearArchivo' utilizando 'module.exports' para que pueda ser usada en otros archivos.
module.exports = {
  crearArchivo
};


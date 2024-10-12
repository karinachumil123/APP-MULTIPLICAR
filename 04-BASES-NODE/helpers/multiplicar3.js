const fs = require('fs'); // Importa el módulo 'fs' para trabajar con el sistema de archivos.

/*
 * Ejercicio - Función asincrónica para generar una tabla de multiplicar.
 * 
 * Este archivo define y exporta una función 'crearArchivo' que genera una tabla de multiplicar
 * para una base dada, la guarda en un archivo de texto, y maneja errores utilizando 'try...catch'.
 */

const crearArchivo = async (base = 5) => { // Función 'async' que retorna una promesa implícita.
  try {
    console.log('======================='); // Imprime el borde decorativo en la consola.
    console.log('  Tabla del: ', base); // Imprime el título de la tabla con la base.
    console.log('======================='); // Imprime otro borde decorativo.
    let salida = ''; // Inicializa una cadena vacía para almacenar la tabla.

    // Bucle para generar la tabla de multiplicar.
    for (let i = 1; i <= 10; i++) {
      salida += `${base} x ${i} = ${base * i}\n`; // Agrega cada línea de multiplicación a la cadena.
    }

    console.log(salida); 

    fs.writeFileSync(`tabla-${base}.txt`, salida); // Guarda la tabla en un archivo de texto de forma síncrona.

    return `tabla-${base}.txt`; // Retorna el nombre del archivo si todo es exitoso.
  }
  catch {
    throw err; // Lanza el error si ocurre algún problema en el bloque 'try'.
  }
}

module.exports = {
  crearArchivo // Exporta la función 'crearArchivo' para que pueda ser usada en otros archivos.
}


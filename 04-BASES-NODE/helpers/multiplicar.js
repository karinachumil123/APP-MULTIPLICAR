//Este archivo tiene la logica para que funcione el archivo app4.js
const fs = require('fs');

/**
 Se utiliza el modulo.exports para dar permiso a este archivo de esportar crearArchivo hasta el final d este archivo
**/

// Define la función 'crearArchivo' que genera una tabla de multiplicar y la guarda en un archivo de texto.
// La función toma un parámetro 'base', con un valor por defecto de 5 si no se proporciona un valor.
const crearArchivo = (base = 5) => {  
  console.log('==================='); // Imprime un borde decorativo en la consola.
  console.log('Tabla del: ', base); // Imprime el título indicando la base de la tabla de multiplicar.
  console.log('==================='); // Imprime el borde inferior.
  let salida = ''; // Inicializa una cadena vacía para almacenar la tabla de multiplicar.

  // Bucle que genera la tabla de multiplicar de 1 a 10.
  for (let i = 1; i <= 10; i++) { 
    salida += `${base} x ${i} = ${base * i}\n`; // Añade cada línea de multiplicación a la cadena 'salida'.
  }

  console.log(salida); // Imprime la tabla de multiplicar completa en la consola.

  // Utiliza 'fs.writeFileSync' para escribir el contenido de la tabla en un archivo de texto
  // llamado 'tabla-[base].txt'. Esta función guarda el archivo de manera síncrona.
  fs.writeFileSync(`tabla-${base}.txt`, salida); 

  console.log(`tabla-${base}.txt creado`); // Confirma que el archivo ha sido creado.
}

// 'module.exports' es una característica exclusiva de Node.js que permite exportar funciones, objetos o variables
// para que estén disponibles en otros archivos. No funciona en el entorno del navegador.
// En el navegador, se utiliza 'export' para módulos de ES6.
module.exports = {
  crearArchivo // Exporta la función 'crearArchivo' para que pueda ser utilizada en otros archivos.
}


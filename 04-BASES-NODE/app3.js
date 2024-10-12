//Ejercicio - importar archivos a nuestro proyecto
//Utilizando el writeFileAsync
const fs = require('fs');

/*
 *En este ejercicio se desea evolucionar la aplicacion para que se puede imprimir cualquier base para la tabla de multiplicar
 *y luegode imprimir fen consola se genera un archivo .txt con el nombre de la tablay sus datos
 *Para poder crear y guardar datos en un archivo es necesario utilizar el paquete interno File Sistem fs y el metodo 
 *writeFileAsync que es mucho mas sencillo y optimo que el writeFile
 */


const base = 16; // Define la base de la tabla de multiplicar.
let salida = ''; // Inicializa una cadena vacía donde se almacenará el resultado. 

console.clear(); // Limpia la consola.
console.log('========================='); // Imprime el borde superior de la tabla.
console.log(`    Tabla del: ${base}`); // Imprime el título de la tabla con la base. 
console.log('========================='); // Imprime el borde inferior del título.

for (let i = 1; i <= 10; i++) { // Bucle que itera desde 1 hasta 10.
  salida += `${base} x ${i} = ${base * i}\n` // Construye la cadena con cada línea de la tabla de multiplicar.
}

console.log(salida); // Imprime el resultado completo de la tabla en la consola.

// Usamos el método 'writeFileSync' del módulo 'fs' para escribir de forma síncrona.
// Esto guarda la tabla en un archivo de texto llamado 'tabla-16.txt' en la carpeta actual.
fs.writeFileSync(`tabla-${base}.txt`, salida); // El contenido de la tabla se guarda en el archivo.

console.log(`tabla-${base}.txt creado con writeFileSync`); // Confirma que el archivo ha sido creado.


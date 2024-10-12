/*
 * Ejercicio - Que hace las tablas de multiplicar --hasta -h
 * node app16 --base=1 --hasta=3
 */

const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar5');
const colors = require('colors')
const argv = require('../04-BASES-NODE/config/yargs3');

console.clear();

console.log(argv);

// Llama a la función 'crearArchivo', pasando los argumentos 'b' (base), 'l' (listar), y 'h' (hasta qué número se debe multiplicar la base).
crearArchivo(argv.b, argv.l, argv.h) 
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')) // Si la promesa se resuelve, muestra el nombre del archivo estilizado con colores arcoíris y un mensaje de "creado".
  .catch(err => console.log(err)); // Si ocurre un error durante el proceso, captura e imprime el error.

/*
 * Ejercicio - para separar la logica de la aplicacion con el archivo principal del mismo
 *
 * En este archivo principal (app.js o index.js), se está importando la función
 * 'crearArchivo' que fue exportada desde el archivo 'multiplicar.js'.
 * Esto permite modularizar la lógica, manteniendo el archivo principal limpio.
 */
// Desestructuración de 'crearArchivo' del módulo 'multiplicar.js', 
// ubicado en la carpeta 'helpers'. Con esta desestructuración,
// estamos listos para usar la función 'crearArchivo'.
const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar');

/*
 * Se creo la carpeta helpers para crear toda la logica de la aplicacion dentro
 * de el archivo multiplicar.js
 */


console.clear(); // Limpia la consola para tener una salida limpia al ejecutar el programa.

const base = 1; // Define la base de la tabla de multiplicar, en este caso es 1.

crearArchivo(base); // Llama a la función 'crearArchivo' pasando la base como argumento.

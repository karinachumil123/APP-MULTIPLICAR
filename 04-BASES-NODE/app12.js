/* Ejercicio - Agregar opcion -1 o --listar
* Utilizara el multiplicaré4.js que tendra la opcion
* para aceptar de pardmetro la bandera -1 --listar
* listar sirve para imprimir en consola, si no se elige entonces
* solo creara el archivo.
*/

const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar4');

// Importa el paquete 'yargs', utilizado para gestionar los argumentos de línea de comandos.
const argv = require('yargs')
  .option('b', { // Configura la opción 'b', que representa la base de la tabla de multiplicar.
    alias: 'base', // Alias alternativo para la opción 'b'.
    type: 'number', // Define que el valor de la opción debe ser un número.
    demandOption: true // Hace que esta opción sea obligatoria.
  })
  .option('l', { // Configura la opción 'l', que permite listar la tabla en la consola.
    alias: 'listar', // Alias alternativo para la opción 'l'.
    type: 'boolean', // Define que el valor de la opción debe ser booleano (true o false).
    default: false // Establece el valor predeterminado como 'false' si no se proporciona.
  })
  
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base tiene que ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv

console.clear();
console.log(argv);

//Se envian dos argumentos el valor de base que es numerico y listar que es booleano

crearArchivo(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err))

/*
 * Crea la tabla del 66 y listar node app12 --base=66 --listar
 * node app12 -b 66 -l
 *
 * crear la tabla 66 sin imprimir en consola 
 * node app12 -b 66
 * node app12 --base=66
 */

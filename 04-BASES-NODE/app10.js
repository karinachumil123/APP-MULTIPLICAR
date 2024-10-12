/**
* Ejercicio - configurando Yargs
* Ver la documentacién de Yargs en https://yargs.js.org/
* buscar en la pagina el uso de .option(key, [opt])
*var argv = require('yargs/yargs')(process.argv.slice(2))
  .option('f', {
    alias: 'file',
    demandOption: true,
    default: '/etc/passwd’,
    describe: 'x marks the spot’,
    type: ‘string’
  })
* .argv;
*

* Dando inicio al uso del paquete yars
*/

const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar3')

// Importa el paquete 'yargs', que se utiliza para manejar los argumentos de línea de comando.
// Se define la configuración de las opciones que se aceptarán desde la línea de comandos.
const argv = require('yargs')
  .option('b', { // Configura la opción 'b', que representa la base de la tabla de multiplicar.
    alias: 'base', // Define un alias para la opción 'b'.
    type: 'number', // Establece que la opción 'b' debe ser de tipo número.
    demandOption: true // Indica que la opción 'b' es obligatoria.
  })
  .check((argv, options) => { // Valida que el valor pasado a 'b' sea un número.
    if (isNaN(argv.b)) { // Verifica si el valor de 'b' no es un número.
      throw 'la base tiene que ser un numero'; // Si no es un número, arroja un error.
    }
    return true; // Si es válido, permite que el proceso continúe.
  })
  .argv; // Almacena el objeto final con los argumentos en 'argv'.

console.clear();

console.log(process.argv);
console.log(argv) //del paquete yargs
console.log('base yargs', argv.b);

/* Uso de yargs , ver el resultado de escribir en consola
* node app10 --base=5 --limite=10
* node app10 --base=abc
* node app10 -b 5
* node app10
* Documentar que pasa en cada caso. de lo plantedo en las lineas anteriores
*/


const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar6'); // Importa la función 'crearArchivo' del módulo de multiplicación
const colors = require('colors'); // Importa el módulo 'colors' para dar color a la salida en la consola
const argv = require('../04-BASES-NODE/config/yargs4'); // Importa la configuración de argumentos usando Yargs

console.clear(); 

console.log(argv); // Imprime los argumentos recibidos para verificar los valores de entrada

// Llama a la función 'crearArchivo' con los parámetros extraídos de 'argv'
crearArchivo(argv.b, argv.l, argv.h, argv.t) 
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado')) // Si se crea el archivo, imprime su nombre en colorido
  .catch(err => console.log(err)); // Si ocurre un error, lo imprime en la consola


  //--base para la multiplicacion 
//--hasta es limite 
//--listar es para mostrar la tabla en consola
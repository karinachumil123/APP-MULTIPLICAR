const argv = require('yargs')
  .option('b', { // Configura la opción 'b' que representa la base de la tabla de multiplicar.
    alias: 'base', // Alias alternativo para 'b'.
    type: 'number', // Indica que 'b' debe ser un número.
    demandOption: true, // Hace que esta opción sea obligatoria.
    describe: 'Es la base de la tabla de multiplicar' // Descripción que aparecerá en la ayuda de la línea de comandos.
  })
  .option('l', { // Configura la opción 'l', que permite listar la tabla de multiplicar en consola.
    alias: 'listar', // Alias alternativo para 'l'.
    type: 'boolean', // Indica que 'l' es de tipo booleano (true o false).
    demandOption: false, // No es obligatorio incluir esta opción.
    //defaull: false, se quita ya que está definido en la app principal
    describe: 'Muestra la tabla en consola' // Descripción para la ayuda de la línea de comandos.
  })
  .option('h', { // Configura la opción 'h', que indica hasta qué número se quiere operar la tabla.
    alias: 'hasta', // Alias alternativo para 'h'.
    type: 'number', // Debe ser un número.
    demandOption: true, // Hace que esta opción sea obligatoria.
    describe: 'Fin de la tabla que se quiere operar' // Descripción para la ayuda de la línea de comandos.
  })
  .check((argv, options) => { // Función de validación para verificar los valores de las opciones.
    if (isNaN(argv.b)) { // Verifica si 'b' no es un número.
      // NAN = Not a Number
      throw 'La base tiene que ser un numero'; // Arroja un error si 'b' no es un número.
    }
    return true; // Si la validación es correcta, permite continuar.
  })
  .argv; // Guarda los argumentos procesados por 'yargs' en 'argv'.

module.exports = argv; // Exporta 'argv'

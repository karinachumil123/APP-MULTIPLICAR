/*
 * Se agrego la bandero limite
 */

const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base inicial de la tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    //defaull: false, se quita ya que esta defualt en la app principal
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: false, // no es requerido, si no pasa el "hasta" es igual a base
    describe: 'Fin de la tabla que se quiere operar'
  })
  // Se utiliza 't' en lugar de 'li' porque en yargs los alias cortos deben ser de un solo carácter. 
  // 'li' no se puede usar como alias corto (-li) y tendría que invocarse con --li. 
  // Para mantener el alias corto y sencillo, se ha decidido utilizar 't' --tope en lugar de -li o --limite.
  .option('t', {
    alias: 'tope',
    type: 'number',
    demandOption: false,
    describe: 'Hasta donde quiero que todas las tablas lleguen'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //NAN = Not a number
      throw 'La base tiene que ser un numero'
    }
    if (argv.h != null && isNaN(argv.h)) {
      //NAN = Not a number
      throw 'Hasta tiene que ser un numero'
    }
    if (argv.t != null && isNaN(argv.t)) {
      //NAN = Not a number
      throw 'Limite tiene que ser un numero'
    }
    return true; //Esta es la parte mas importante para lanzar la validacion
  })
  .argv


module.exports = argv;

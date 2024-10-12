/**
* Ejercicio - configurar la documentacion de la aplicacion
* para utilizarla se aplica el comando node app14 --help|
* Utilizar el multiplicar4.js que tendra la opcion
* para aceptar de parametro la bandera -l --listar
* Utiliza el YARGS 2 que tiene una modificacion en una
* mejor descripcion en las banderas a la hora de utilizar
* el help
* Se corto toda la lgica de Yargs y se paso a la carpeta que se creo llamada
* "config" dentro de config se creo un archivo llamado yargs.js por lo tanto
* en este archivo app13.js se hace un require a yargs que esta en la carpeta
* antes mencionada.
*/

const { crearArchivo } = require('../04-BASES-NODE/helpers/multiplicar4');
const argv = require('../04-BASES-NODE/config/yargs2')

console.clear();

console.log(argv);


// Llama a la función 'crearArchivo', pasando como argumentos el valor de 'b' (base) y 'l' (listar) desde 'argv'.
// Esta función retorna una promesa, por lo que se utiliza '.then()' para manejar la resolución exitosa.
crearArchivo(argv.b, argv.l) 
  .then(nombreArchivo => console.log(nombreArchivo, 'creado')) // Si la promesa se resuelve, imprime el nombre del archivo creado.
  .catch(err => console.log(err)); // Si ocurre un error, captura el error y lo imprime.




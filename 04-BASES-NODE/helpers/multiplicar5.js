/*
 * Archivo modificado para aceptar el parametro --hasta -h
 * dendtro de la funcion 
 * Se resuelve el problema de los colores
 */

const fs = require('fs');
const colors = require('colors');

/*-
 * Se utiliza el module.exports para dar permiso a este archivo de exportar 
 * crearArchivo hasta el final de este archivo.
 * Aqui esta agregar el listar
 */


const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '', consola = ''
    //Genera la tabla de lo que se envie en la base
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
      consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`
    }

    if (listar) {
      console.log('==========================='.green);
      console.log('         Tabla del:'.green, colors.blue(base));
      console.log('==========================='.green);
      console.log(consola)
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`
  }
  catch {
    throw err
  }
}


module.exports = {
  crearArchivo
}

/*
Este código define una función asíncrona crearArchivo que genera una tabla de multiplicar basada en tres parámetros: 
base, listar, y hasta. La tabla se genera y guarda en un archivo de texto con el nombre tabla-[base].txt. Si el 
parámetro listar es true, la tabla se muestra en la consola con formato de colores. La tabla es calculada desde 1 
hasta el valor de hasta. Si ocurre un error durante la creación del archivo, este se lanza con un throw. Finalmente, 
el archivo generado es retornado como resultado de la función. */
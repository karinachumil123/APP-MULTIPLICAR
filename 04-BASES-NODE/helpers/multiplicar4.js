const fs = require('fs');
const colors = require('colors');

/*
 * Se utiliza el modulo.exports para dar permiso a este archivo de exportar crearArchivo hasta el final de este archivo
 * Aqui esta el listar
 */

/*
 * Se agrego a esta funcion el parametro listar= false por si el usuario no envia la l se sobre entiende
 * que no quiere imprimir
 */

const crearArchivo = async (base = 5, listar = false) => {
  try {
    let salida = '';
    //Genera la tabla de lo que se envie en la base del 1 al 10
    for (let i = 1; i <= 10; i++) {
      salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
    }

    //Si viene el parametro listar es decir existe entonces imprime esto en consola
    //lo que se encuentra acumulado en la variable salida
    if (listar) {
      console.log('===================='.green);
      console.log('     Tabla del: '.green, colors.blue(base));
      console.log('===================='.green);
      console.log(salida)
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida); // Escribe de manera síncrona el contenido de 'salida' (que contiene la tabla de multiplicar) en un archivo de texto llamado 'tabla-[base].txt'. Si el archivo no existe, lo crea; si existe, lo sobrescribe.
    return `tabla-${base}.txt`; // Retorna el nombre del archivo 'tabla-[base].txt' como confirmación de que se ha creado o modificado correctamente.
  }
  catch {
    throw err
  }
}

module.exports = {
  crearArchivo
}

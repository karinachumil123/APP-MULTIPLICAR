const colors = require('colors'); // Importa el módulo 'colors' para dar color a la salida en la consola
const { generarEncabezado, generarFila, generarLineaSeparadora, generarLineaFinal } = require('./tablaDibujar'); // Importa funciones para generar diferentes partes de la tabla

// Función para mostrar una tabla de multiplicar en la consola
const mostrarTablaEnConsola = (tabla) => {
  let salida = ''; // Inicializa una cadena para almacenar la salida formateada
  salida += generarEncabezado().blue; // Agrega el encabezado de la tabla y lo colorea en azul

  // Itera sobre cada multiplicación en la tabla
  tabla.multiplicaciones.forEach((multiplicacion, index) => {
    // Agrega cada fila de la tabla y la colorea en verde
    salida += generarFila(tabla.base, multiplicacion.multiplicador, multiplicacion.resultado).green; 
    if (index < tabla.multiplicaciones.length - 1) {
      // Agrega una línea separadora entre las filas, excepto después de la última
      salida += generarLineaSeparadora().green;
    }
  });

  salida += generarLineaFinal().green; // Agrega la línea final de la tabla
  console.log(salida); // Muestra la tabla en la consola
};

// Función para mostrar múltiples tablas de multiplicar en la consola
const mostrarEnConsola = (tablas) => {
  // Itera sobre cada tabla y llama a mostrarTablaEnConsola para cada una
  tablas.forEach(tabla => mostrarTablaEnConsola(tabla)); 
};

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = {
  mostrarEnConsola
};


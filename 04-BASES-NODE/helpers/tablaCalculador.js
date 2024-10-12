const calcularTablas = (base, hasta, tope) => {
  const tablas = []; // Arreglo que almacenará todas las tablas de multiplicar generadas

  // Bucle para generar tablas de multiplicar desde la base hasta el valor "hasta"
  for (let iBase = base; iBase <= hasta; iBase++) {
    const tabla = {
      base: iBase, // Almacena la base de la tabla de multiplicar actual
      multiplicaciones: [] // Arreglo que contendrá las multiplicaciones individuales para esta base
    };

    // Bucle para calcular las multiplicaciones desde 1 hasta el "tope" especificado
    for (let iTope = 1; iTope <= tope; iTope++) {
      // Agrega una multiplicación (multiplicador y resultado) al arreglo de multiplicaciones
      tabla.multiplicaciones.push({
        multiplicador: iTope, // Valor del multiplicador actual
        resultado: iBase * iTope // Resultado de la multiplicación base * multiplicador
      });
    }

    // Almacena la tabla de multiplicar completa en el arreglo de tablas
    tablas.push(tabla);
  }

  // Devuelve el arreglo que contiene todas las tablas de multiplicar generadas
  return tablas;
};

// Exporta la función para que pueda ser usada en otros archivos
module.exports = {
  calcularTablas
};


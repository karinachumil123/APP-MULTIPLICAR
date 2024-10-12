const { jsPDF } = require('jspdf'); // Importa jsPDF para generar PDFs
require('jspdf-autotable');// Habilita la función de tablas en el PDF
const path = require('path');// Módulo de Node.js para manejar rutas de archivos
const fs = require('fs'); // Módulo de Node.js para manipulación del sistema de archivos

// Función para crear una página del PDF con una tabla de multiplicar
const crearPagina = (doc, tabla) => {
  doc.setFontSize(16); // Establece el tamaño de fuente para el texto del encabezado
  doc.text(`Tabla de multiplicar del ${tabla.base}`, 14, 15); // Agrega el título de la tabla al PDF

  // Define los encabezados de la tabla
  const headers = [['Tabla', 'X', 'Limite', '=', 'Resultado']];

  // Genera las filas de la tabla basándose en los datos de multiplicación
  const data = tabla.multiplicaciones.map(mult => [
    tabla.base.toString(),
    'X',
    mult.multiplicador.toString(),
    '=',
    mult.resultado.toString()
  ]);

  // Genera la tabla en el PDF
  doc.autoTable({
    startY: 20, // Establece la posición inicial en la página
    head: headers, // Define los encabezados de la tabla
    body: data, // Los datos de la tabla (multiplicaciones)
    theme: 'grid', // Define el tema de la tabla (bordes visibles)
    styles: { fontSize: 12, cellPadding: 5 }, // Estilo de la tabla: tamaño de fuente y espacio
    headStyles: { fillColor: [200, 220, 255], textColor: 0, fontStyle: 'bold' }, // Estilo de los encabezados
    alternateRowStyles: { fillColor: [245, 245, 245] } // Estilo de las filas alternadas
  });
};

// Función para crear y guardar el archivo PDF con múltiples tablas de multiplicar
const crearArchivoPDF = (tablas) => {
  const doc = new jsPDF(); // Crea un nuevo documento PDF

  // Itera sobre las tablas y crea una página por cada tabla de multiplicar
  tablas.forEach((tabla, index) => {
    crearPagina(doc, tabla); // Llama a la función para crear una página por cada tabla
    if (index < tablas.length - 1) {
      doc.addPage(); // Añade una nueva página si no es la última tabla
    }
  });

  // Define la ruta donde se guardará el PDF
  const outputDirec = path.join(__dirname, '..', 'salida');

  // Si la carpeta no existe, la crea
  if (!fs.existsSync(outputDirec)) {
    fs.mkdirSync(outputDirec);
  }

  // Genera un nombre de archivo dinámico según las tablas incluidas
  const pdfFileNombre = `tabla-desde-${tablas[0].base}-hasta-${tablas[tablas.length - 1].base}-tope-${tablas[0].multiplicaciones[tablas[0].multiplicaciones.length - 1].multiplicador}.pdf`;

  // Define la ruta completa del archivo PDF
  const pdfArchivoRuta = path.join(outputDirec, pdfFileNombre);

  // Guarda el documento PDF en el sistema de archivos
  doc.save(pdfArchivoRuta);

  return pdfArchivoRuta; // Devuelve la ruta del archivo generado
};

// Exporta la función para que pueda ser utilizada en otros archivos
module.exports = {
  crearArchivoPDF
};
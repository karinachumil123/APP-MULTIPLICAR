console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer Timeout');
}, 3000)

setTimeout(() => {
    console.log('Segundo Tiemout');
}, 0)

setTimeout(() => {
    console.log('Tercer Timeout');
}, 0)

console.log('Fin de programa');
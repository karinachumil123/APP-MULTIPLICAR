//Funcion básica
function sumar (a, b = 0, c = 0){
    return a+b+c;
}

console.log('Uso de funcion basica');
console.log(sumar(10,20,30));
console.log(sumar(10,20));
console.log(sumar(8));

//Funcion Flecha
const sumar2 = (a, b = 0, c=0) => {
    return a + b + c;
}

const sumar3 = (a, b=0) => a + b;

const saludar = () => 'Hola mundo'

console.log('Uso de funcion Flecha');
console.log(sumar2(100,200,300));
console.log(sumar2(200));
console.log(sumar2(500+500));
console.log(sumar2(900));
console.log(saludar());

//Funcion Flecha división 
const dividir1 = (a, b=0 ) => {
    return a / b ;
}

const numero1 =40;
const numero2 =80;

console.log(`Uso de funcion Flecha de dividir: ${numero1} y ${numero2} es ${dividir1}`);
console.log(dividir1(numero1,numero2));



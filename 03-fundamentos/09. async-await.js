const empleados = [
    {
        id: 1,
        nombre: 'Karina'
    },
    {
        id: 2,
        nombre: 'Gela'
    },
    {
        id: 3,
        nombre: 'Antonia'
    },
];

const salarios = [
    {
        id: 3,
        salario: 2000
    },
    {
        id: 2,
        salario: 1500
    },
];
 
const getEmpleado = (id) =>{
    const empleado = empleados.find(e => e.id === id)?.nombre
    
    return new Promise((resolve,reject) =>{
        (empleado)
        ? resolve(empleado) // Si se encuentra el empleado, resuelve con el nombre.
        : reject('No existe el empleado con id ${id}') // Si no, rechaza con un mensaje.
    })
}

const getSalario = (id) =>{
    const salario = salarios.find(s => s.id === id)?.salario

    return new Promise((resolve, reject) => {
        (salario)
        ? resolve(salario)
        : reject(`No existe el salario del empleado id ${id}`)
        
    })
}

const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del mpleado: ${empleado} es de ${salario}`
    } catch (err) {
        throw err
    }
}

const id = 2

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN');
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL');
        console.log(err);
    });
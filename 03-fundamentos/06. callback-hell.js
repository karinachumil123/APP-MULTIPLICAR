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
    }
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id:2,
        salario: 1500
    },
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    if (empleado) {
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`);
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find(s => s.id === id)?.salario

    if (salario) {
        callback(null, salario)
    }else{
        callback(`No existe salario para el empleado con id ${id}`)
    }
    return salario;
}

id = 3

getEmpleado(id,(err, empleado) => {
    if (err) {
        console.log('ERROR!!');
        return console.log(err);
    }

    getSalario(id,(err, salario) =>{
        if (err) {
            return console.log(err);
        }
        console.log('El empleado: ',empleado, 'tiene un salario de: ', salario);
    })
})

// Explicación de Callbacks

console.log('Uno. Inicio del programa');

// Función con setTimeout
setTimeout(function() {
    console.log('Seis. Hola mundo (3 segundos)');
}, 3000);

// Definición de la función getUsusuarioById
const getUsusuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Karina'
    };

    setTimeout(() => {
        console.log('Cuatro. Usuario obtenido:', usuario);
    }, 1500);
};

// Llamada a la función
getUsusuarioById(82);

// Llamada a la función sin callback
getUsusuarioById(200);

// Aplicando Callback
const getUsusuarioById2 = (id, callback) => {
    const user = {
        id,
        nombre: 'Karina'
    };

    setTimeout(() => {
        callback(user);
    }, 1500);
};

// Llamadas a la función getUsusuarioById2
getUsusuarioById2(700, () => {
    console.log('Cinco. hola mundo desde getUsuarioByID2 (700)');
});

// Agregando como argumento el usuario
getUsusuarioById2(650, (usuario) => {
    console.log('Siete. hola mundo desde getUsuarioByID2 (650)');
    console.log('Ocho. ID del usuario:', usuario.id);
    console.log('Nueve. Nombre del usuario:', usuario.nombre.toUpperCase());
});

console.log('Dos. Fin del programa');

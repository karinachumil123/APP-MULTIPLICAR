console.log('1-\n\n-----Uso de función setTimeout con funcion normal dentro');

    setTimeout(function(){
    
    console.log('2-Hola Mundo desde una función normal anónima'); 
}, 3000)

// El problema de esta funcion es que ejecuta todo en la funcion
// Por ejemplo el control de despliegue del tiempo del mensaje deberia ser
// fuera dela funcion.
const getUsuarioById=(id) => {
    const usuario = {
        id,
        nombre: 'Karina'
    }

    setTimeout(() =>{
        console.log(usuario);
    }, 1500)
}

getUsuarioById(82);

// Aca no se esta enviando como argunmento otra funcion pero no se
//esta ejecutando
getUsuarioById(200,() => {
    console.log('hola mundo desde getUsuarioByID');
})

//Apllicando callback
const getUsuarioById2 = (id, callback) => {
    const user = {
        id, 
        nombre: 'Karina'
    }

    setTimeout(() => {
        callback(user);
    }, 1500)
}

getUsuarioById2(700, () => {
    console.log('hola mundo desde getUsuairoByID2');
})

//agregando como argumento el usuario
getUsuarioById2(650,(usuario) => {
    console.log('hola mundo desde getUsuarioByID2');
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})




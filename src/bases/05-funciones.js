const saludar = function( nombre){

return `Hola ${nombre}`;
};

const saludar2 = ( nombre) =>{

    return `Hola ${nombre}`;
    };

    const saludar3 = ( nombre) => `Hola ${nombre}`;
        
console.log( saludar3("Luis") );
console.log( saludar2("Fernando") );


const getUser = () => ({
   
  uid: 'ABC123' ,
  username:'Elpapi1502'
})

const user = getUser;
console.log( user);


//TAREA

const getUsuarioActivo = ( nombre) =>({
  
   uid:'ABC124',
   username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo);
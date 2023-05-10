const persona ={

    nombre:'Tony',
    edad: 45,
    clave: 'Ironman'
};

//const {nombre, edad,clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const useContext =( {clave,nombre,edad, rango= 'Capitan'} )=>{

 //console.log( nombre, edad, rango);

 return{
    nombreclave: clave,
    anios: edad,
    lating: {
        lat:12344,
        long:8322
    }
        
    }
 };



const {anios,nombreclave, lating:{lat, long}} = useContext( persona);


console.log(anios, nombreclave);
console.log(lat, long);
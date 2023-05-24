const personajes = ['Goku','Vegueta','Trunks' ];

const [p1] = personajes;

const restornaArreglo = ()=> {

    return['ABC', 123];

}

const [letras, numeros] = restornaArreglo();

console.log(letras, numeros);

//Tarea

const useaState = (valor)=>{

    return [valor,()=> {console.log('Hola Mundo')}];
}

const [nombre, setaNombre] = useaState('Goku');


console.log(nombre);
setaNombre();
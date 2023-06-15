import { getHeroById } from './bases/08-imp-exp'


//const promesa = new Promise( (resolve, reject)=>{

//setTimeout(()=>{

    //console.log('2 segundos despues');
   
//const heroe = getHeroById(2);
////console.log(heroe);
//resolve(heroe);
//}, 2000)
//
//});
//
//promesa.then((heroe)=>{
//    console.log('El heroe es ', heroe);
//})

//.catch(err=> console.warn( err));

const getHeroByIdAsync = ( id )=>{
 
    return new Promise( (resolve, reject)=>{

        setTimeout(()=>{
        
            //console.log('2 segundos despues');
           
        const p1 = getHeroById(id);
       if (p1){

        resolve(p1);
       }else {
            reject("No se encontro el Hero");

       }
        
        }, 2000)
        
        });

    }

getHeroByIdAsync(1)
    //.then( heroe => console.log( "Heroe", heroe))
    .then(console.log)
    .catch( err => console.warn(err));
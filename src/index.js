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
           
        const heroe = getHeroById(id);
        //console.log(heroe);
        resolve(heroe);
        }, 2000)
        
        });

    }

getHeroByIdAsync(4)
    .then( heroe => console.log( "Heroe", heroe));
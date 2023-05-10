//import {heroes} from './data/heroes';

import heroes, {owners} from './data/heroes';

console.log(heroes);

const getHeroById = (id) => heroes.find( (heroes) => heroes.id === id );

console.log( getHeroById(2));

const getHeroesByOwner = (own) => heroes.filter( (heroes) => heroes.owner===own  );

console.log( getHeroesByOwner('Marvel'));
console.log(owners);
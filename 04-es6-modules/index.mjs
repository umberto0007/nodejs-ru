import {season, temperature} from './named-exports.mjs';
import {isRa, hu} from './inline-exports.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAULT_SERVER, {USERNAME as a, PASSWORD as b} from './mixed-exports.mjs';

console.log(season)
console.log(temperature)

console.log(isRa)
console.log(hu)

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err))

console.log(DEFAULT_SERVER)
console.log(a, b)
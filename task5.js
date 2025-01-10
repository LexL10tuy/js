const prompt = require('prompt-sync')();
let x = prompt('Введите число: ');
if ( x>=0 && x<=10 && (x % 2 == 0)) {
    console.log(`Истина`);
} else {
    console.log(`Ложь`);
}
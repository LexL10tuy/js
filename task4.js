const prompt = require('prompt-sync')();
let x = prompt('Введите число: ');
if ( x>=0 && x<=9) {
    console.log(`Истина`);
}else {
    console.log(`Ложь`);
}
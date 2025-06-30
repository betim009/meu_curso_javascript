const {
    showAllNumbers,
    findNumber,
    getEven,
    getOdd,
    getHigherNumber,
    smallerNumber,
    showEven,
    showOdd,
} = require('./scripts')

// Arrays:
const array = [1, 2, 3, 4, 5, 10, 20, 50, 60, 999];
const array_1 = [1, 1, 1];
const array_2 = [2, 2, 2];

// Chamadas:
// showAllNumbers(array) // Exibe todos os números!
// console.log(findNumber(array, 1));
// console.log(getHigherNumber(array)); // Exibe o maior número do array
// console.log(smallerNumber(array)); // Menor número

// console.log(); // Separação!

const odd = getOdd(array); // retorna ímpar 
const even = getEven(array); // retorna par

console.log(odd);
console.log(even);

console.log(showOdd(odd)); // exibe impar
console.log(showEven(even)); // exibe par
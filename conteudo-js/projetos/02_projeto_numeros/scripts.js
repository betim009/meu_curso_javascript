function showAllNumbers(array) {
    // se não possuir o parametro
    if (!array) {
        return 'not found array'
    };

    // se o parametro não for array
    if (Array.isArray(array)) {
        for (let index = 0; index < array.length; index++) {
            const number = array[index];

            console.log(number);
        }
    } else {
        return 'Not is array';
    };
};

function findNumber(array, number) {
    // se não houver algum dos parametros
    if (!array || !number) {
        return 'not found array or number'
    };

    // se for array e numero
    if (Array.isArray(array) && typeof number === 'number') {
        for (let index = 0; index < array.length; index++) {
            const n = array[index];

            // se forem iguais
            if (number === n) {
                return `O número '${n}' existe no array`;
            };
        };
    };

    return 'Number not found';
};


function getHigherNumber(array) {
    // Se não for array
    if (!Array.isArray(array)) {
        return 'Not is array';
    };

    let higherNumber = 0

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number > higherNumber) {
            higherNumber = number;
        };
    };

    return `O maior número é: ${higherNumber}`;
};

function smallerNumber(array) {
    // se não for array
    if (!Array.isArray(array)) {
        return 'Not is array';
    };

    let smallNumber = array[1]

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number < smallNumber) {
            smallNumber = number
        };
    };

    return `O menor número é: ${smallNumber}`;
};

function getEven(array) {
    // se não for array
    if (!Array.isArray(array)) {
        return 'Not is array';
    };

    let count = 0

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number % 2 === 0) {
            count++
        };
    }
    return count
};

function getOdd(array) {
    // se não for array
    if (!Array.isArray(array)) {
        return 'Not is array';
    };

    let count = 0;

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (number % 2 !== 0) {
            count++
        };
    }
    return count;
};

function showEven(even) {
    // se não houver parametro ou nao for número
    if (!even || typeof even !== 'number') {
        return 'number invalid'
    };

    if (even > 0) {
        return `Resultado de números pares: ${even}`;
    } else {
        return 'Nenhum par encontrado.'
    };
};

function showOdd(odd) {
    // se não houver parametro ou nao for número
    if (!odd || typeof odd !== 'number') {
        return 'number invalid'
    };

    if (odd > 0) {
        return `Resultado de números ímpares: ${odd}`;
    } else {
        return 'Nenhum ímpar encontrado.'
    };
};


module.exports = {
    getEven,
    getOdd,
    showEven,
    showOdd,
    getHigherNumber,
    showAllNumbers,
    smallerNumber,
    findNumber,
}
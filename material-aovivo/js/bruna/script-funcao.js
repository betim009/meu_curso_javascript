/*
    1. Quando usar? 
        R: Sempre. 
        R: Bloco de codigo que pode ser reutilizado. 

    2. Duas maneiras de Criar uma funcao. 
        R: Tradicional, Arrow Function(flecha)

    3. Console nao é retorno. 
        - Console exibe no terminal.
        - Retorno é o resultado da funcao.
*/

// 1. Sintaxe
function name(params) {
    return null
}
// 2. Sintaxe
const nameF = (params) => {
    return null
}
const media = (n1, n2) => {
    // const calcular = (n1 + n2) / 2
    // console.log(calcular) // exibindo dentro da funcao.
    return (n1 + n2) / 2 
}
const mediaFinal = (n1, n2) => (n1 + n2) / 2;
const mediaFinal2 = () => null;

const exemplo = ["A", "B", "C", "D"]

const arrA = exemplo.map(element => element.toLocaleLowerCase()) // Retornar um novo array. 
console.log(arrA)

const arrB = exemplo.forEach((element) => {
    console.log(element)
}) // Para cada elemento, fazer alguma coisa.

const arrC = exemplo.filter((element) => element === "A" || element === "B") // Filtro, que retorna um novo array.
console.log(arrC)
const arrD = exemplo.find((element, index) => {
    return element === "A"
}) // Encontrar elemento, e retornar o elemento.

console.log(arrD)

["M", "N", "O"].map(() => {})
["M", "N", "O"].forEach(() => {})
["M", "N", "O"].filter(() => {})
["M", "N", "O"].find(() => {})



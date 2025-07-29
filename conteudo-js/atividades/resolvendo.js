const { supermercado, produtos } = require("./data");

// 6.1
// for (let index = 0; index < produtos.length; index++) {
//     const element = produtos[index];
    
//     console.log(element.nome)
// }

// 6.2
// produtos.forEach(element => {
//     console.log(element.nome)
// });

// produtos.forEach(element => console.log(element.nome))

// 7.1
// for (let index = 0; index < supermercado.unidades.length; index++) {
//     const element = supermercado.unidades[index];
    
//     console.log(element)
// }

// 7.2
// supermercado.unidades.forEach(element => {
//     console.log(element)
// });

// 8.1
// for (let index = 0; index < produtos.length; index++) {
//     const element = produtos[index];
    
//     console.log(element.preco)
// }

// // 9.1
// produtos.forEach(element => {
//     console.log(`Produto ${element.nome} - ${element.estoque} em estoque`)
// });

// // 10.1
// supermercado.produtos.forEach((element, index) => {
//     console.log(index, element)
// })

// array.forEach(element => {

// })

produtos.forEach((element, index) => {
    console.log(index, element.nome)
})
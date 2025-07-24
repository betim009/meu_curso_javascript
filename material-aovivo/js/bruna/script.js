/*
    Dominar: 

    [ ] Base de daos

    [ ] Lista - Array 
      [ ] - Como acessar um array sem loop
      [ ] - array.length
      [ ] - array.push()

    [ ] Objetos
      [ ] - Como acessar um objeto
      [ ] - Como alterar um valor de uma chave de um objeto
      [ ] - Como criar uma nova chave dentro do objeto
        
    [ ] Condicao - If - Else if - Else / ternario ? : 
      
    [ ] Loops:
        [ ] - For Of
        [ ] - For
        [ ] - ForEach   
        [ ] Element
        [ ] Index   

    [ ] Funcoes:
        [ ] - Declarar / Criar uma funcao
        [ ] - Retorno nao eh console.log
        [ ] - Parametros de uma funcao
        [ ] - Executar uma funcao       
*/

const { hardwares, guitarras, frutas, iphones } = require("./data");

// Cada exercicio seria importante voce conseguir criar um arquivo para ele. 


// Voce precisa praticar como acessar um elemento qualquer da base de dados, exibir, alterar, excluir, ou ate mesmo adicionar. 

console.log("Saida 1", hardwares[0]) // Resgata o primeiro hardware

console.log("")

console.log("Saida 2", hardwares[3]) // Resgata o quarto

console.log("Saida 3", hardwares.length) // Exibe a quantidade de hardwares no array

console.log(hardwares[hardwares.length - 1]) // exibir sempre o ultimo elemento do array

hardwares.push({
    nome: "Mouse Logintech",
    tipo: "Mouse",
    fabricante: "Logintech",
    preco: 360 
}) // Adiciona o objeto dentro do array hardwares

console.log(hardwares) // Exibindo todos

hardwares[hardwares.length - 1].preco = 460 // Alterando o preco de 360 para 460

console.log(hardwares)


const hardware = {
    nome: "Teclado Ryzen 3201", preco: 1200 
}
hardware.nome = "Teclado Ryze 3222"

console.log(hardware) // Exibe o objeto inteiro
console.log(hardware.nome) // exibe o nome do objeto 
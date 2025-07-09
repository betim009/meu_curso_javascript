/*
    Arrays  Simbolo -> [ ] 
    Objetos Simbolo -> { }

    Array eh para armazena varios dados, varios elementos. 

    Ojbetos eh para armazena varios dados de um item, um element. 

    E um estrutura de dado muito utilizada, eh o array de objetos. 
    [
        {},
        {},
        {},
        {}
    ]

    Um array se acessa por posicao -> [0], [1], [2] ...
    Um objeto se acessar por nome da chave, propriedade -> .nome, .idade, .email


    ESTRUTURA DE REPETICAO
    eh para percorrer um array


    For OF 
     Ele eh uma estrutura de repeticao que apenas vai do primeiro ao ultimo elemento do array.

     Pontos positivos:
        * Simples e pratico
        * Sintaxe Facil
     Pontos Negativos:
        * Nao tem controle, de inicio, fim e de quanto em quanto.
        * Ele nao tem index, posicao. 
    

    Funcao
        Eh para reaproveitar codigo. 
        Parametros vao transformar o seu codigo para entregar resultados dinamicos.

        Entao ex: uma funcao que soma dois numeros. Ela sempre vai somar dois numeros, independente do numero. 

        A funcao se CRIA.
        RECEBE PARAMETROS.
        RETORNO NAO EH CONSOLE.

        Executar funcao nao eh exibir resultado.
        Voce deve fazer console, e colocar a execucao da funcao dentro. 
        \/
        console.log(adicionarLivro(parametro))


        Voce esta estudando o CRUD.
        * CRUD -> Criar, Resgatar, Alterar e Deletar

        NOME       ESTUDOU      DOMINOU      
        * CREATE   [X]          []
        * RESGATA  [X]          []    
        * ALTERA []             []
        * DELETA []             []    
*/

// Exemplo de funcao sendo criada e executada de maneira correta.
function somarNumeros(n1, n2) {
  return n1 + n2;
}

const num1 = somarNumeros(4, 40) // Armazenando o resultado da funcao em uma variavel
console.log(num1) // Estou exibindo a variavel

const num2 = somarNumeros(3, 12)
console.log(num2)

console.log(num1 + num2)

// VOCE SO CRIAR FUNCAO COM CONSOLE
// SE SUA INTENSAO NAO FOR SALVA E RETORNAR NENHUMA INFORMACAO

// PRATICA ERRADA:
function sumNumeros(n1, n2) {
    console.log(n1 + n2)
}

const nm1 = sumNumeros(4, 4)
console.log(nm1 + 123)




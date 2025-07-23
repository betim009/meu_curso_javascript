/*
    API -> GARCOM de um RESTAURANTE 
    BANCO DE DADOS -> ESTOQUE DO RESTAURANTE

    REQUISICAO -> Pedido que o cliente faz para o garcom 
    RESPOSTA -> E o que o garcom entrega para o cliente

    RESTAURANTE -> backend
    CLIENTE -> frontend

    ENDERECOS -> CARDAPIO do restaurante 
    Enderecos -> URL -> Rotas -> endpoints

    Exemplo de endereco: https://fakestoreapi.com/products

    Ciclo: 
    REQUSICAO -> ENDERECO -> RESPOSTA
*/


async function getProducts() {
    const URL = "https://fakestoreapi.com/products"

    const req = await fetch(URL)
    const res = await req.json()

    console.log(res)
}

async function getUsers() {
    const URL = "https://fakestoreapi.com/users"

    const req = await fetch(URL)
    const res = await req.json()

    console.log(res)
}

getUsers()
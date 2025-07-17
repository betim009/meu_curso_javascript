const japones = [
  {
    id: 1,
    nome: "Sushi",
    tipo: "peixe",
    preco: 25,
    quantidade: 10,
  },
  {
    id: 2,
    nome: "Tempurá",
    tipo: "frito",
    preco: 20,
    quantidade: 8,
  },
  {
    id: 3,
    nome: "Yakissoba",
    tipo: "macarrão",
    preco: 22,
    quantidade: 12,
  },
  {
    id: 4,
    nome: "Sashimi",
    tipo: "peixe",
    preco: 30,
    quantidade: 6,
  },
  {
    id: 5,
    nome: "Guioza",
    tipo: "carne",
    preco: 18,
    quantidade: 15,
  },
  {
    id: 6,
    nome: "Missoshiru",
    tipo: "sopa",
    preco: 12,
    quantidade: 20,
  },
];

/*
    For possui controle (Incio - fim - percorrer)
    For possui index e element


    Quando usar: 
    - na duvida sempre ele
    - dados gigantes
    - se precisar usar o index
*/
for (let index = 0; index < japones.length; index++) {
  const element = japones[index];

    // 1. Se eu quero exibir todos os objetos
    // console.log(element)

    // 2. Se eu quero exibir dos objetos uma chave/propriedade
    // console.log(element.nome)

    // 3. Se eu quiser exibir index e uma chave do objeto
    // console.log(index, element.nome)
    // console.log(`#${index + 1} Nome: ${element.nome}`)

    // 4. Exibindo 2 chaves
    // console.log(element.nome, element.preco)

    // 5. Filtrando:
    // 5.1 por preco
    // if (element.preco > 23) {
    //     console.log(element)
    // }

    // 5.2 quantidade
    // if (element.quantidade < 10) {
    //     console.log(element.nome, element.quantidade)
    // }
}

/*
    For of nao tem controle
    For of nao tem index

    Quando usar:
    - dados pequenos (< 100)
    - quando so precisar usar o element
*/

for (const element of japones) {
    // console.log(element)   
}
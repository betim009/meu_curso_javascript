let hospedagens = [
    { 
        nome: "Suit Resort da Costa Azul", 
        preco: 320.0,
        cidade: "Rio de janeiro",
        estado: "Rio de janeiro",
        categoria: "Quarto",
        thumb: "https://a0.muscache.com/im/pictures/miso/Hosting-1040937979118936854/original/acee5ae4-25d2-415f-b39f-afbe789d2317.png?im_w=1200"
    },

    
];

let resultado = document.getElementById("resultado")

hospedagens.forEach(element => {
    resultado.innerHTML += `<p>${element.nome}</p>`
});
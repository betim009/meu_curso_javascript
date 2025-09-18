class Usuario {
  constructor(email, password) {
    (this.email = email), (this.password = password);
    this.idade = "";
  }

  calcIdade(dataNasc) {
    return (this.idade = 2025 - dataNasc);
  }
}

const usuarioJason = new Usuario("json@email.com", 123456);
usuarioJason.calcIdade(1995);

const usuarioAlberto = new Usuario("alberto@email.com", 111111)
console.log(usuarioAlberto)

const usuario = {
  email: "",
  password: "",
  idade: function(dataNasc) {
    return this.idade = 2025 - dataNasc
  },
};

const jason = { ...usuario };
jason.email = "json@email.com"
jason.password = "json@email.com"
jason.idade(1995)


console.log(jason)



console.log("Oi")
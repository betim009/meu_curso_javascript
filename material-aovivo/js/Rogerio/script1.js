const pokemons = [
  {
    nome: "squirtle",
    tipo: "agua",
    vantagem1: "fogo",
    vantagem2: "pedra",
    desvantagem1: "eletrico",
    desvantagem2: "planta",
  },
  {
    nome: "charmander",
    tipo: "fogo",
    vantagem1: "planta",
    vantagem2: "inseto",
    desvantagem1: "agua",
    desvantagem2: "pedra",
  },
  {
    nome: "bulbasaur",
    tipo: "planta",
    vantagem1: "agua",
    vantagem2: "terra",
    desvantagem1: "fogo",
    desvantagem2: "gelo",
  },
  {
    nome: "pikachu",
    tipo: "eletrico",
    vantagem1: "agua",
    vantagem2: "voador",
    desvantagem1: "terra",
    desvantagem2: "pedra",
  },
  {
    nome: "onix",
    tipo: "pedra",
    vantagem1: "fogo",
    vantagem2: "eletrico",
    desvantagem1: "agua",
    desvantagem2: "planta",
  },
  {
    nome: "butterfree",
    tipo: "inseto",
    vantagem1: "planta",
    vantagem2: "psiquico",
    desvantagem1: "fogo",
    desvantagem2: "pedra",
  },
];

// ================= EXERCÍCIOS (Tipos de dados + Condições) =================
// Regras: usar a base de dados `pokemons` acima.
// Não é permitido usar estruturas de repetição (for, while, etc.) nem funções.
// Use apenas acesso direto aos índices do array, operadores e condicionais.

// 1) Verifique se o tipo do primeiro pokemon é "agua". Se for, exiba "Primeiro é aquático".
// 2) Compare o tipo do segundo pokemon com "fogo" e exiba "É de fogo" ou "Não é de fogo".
// 3) Crie uma condicional que verifique se o tipo do terceiro pokemon é diferente de "eletrico".
// 4) Se o segundo pokemon tiver vantagem1 igual a "planta", exiba "Tem vantagem contra planta".
// 5) Verifique se o tipo do quarto pokemon é "eletrico" E a vantagem2 é "voador". Exiba uma mensagem adequada.
// 6) Mostre "Tem fraqueza contra agua" se o pokemon de índice 4 (onix) tiver desvantagem1 igual a "agua".
// 7) Se o primeiro pokemon tiver desvantagem2 igual a "planta", exiba "Cuidado com plantas!".
// 8) Compare a vantagem1 do sexto pokemon com a desvantagem1 do primeiro. Se forem iguais, exiba "Mesmo tipo detectado".
// 9) Crie uma condicional para verificar se o tipo do quinto pokemon NÃO é "inseto". Exiba uma mensagem informando o resultado.
// 10) Se o tipo do sexto pokemon for "inseto" OU "planta", exiba "É um pokemon de tipo frágil contra fogo".
//
// ========================================================================



// ================= EXERCÍCIOS 11–30 (Apenas LOOPS, sem condicionais) =================
// Regras: use somente loops (`for`, `for...of`, `while`, `forEach`) para percorrer
// e construir resultados. Não use `if`, `switch` ou operador ternário.
// Dica: crie variáveis auxiliares antes do loop (ex.: `let res = []`, `let soma = 0`).

// 11) Percorra `pokemons` e preencha um array `nomes` apenas com `nome` de cada item (ordem original).
// 12) Construa uma string `listaNomes` com todos os nomes separados por vírgula e espaço.
// 13) Crie um array `tipos` contendo o `tipo` de cada pokemon, na mesma ordem.
// 14) Monte um array `paresNomeTipo` no formato: [ [nome, tipo], [nome, tipo], ... ].
// 15) Usando um loop, incremente um contador `qtd` para medir quantos pokemons existem (sem usar `length` fora do cabeçalho do loop).
// 16) Some em `totalLetras` a quantidade de caracteres de todos os `nome`.
// 17) Crie um array `vantagensPrimarias` contendo apenas `vantagem1` de cada pokemon.
// 18) Crie um array `fraquezasPrimarias` contendo apenas `desvantagem1` de cada pokemon.
// 19) Copie todos os objetos de `pokemons` para um novo array `copia`, usando um loop (shallow copy).
// 20) Construa um novo array `resumo` contendo objetos no formato `{ nome, fraqueza: desvantagem1 }`.
// 21) Preencha um array `indices` com os valores 0,1,2,... até `pokemons.length - 1` usando um loop.
// 22) Construa uma string `nomesReverso` com os nomes em ordem invertida, percorrendo com um loop decrescente.
// 23) Crie uma matriz `tabela` onde cada linha é `[nome, vantagem1, vantagem2]`.
// 24) Monte um array `intercalado` no formato: [nome, tipo, nome, tipo, ...] para todos os pokemons.
// 25) Crie um novo array `duplicados` contendo cada pokemon duas vezes seguidas (A, A, B, B, C, C...).
// 26) Gere um array `todasVantagens` juntando `vantagem1` e `vantagem2` de todos (duas inserções por item, sem testar nada).
// 27) Preencha um array `tamanhoNomes` com o tamanho (`length`) do `nome` de cada pokemon.
// 28) Usando `while`, percorra a lista e preencha `nomesMaiusculos` com os `nome` em caixa alta.
// 29) Usando `for...of`, crie um array `legendas` no formato `"<nome>: <tipo>"` para cada pokemon.
// 30) Usando `forEach`, preencha um `Map` chamado `mapaTipos` onde a chave é `nome` e o valor é `tipo`.
// =============================================================================

// ================= EXERCÍCIOS 31–45 (LOOPS com CONDICIONAIS) =================
// Regras: use loops (`for`, `for...of`, `while`, `forEach`) combinados com condicionais (`if`, `else if`, `else`).
// Pode usar operadores lógicos e comparação livremente.

// 31) Percorra `pokemons` e exiba apenas os nomes dos que têm `tipo` igual a "agua".
// 32) Crie um array `soFogo` com todos os pokemons cujo `tipo` seja "fogo".
// 33) Conte quantos pokemons têm `vantagem1` igual a "planta".
// 34) Monte um array `fraquezaPedra` com os nomes que têm `desvantagem2` igual a "pedra".
// 35) Usando `for`, crie um array `multiplosTipos` com os pokemons cujo `tipo` não seja "eletrico" nem "fogo".
// 36) Construa uma string `nomesAgua` com nomes separados por vírgula de todos os pokemons do tipo "agua".
// 37) Calcule `somaLetrasFogo` com o total de letras dos nomes dos pokemons do tipo "fogo".
// 38) Usando `for...of`, preencha um array `fortesContraAgua` com nomes que tenham `vantagem1` ou `vantagem2` igual a "agua".
// 39) Crie um array `naoInseto` com todos os pokemons cujo `tipo` não seja "inseto".
// 40) Monte uma string `nomesFraquezaFogo` listando nomes com `desvantagem1` ou `desvantagem2` igual a "fogo".
// 41) Usando `while`, crie um array `nomesCurto` com nomes que tenham menos de 8 caracteres.
// 42) Preencha um array `fraquezasAguaOuPlanta` com todos os pokemons que tenham pelo menos uma desvantagem igual a "agua" ou "planta".
// 43) Usando `forEach`, crie um array `tipoComNome` no formato `"<tipo>: <nome>"` apenas para pokemons do tipo "pedra".
// 44) Percorra `pokemons` e crie um objeto `quantidadePorTipo` onde cada chave é um tipo e o valor é a quantidade de pokemons com esse tipo.
// 45) Usando `for...of`, crie dois arrays: `temVantagemEletrico` e `naoTemVantagemEletrico`, separando com base se `vantagem1` ou `vantagem2` é "eletrico".
// =============================================================================

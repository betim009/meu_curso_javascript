# Classes em JavaScript: Um Guia Completo

## Introdução às Classes

As Classes em JavaScript foram introduzidas no ECMAScript 2015 (ES6) e trouxeram uma forma mais clara e orientada a objetos para criar e trabalhar com objetos. Embora JavaScript seja fundamentalmente baseado em protótipos, as classes oferecem uma sintaxe mais familiar para programadores vindos de outras linguagens orientadas a objetos.

## O que são Classes?

Uma classe em JavaScript é um **_template_** para criar objetos. Ela encapsula dados e comportamentos que definem um tipo de objeto. Em outras palavras, **uma classe não é um objeto em si, mas sim uma forma de criar objetos**.

## Sintaxe Básica

Para declarar uma classe, usamos a palavra-chave reservada `class` seguida pelo nome da classe. Por convenção, os nomes de classes começam com letra maiúscula.

```javascript
class NomeDaClasse {
    constructor() {
        // Inicialização de propriedades
    }
    
    // Métodos da classe
}
```

## O Construtor

O método `constructor()` é um método especial dentro de uma classe:

- É executado automaticamente quando uma nova instância da classe é criada
- É usado para inicializar as propriedades do objeto
- Se você não definir um construtor, JavaScript adicionará um construtor vazio automaticamente
- Dentro do construtor, a palavra-chave `this` se refere à instância que está sendo criada

## Criando uma Classe Simples

Vamos criar uma classe básica para representar um usuário:

```javascript
class Usuario {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
```

Neste exemplo, definimos uma classe `Usuario` com duas propriedades: `name` e `email`. Os parâmetros do construtor são como parâmetros de função, mas em um contexto orientado a objetos.

## Instanciando Objetos

Para criar um objeto a partir de uma classe, usamos o operador `new`:

```javascript
const alberto = new Usuario("Alberto", "albertodev@email.com");
const lebron = new Usuario("Lebron James", "lakers@email.com");

console.log(alberto); // Usuario { name: 'Alberto', email: 'albertodev@email.com' }
console.log(lebron);  // Usuario { name: 'Lebron James', email: 'lakers@email.com' }

// Acessando propriedades específicas
console.log(alberto.email); // albertodev@email.com
```

Quando usamos `new Usuario()`, estamos:
1. Criando um novo objeto vazio
2. Vinculando `this` a esse objeto
3. Executando o código do construtor com os argumentos fornecidos
4. Retornando o objeto criado

## Métodos de Classe

Os métodos são funções definidas dentro de uma classe que representam comportamentos que os objetos daquela classe podem executar.

### Sintaxe para Definir Métodos:

```javascript
class ClassName {
    constructor() { 
        // Inicialização
    }
    
    metodo1() { 
        // Código do método 1
    }
    
    metodo2() { 
        // Código do método 2
    }
}
```

### Exemplo com Métodos:

```javascript
class User {
    constructor(name, email, anoNascimento) {
        this.name = name;
        this.email = email;
        this.anoNascimento = anoNascimento;
    }
    
    // Método para calcular a idade do usuário
    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoNascimento;
    }
    
    // Método para retornar informações do usuário
    getInfo() {
        return {
            nome: this.name,
            email: this.email,
            idade: this.calcularIdade()
        };
    }
}

// Criando instâncias
const marcelo = new User("Marcelo J.", "marcelo@email.com", 1998);
const maria = new User("Maria A.", "maria@email.com", 2010);

// Chamando métodos
console.log(marcelo.calcularIdade()); // 27 (em 2025)
console.log(maria.getInfo()); 
// { nome: 'Maria A.', email: 'maria@email.com', idade: 15 }
```

## Recursos Avançados de Classes

### 1. Herança

**O que é:**
A herança é um mecanismo pelo qual uma classe pode herdar propriedades e métodos de outra classe. A classe que herda é chamada de "classe filha" ou "subclasse", enquanto a classe da qual ela herda é chamada de "classe pai" ou "superclasse".

**Palavra-chave `extends`:**
A palavra-chave `extends` é usada para criar uma classe que herda de outra classe. Ela estabelece uma relação "é um" entre as classes.

**Palavra-chave `super`:**
A palavra-chave `super` é usada para:
- Chamar o construtor da classe pai usando `super()`
- Acessar métodos da classe pai usando `super.metodo()`

**Quando usar:**
- Quando você tem uma classe que é uma versão especializada de outra classe
- Quando você quer reutilizar código entre classes semelhantes
- Quando existe uma relação hierárquica clara entre entidades

**Vantagens:**
- Reutilização de código
- Organização hierárquica de classes
- Permite polimorfismo (capacidade de tratar objetos de diferentes subclasses como objetos da superclasse)

**Exemplo:**

```javascript
class Admin extends User {
    constructor(name, email, anoNascimento, permissionLevel) {
        // Chama o construtor da classe pai
        super(name, email, anoNascimento);
        this.permissionLevel = permissionLevel;
    }
    
    // Método específico de Admin
    canEdit() {
        return this.permissionLevel >= 2;
    }
    
    // Sobrescrevendo um método da classe pai
    getInfo() {
        // Obtém o objeto retornado pelo método da classe pai
        const baseInfo = super.getInfo();
        // Adiciona informações específicas da classe Admin
        return {
            ...baseInfo,
            permissao: this.permissionLevel,
            podeEditar: this.canEdit()
        };
    }
}

const adminUser = new Admin("Admin", "admin@example.com", 1990, 3);
console.log(adminUser.calcularIdade()); // Método herdado da classe pai
console.log(adminUser.canEdit()); // true
console.log(adminUser.getInfo()); // Método sobrescrito
```

### 2. Métodos Estáticos

**O que são:**
Métodos estáticos são métodos que pertencem à própria classe, não às instâncias da classe. Eles não podem acessar ou modificar propriedades de instâncias e não têm acesso à palavra-chave `this` no contexto de uma instância.

**Palavra-chave `static`:**
A palavra-chave `static` define um método estático para uma classe.

**Quando usar:**
- Para funções utilitárias relacionadas à classe que não dependem de instâncias específicas
- Para métodos de fábrica que criam instâncias de uma determinada forma
- Para operações que são conceitualmente ligadas à classe, mas não a nenhuma instância específica

**Vantagens:**
- Não precisam de instâncias para serem chamados
- Economizam memória (não são duplicados em cada instância)
- Permitem organizar funções utilitárias de forma lógica dentro da classe a que pertencem

**Exemplo:**

```javascript
class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
        this.total = 0;
    }
    
    adicionarItem(produto, quantidade, preco) {
        this.itens.push({ produto, quantidade, preco });
        this.calcularTotal();
    }
    
    calcularTotal() {
        this.total = this.itens.reduce((soma, item) => {
            return soma + (item.quantidade * item.preco);
        }, 0);
    }
    
    // Métodos estáticos - não dependem de uma instância específica
    
    static calcularFrete(valorCompra, distancia) {
        // Base: R$ 10,00 + R$ 1,00 por km para cada R$ 100,00 em compras
        const taxa = Math.ceil(valorCompra / 100);
        return 10 + (distancia * taxa);
    }
    
    static calcularDesconto(valorCompra, cupom) {
        const descontos = {
            "BEMVINDO10": 0.1,  // 10% de desconto
            "ANIVERSARIO": 0.15, // 15% de desconto
            "BLACKFRIDAY": 0.25  // 25% de desconto
        };
        
        if (cupom in descontos) {
            return valorCompra * descontos[cupom];
        }
        
        // Desconto padrão por valor de compra
        if (valorCompra > 1000) return valorCompra * 0.05;
        if (valorCompra > 500) return valorCompra * 0.03;
        return 0;
    }
    
    static criarCarrinhoComProdutoRecomendado() {
        const carrinho = new CarrinhoDeCompras();
        carrinho.adicionarItem("Produto Recomendado", 1, 29.90);
        return carrinho;
    }
}

// Utilizando os métodos estáticos sem criar uma instância
const valorFrete = CarrinhoDeCompras.calcularFrete(350, 15);
console.log(`Valor do frete: R$ ${valorFrete.toFixed(2)}`); // Valor do frete: R$ 55.00

const valorDesconto = CarrinhoDeCompras.calcularDesconto(500, "BEMVINDO10");
console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`); // Desconto: R$ 50.00

// Criando um carrinho que já vem com um produto recomendado
const carrinhoComRecomendacao = CarrinhoDeCompras.criarCarrinhoComProdutoRecomendado();
console.log(carrinhoComRecomendacao.total); // 29.90
```

### 3. Getters e Setters

**O que são:**
Getters e setters são métodos especiais que permitem controlar o acesso e a modificação de propriedades de uma classe. Eles permitem que você execute código quando uma propriedade é acessada ou modificada.

**Palavras-chave `get` e `set`:**
- `get`: Define um método getter que é executado quando uma propriedade é acessada
- `set`: Define um método setter que é executado quando uma propriedade é modificada

**Quando usar:**
- Para validar valores antes de atribuí-los a propriedades
- Para calcular valores dinamicamente quando uma propriedade é acessada
- Para aplicar transformações ao ler ou definir valores
- Para encapsular a lógica interna de uma classe

**Vantagens:**
- Controle sobre o acesso e modificação de propriedades
- Validação de dados
- Cálculos sob demanda
- Encapsulamento melhorado

**Exemplo:**

```javascript
class Conta {
    constructor(titular, saldoInicial) {
        this._titular = titular;
        this._saldo = saldoInicial;
        this._historicoTransacoes = [];
    }
    
    // Getter - Acessado como uma propriedade: conta.saldo
    get saldo() {
        return `R$ ${this._saldo.toFixed(2)}`;
    }
    
    // Setter - Atribuído como uma propriedade: conta.saldo = 1500
    set saldo(valor) {
        // Validação: não permite valores negativos
        if (valor < 0) {
            console.log("Não é possível definir saldo negativo");
            return;
        }
        
        // Registra a alteração no histórico
        this._historicoTransacoes.push({
            tipo: "alteração de saldo",
            de: this._saldo,
            para: valor,
            data: new Date()
        });
        
        this._saldo = valor;
    }
    
    // Getter que calcula um valor dinamicamente
    get saldoEmDolar() {
        const taxaCambio = 5.0; // Taxa hipotética
        return `$${(this._saldo / taxaCambio).toFixed(2)}`;
    }
    
    // Getter para histórico (somente leitura)
    get historicoTransacoes() {
        // Retorna uma cópia para evitar modificação direta
        return [...this._historicoTransacoes];
    }
}

const minhaConta = new Conta("João", 1000);
console.log(minhaConta.saldo); // R$ 1000.00
console.log(minhaConta.saldoEmDolar); // $200.00

minhaConta.saldo = 1500;
console.log(minhaConta.saldo); // R$ 1500.00

// Tentativa de definir um saldo negativo
minhaConta.saldo = -500; // "Não é possível definir saldo negativo"

// Verificar o histórico
console.log(minhaConta.historicoTransacoes);
```

### 4. Propriedades e Métodos Privados

**O que são:**
Propriedades e métodos privados são membros de uma classe que só podem ser acessados de dentro da própria classe. Eles não são acessíveis externamente, o que ajuda a encapsular detalhes de implementação.

**Palavra-chave `#` (hash):**
O símbolo `#` é usado para declarar e acessar propriedades e métodos privados. Esta é uma adição relativamente recente ao JavaScript (ES2022).

**Quando usar:**
- Para ocultar detalhes de implementação que não devem ser acessados fora da classe
- Para evitar que o estado interno de um objeto seja modificado indevidamente
- Para criar API's mais estáveis e previsíveis

**Vantagens:**
- Encapsulamento verdadeiro (não apenas por convenção)
- Redução de acoplamento entre classes
- Liberdade para alterar implementações internas sem quebrar código externo
- Prevenção de uso incorreto de propriedades internas

**Exemplo:**

```javascript
class Pessoa {
    // Propriedade privada
    #senha;
    #registroAcesso;
    
    constructor(nome, senha) {
        this.nome = nome; // Propriedade pública
        this.#senha = senha; // Propriedade privada
        this.#registroAcesso = [];
    }
    
    // Método privado
    #metodoPrivado() {
        return "Este método é privado";
    }
    
    #registrarAcesso(sucesso) {
        this.#registroAcesso.push({
            data: new Date(),
            sucesso
        });
    }
    
    // Método público que usa métodos e propriedades privadas
    verificarSenha(tentativa) {
        const resultadoVerificacao = this.#senha === tentativa;
        this.#registrarAcesso(resultadoVerificacao);
        
        if (resultadoVerificacao) {
            console.log(this.#metodoPrivado());
        }
        
        return resultadoVerificacao;
    }
    
    // Método público que retorna informações sobre acessos
    obterEstatisticasAcesso() {
        const total = this.#registroAcesso.length;
        const sucessos = this.#registroAcesso.filter(reg => reg.sucesso).length;
        const falhas = total - sucessos;
        
        return {
            total,
            sucessos,
            falhas,
            taxaSucesso: total > 0 ? (sucessos / total) * 100 : 0
        };
    }
}

const pessoa = new Pessoa("Ana", "123456");
console.log(pessoa.nome); // Ana
// console.log(pessoa.#senha); // Erro: propriedade privada não pode ser acessada fora da classe
// pessoa.#metodoPrivado(); // Erro: método privado não pode ser acessado fora da classe

console.log(pessoa.verificarSenha("senha-errada")); // false
console.log(pessoa.verificarSenha("123456")); // true + "Este método é privado"

console.log(pessoa.obterEstatisticasAcesso());
// { total: 2, sucessos: 1, falhas: 1, taxaSucesso: 50 }
```

### 5. Campos de Classe

**O que são:**
Campos de classe são uma maneira de declarar propriedades diretamente na classe, fora do construtor. Eles podem ser públicos ou privados e podem ter valores iniciais.

**Sintaxe:**
Os campos de classe são declarados diretamente no corpo da classe, sem usar `this`.

**Quando usar:**
- Para declarar propriedades com valores padrão
- Para declarar propriedades que sempre devem existir em instâncias da classe
- Para documentar claramente todas as propriedades de uma classe

**Vantagens:**
- Código mais claro e organizado
- Declaração de todas as propriedades em um só lugar
- Valores padrão definidos na própria classe

**Exemplo:**

```javascript
class Produto {
    // Campos públicos
    nome;
    preco;
    
    // Campo público com valor inicial
    disponivel = true;
    
    // Campo privado com valor inicial
    #codigo = Math.random().toString(36).substring(2, 10);
    
    // Campos estáticos
    static contador = 0;
    static #instancias = [];
    
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        Produto.contador++;
        Produto.#instancias.push(this);
    }
    
    get codigo() {
        return this.#codigo;
    }
    
    static listarInstancias() {
        return Produto.#instancias.map(p => p.nome);
    }
}

const p1 = new Produto("Notebook", 3500);
const p2 = new Produto("Smartphone", 1800);

console.log(p1.disponivel); // true
console.log(p1.codigo); // um código aleatório
console.log(Produto.contador); // 2
console.log(Produto.listarInstancias()); // ["Notebook", "Smartphone"]
```

## Boas Práticas com Classes

1. **Nomes claros**: Use nomes significativos para suas classes e métodos
2. **Responsabilidade única**: Cada classe deve ter uma única responsabilidade
3. **Encapsulamento**: Oculte detalhes de implementação usando propriedades privadas
4. **Imutabilidade**: Considere criar objetos imutáveis quando apropriado
5. **Documentação**: Documente o propósito de cada classe e método

## Exercício Prático

A seguir, você encontrará um exercício para praticar o uso de classes em JavaScript. Tente resolver o exercício e depois confira o gabarito fornecido.

## Conclusão

As classes em JavaScript fornecem uma sintaxe clara e orientada a objetos para criar e trabalhar com objetos, tornando seu código mais organizado e fácil de entender. Elas são especialmente úteis para modelar entidades do mundo real e implementar conceitos de programação orientada a objetos como encapsulamento, herança e polimorfismo.
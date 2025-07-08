# Objetos em JavaScript

## O que são Objetos?

Objetos em JavaScript são estruturas de dados que permitem armazenar coleções de pares de **chave-valor**. Eles representam entidades do mundo real ou conceitos abstratos agrupando propriedades relacionadas em uma única unidade.

Um objeto pode ser visto como um "recipiente" que contém informações (dados) e comportamentos (funções). Semelhante a objetos do mundo real que possuem características e ações que podem realizar.

### Por que Objetos são importantes?

- **Organização**: Objetos agrupam dados relacionados, mantendo seu código organizado e mais fácil de entender
- **Reutilização**: Facilitam a reutilização de código e dados em diferentes partes do programa
- **Representação do mundo real**: Modelam entidades do mundo real de forma intuitiva (como pessoas, produtos, contas)
- **Flexibilidade**: Podem ser criados, modificados e expandidos dinamicamente durante a execução do programa
- **Base para POO**: São fundamentais para Programação Orientada a Objetos em JavaScript

### Quando usar Objetos?

Use objetos quando precisar:

- Agrupar características relacionadas de uma entidade (ex.: dados de um usuário)
- Organizar informações complexas com estrutura hierárquica
- Passar múltiplos valores como um único argumento para funções
- Armazenar dados que precisam ser acessados por nomes (chaves) em vez de índices numéricos
- Implementar registros ou estruturas de dados personalizadas
- Representar conceitos do domínio da aplicação (como clientes, produtos, pedidos)

## 1. Criando e Acessando Objetos

Em JavaScript, um objeto é criado usando chaves `{}` e consiste em pares de chave-valor, onde as chaves são strings (ou identificadores) e os valores podem ser de qualquer tipo de dados.

```javascript
// Definindo um objeto básico
const pessoa = {
    nome: 'Alberto',
    idade: 27,
    altura: 1.80,
};

// Acessando propriedades de um objeto
console.log(pessoa.nome);      // Alberto
console.log(pessoa['idade']);  // 27
```

Existem duas maneiras de acessar propriedades:
- **Notação de ponto** (`objeto.propriedade`): Mais limpa e direta quando você conhece o nome da propriedade
- **Notação de colchetes** (`objeto['propriedade']`): Útil quando o nome da propriedade está em uma variável ou contém caracteres especiais

## 2. Objetos Aninhados (Nested Objects)

Objetos podem conter outros objetos como valores, criando estruturas hierárquicas de dados.

```javascript
// Objeto com outro objeto dentro
const account = {
    agency: '0975',
    bank: {
        cod: '012',
        id: 4,
        name: 'TrybeBank',
    },
};

// Acessando objetos aninhados
const bank = account.bank;

console.log(account.bank);    // { cod: '012', id: 4, name: 'TrybeBank' }
console.log(account['bank']); // { cod: '012', id: 4, name: 'TrybeBank' }
console.log(bank);            // { cod: '012', id: 4, name: 'TrybeBank' }
```

Objetos aninhados são perfeitos para representar relacionamentos hierárquicos ou agrupamentos lógicos de dados relacionados.

## 3. Objetos com Múltiplos Níveis

Podemos ter vários níveis de aninhamento para representar estruturas de dados complexas.

```javascript
// Objeto com vários níveis de aninhamento
const user = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    info: {
        name: 'Jake',
        lastName: 'Peralta',
        address: {
            street: 'Rua Dalvo Trombeta, 357 - Fundos',
            district: 'Xererê',
            city: 'Santana do Livramento',
            state: 'Rio Grande do Norte',
        },
    },
};

// Diferentes formas de acessar as propriedades
console.log(user['id']);                    // 99
console.log(user.email);                    // jakeperalta@gmail.com
console.log(user.info.address.street);      // Rua Dalvo Trombeta, 357 - Fundos
console.log(user['info']['address']['city']); // Santana do Livramento
```

Use objetos com múltiplos níveis quando precisar organizar informações em categorias e subcategorias, como dados de usuário que incluem informações pessoais, endereço, preferências, etc.

## 4. Arrays de Objetos

Arrays podem conter objetos, permitindo armazenar coleções de entidades semelhantes.

```javascript
// Array contendo múltiplos objetos
const residents = [
    {
        name: 'Luíza',
        lastName: 'Guimarães',
        floor: 10,
        apartment: 1005,
    },
    {
        name: 'William',
        lastName: 'Albuquerque',
        floor: 5,
        apartment: 502,
    },
    {
        name: 'Murilo',
        lastName: 'Ferraz',
        floor: 8,
        apartment: 804,
    },
    {
        name: 'Zoey',
        lastName: 'Brooks',
        floor: 1,
        apartment: 101,
    },
];

// Acessando objetos no array
// Primeiro elemento:
firstElement = residents[0];
console.log(residents[0]);  // { name: 'Luíza', lastName: 'Guimarães', floor: 10, apartment: 1005 }

// Último elemento:
lastElement = residents[residents.length - 1];
console.log(residents[residents.length - 1]);  // { name: 'Zoey', lastName: 'Brooks', floor: 1, apartment: 101 }

// Iterando sobre array de objetos
for (let index = 0; index < residents.length; index++) {
    const element = residents[index];
    console.log(element);
}
```

Arrays de objetos são ideais para:
- Listas de usuários, produtos ou entidades similares
- Dados tabulares (como resultados de consultas a bancos de dados)
- Coleções de itens com propriedades consistentes

## 5. Adicionando e Alterando Propriedades

Objetos em JavaScript são dinâmicos - propriedades podem ser adicionadas, modificadas ou removidas a qualquer momento.

```javascript
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
};

// Adicionando propriedade com notação de ponto
customer.lastName = 'Faria';
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', lastName: 'Faria' }

// Alterando propriedade com notação de colchetes
customer['lastName'] = 'Silva';
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', lastName: 'Silva' }
```

A capacidade de modificar objetos dinamicamente torna o JavaScript muito flexível, permitindo adaptar estruturas de dados conforme necessário durante a execução do programa.

## 6. Adicionando Propriedades Através de Função

Podemos criar funções utilitárias para modificar objetos de forma consistente.

```javascript
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
    // birthPlace: '',
};

// Criação da função
const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    }
};

// Chamada da função passando os valores dos parâmetros
addProperty(customer, 'birthPlace', '19/07/1932');

// Exibe o objeto transformado
console.log(customer);  // { firstName: 'Roberto', age: 22, job: 'Software Engineer', birthPlace: '19/07/1932' }
```

Funções como esta são úteis quando:
- Precisamos aplicar a mesma lógica para modificar vários objetos
- Queremos validações antes de adicionar propriedades
- Estamos encapsulando lógica de modificação para tornar o código mais limpo

### Exercício: Adicionando Múltiplas Propriedades

```javascript
// Adicione as propriedades email, fone, userGithub e linkedIn
// ao objeto customer, chamando a função addProperty.

const customer = {
    firstName: 'Alberto',
    age: 27,
    job: 'Software Engineer',
    birthPlace: '09/07/1995',
};

const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined") {
        object[key] = value;
    };
};

addProperty(customer, 'email', 'alberto@gmail.com');
addProperty(customer, 'fone', '99999-9999');
addProperty(customer, 'userGithub', 'bebeto-js');
addProperty(customer, 'linkedIn', 'https://linkedin.com/bebeto-js');

// Exibe o objeto transformado
console.log(customer);
/* Resultado:
{
  firstName: 'Alberto',
  age: 27,
  job: 'Software Engineer',
  birthPlace: '09/07/1995',
  email: 'alberto@gmail.com',
  fone: '99999-9999',
  userGithub: 'bebeto-js',
  linkedIn: 'https://linkedin.com/bebeto-js'
}
*/
```

## 7. Métodos de Objetos: Keys, Values e Entries

JavaScript oferece métodos integrados para trabalhar com objetos, facilitando o acesso e manipulação de suas propriedades.

```javascript
// Objeto de exemplo
const product = {
    name: 'Ruffles Original - 76g',
    price: 8.59,
    company: 'Elma Chips',
    nutritionInfo: {
        carbohydrates: 12,
        sugar: 0,
        sodium: 129,
    }
};

// 1. Object.keys() - Retorna um array com as chaves do objeto
console.log(Object.keys(product)); 
// [ 'name', 'price', 'company', 'nutritionInfo' ]

// 2. Object.values() - Retorna um array com os valores do objeto
console.log(Object.values(product));
/*
[
  'Ruffles Original - 76g',
  8.59,
  'Elma Chips',
  { 
    carbohydrates: 12, 
    sugar: 0, 
    sodium: 129 
  }
]
*/

// 3. Object.entries() - Retorna um array de arrays [chave, valor]
console.log(Object.entries(product));
/*
[
  [ 'name', 'Ruffles Original - 76g' ],
  [ 'price', 8.59 ],
  [ 'company', 'Elma Chips' ],
  [ 'nutritionInfo', { carbohydrates: 12, sugar: 0, sodium: 129 } ]
]
*/
```

Estes métodos são fundamentais para:
- Iterar sobre as propriedades de um objeto
- Transformar objetos em outros formatos
- Verificar se certas propriedades existem
- Copiar ou clonar objetos
- Processar dados em formato de objeto

## Usos Comuns de Objetos em Aplicações Reais

1. **Armazenamento de dados de usuário**:
   ```javascript
   const user = {
     id: 123,
     name: 'Maria',
     permissions: ['read', 'write'],
     preferences: {
       theme: 'dark',
       notifications: true
     }
   };
   ```

2. **Configurações de aplicação**:
   ```javascript
   const appConfig = {
     apiUrl: 'https://api.example.com',
     timeout: 3000,
     retryAttempts: 3,
     debug: false
   };
   ```

3. **Mapeamento de dados**:
   ```javascript
   const countryCodeMap = {
     'BR': 'Brasil',
     'US': 'Estados Unidos',
     'PT': 'Portugal',
     'JP': 'Japão'
   };
   
   console.log(countryCodeMap['BR']); // Brasil
   ```

4. **Caching de dados**:
   ```javascript
   const userDataCache = {
     'user_123': { name: 'João', lastAccess: '2023-04-15' },
     'user_456': { name: 'Ana', lastAccess: '2023-04-10' }
   };
   ```

## Conclusão

Objetos são uma das estruturas de dados mais versáteis e poderosas em JavaScript. Eles permitem representar dados complexos de forma organizada e intuitiva. Ao dominar a criação, acesso e manipulação de objetos, você estará preparado para desenvolver aplicações JavaScript mais sofisticadas e bem estruturadas.

Lembre-se de que objetos são referências em JavaScript, ou seja, quando você atribui um objeto a uma nova variável ou passa para uma função, está trabalhando com a mesma instância do objeto, não uma cópia.
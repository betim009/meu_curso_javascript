# 📚 Exercícios de Acesso e Manipulação de Objetos em JavaScript

## 🧩 Base para as Atividades

```js
const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};
```

---

## 📝 Enunciados

### 1. Exibir o nome completo da pessoa e o título do seu livro favorito
Acesse as chaves `name`, `lastName` e `title` e exiba a seguinte mensagem:
> “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”

---

### 2. Adicionar um novo livro ao array `favoriteBooks`
Adicione ao array `favoriteBooks` o seguinte objeto:

```js
{
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
```

Depois, exiba o objeto `reader` atualizado no console.

---

### 3. Informar a quantidade de livros favoritos
Mostre no console:
- Se tiver 1 livro:  
  > “Julia tem 1 livro favorito.”
- Se tiver mais de 1 livro:  
  > “Julia tem X livros favoritos.”

---

## 🧾 Base para as próximas atividades

```js
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: { amount: 1, price: 25 },
      pepperoni: { amount: 1, price: 20 },
    },
    drinks: {
      coke: { type: 'Coca-Cola Zero', price: 10, amount: 1 },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
```

---

### 4. Criar uma mensagem de entrega
Crie uma função `customerInfo` que retorne a seguinte frase:
> "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701"

---

### 5. Modificar dados da encomenda e retornar resumo da compra
Na função `orderModifier`:
- Altere o nome do cliente para `"Luiz Silva"`
- Altere o total para `50`
- Mostre:
> “Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.”

---

## ✅ Gabarito

```js
// 1
console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'.`);

// 2
reader.favoriteBooks.push({
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
});
console.log(reader);

// 3
const nome = reader.name;
const qtd = reader.favoriteBooks.length;
const frase = qtd === 1
  ? `${nome} tem ${qtd} livro favorito.`
  : `${nome} tem ${qtd} livros favoritos.`;
console.log(frase);

// 4
const customerInfo = (order) => {
  const entregador = order.order.delivery.deliveryPerson;
  const cliente = order.name;
  const tel = order.phoneNumber;
  const rua = order.address.street;
  const numero = order.address.number;
  const ap = order.address.apartment;
  return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${tel}, ${rua}, Número: ${numero}, AP: ${ap}`;
};
console.log(customerInfo(order));

// 5
const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  return `Olá ${order.name}, o total do seu pedido de ${pizzas.join(', ')} e ${bebida} é R$ ${order.payment.total},00.`;
};
console.log(orderModifier(order));
```
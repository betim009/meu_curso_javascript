const users = require('./data/users');
const products = require('./data/products');

// Functions
const { getAll, getById } = require('./functions/scripts');
const { createUser, updateUserById, deleteById } = require('./functions/user');
const { createProduct, updateProductById, deleteProductById } = require('./functions/product');

// Rotas
const allUsers = getAll(users); // todos usuários
const allProducts = getAll(products); // todos produtos

const findUser = getById(users, '1'); // busca usuario por id
const findProduct = getById(products, 1)

// Cria usuário
const new_user_31 = createUser(users,
    {
        name: 'perry',
        email: 'perry@gmail.com',
        password: "password_1_perry"
    });

// Cria produto
const new_product = createProduct(products,
    {
        model: "Nike Aventure",
        color: "Black/White",
        price: 160.99,
        sizesAvailable: [38, 39, 40, 41, 42],
        quantity: 15
    });

// altera usuario 
const updateUser = updateUserById(users, 31,
    {
        name: 'Alex',
        email: 'alberto@gmail.com',
        password: '1234567'
    });

// altera produto
const updateProduct = updateProductById(products, 5,
    {
        model: "Nike Aventure",
        color: "Black/White/Red",
        price: 160.99,
        sizesAvailable: [38, 39, 40, 41, 42],
        quantity: 20
    });

// deleta usuario
const deleteUser = deleteById(users, 31);

// deleta usuario
const deleteProduct = deleteProductById(products, 5);
console.log(allProducts);


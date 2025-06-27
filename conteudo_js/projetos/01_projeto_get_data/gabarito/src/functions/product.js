const { validateData, validateId } = require('../middleware/validations');

function createProduct(data, product) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    // Encontrar o próximo ID disponível:
    const newId = data.length + 1;

    const newProduct = {
        id: newId,
        ...product
    };

    data.push(newProduct);

    return `200: User ${newProduct.model} created`;
};

function updateProductById(data, id, productUpdate) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    for (let index = 0; index < data.length; index++) {
        const product = data[index];
        if (product.id === id) {
            data[index] = {
                id,
                ...productUpdate,
            };
            return `200: product ${productUpdate.model} updated`;
        };
    };

    return 'not found'
};

function deleteProductById(data, id) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    const validId = validateId(id);
    if (validId) {
        return validId;
    };

    const newProducts = [];
    let productRemoved = '';

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user.id !== id) {
            newProducts.push(user);
        };

        if (user.id === id) {
            productRemoved = user.name;
        };
    };

    if (data.length === newProducts.length) {
        return 'not found user'
    };

    data.length = 0;
    data.push = [...newProducts];
    return `user ${productRemoved} removed`;
};


module.exports = {
    createProduct,
    updateProductById,
    deleteProductById,
};
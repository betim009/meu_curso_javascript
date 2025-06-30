const { validateData, validateId, validateUser } = require('../middleware/validations')

function createUser(data, user) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    const validUser = validateUser(user);
    if (validUser) {
        return validUser;
    };

    // Encontrar o próximo ID disponível:
    const newId = data.length + 1;

    const newUser = {
        id: newId,
        ...user
    };

    data.push(newUser);

    return `200: User ${newUser.name} created`;
};

function updateUserById(data, id, userUpdate) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    const validId = validateId(id);

    if (validId) {
        return validId;
    };

    const validUser = validateUser(userUpdate);

    if (validUser) {
        return validUser;
    };

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user.id === id) {
            data[index] = {
                id,
                ...userUpdate,
            };
            return `200: user ${userUpdate.name} updated`;
        };
    };

    return 'not found'
};

function deleteById(data, id) {
    const validData = validateData(data);
    if (validData) {
        return validData;
    };

    const validId = validateId(id);
    if (validId) {
        return validId;
    };

    const newUsers = [];
    let userRemoved = '';

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user.id !== id) {
            newUsers.push(user);
        };

        if (user.id === id) {
            userRemoved = user.name;
        };
    };

    if (data.length === newUsers.length) {
        return 'not found user'
    };

    data.length = 0;
    data.push = [...newUsers];
    return `user ${userRemoved} removed`;
};

module.exports = {
    createUser,
    updateUserById,
    deleteById,
};
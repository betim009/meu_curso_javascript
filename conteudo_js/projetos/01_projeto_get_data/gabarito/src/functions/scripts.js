const { validateData, validateId } = require('../middleware/validations')

function getAll(data) {
    const validData = validateData(data);

    if (validData) {
        return validData;
    };

    return data;
};

function getById(data, id) {
    const validData = validateData(data);
    const validId = validateId(id)

    if (validData) {
        return validData;
    };

    if (validId) {
        return validId;
    };

    for (let index = 0; index < data.length; index++) {
        const user = data[index];
        if (user.id === id) {
            return user;
        };
    };

    return 'Not found id'
};

module.exports = {
    getAll,
    getById,
};
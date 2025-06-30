function validateData(data) {
    if (!data) {
        return '404: Data not found';
    }

    if (!Array.isArray(data) || data.length === 0) {
        return '400: Data is not a valid array or array is empty';
    }

    return null; // No validation error
};

function validateId(id) {
    if (!id) {
        return 'Not Found id';
    };

    if (typeof id !== 'number') {
        return 'id not is number';
    };

    return null;
};

function validateUser(user) {
    if (!user) {
        return 'Not found user';
    };

    if (typeof user !== 'object') {
        return 'Not object';
    };

    const { name, email, password } = user;

    if (!name || !email || !password) {
        return 'Not found name, email, password';
    };

    // Se email for falso
    if (!isValidEmail(email)) {
        return 'Invalid email format';
    };

    const resultPassword = isValidPassword(password);

    if (resultPassword) {
        return resultPassword;
    };

    return null;
}

function isValidEmail(email) {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(email);
};

function isValidPassword(password) {
    // Se password for menor que 6 caracteres
    if (password.length < 6) {
        return 'Password must have at least 6 characters';
    };

    const regexNumber = /\d/;
    // Se não tiver um número no password
    if (!regexNumber.test(password)) {
        return 'Password must contain at least one number';
    };
}

module.exports = {
    validateData,
    validateId,
    validateUser,
};
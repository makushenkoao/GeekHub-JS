export const REQUIRED = 'This field is required, please fill it out';
export const NAME_REGEXP = /^[A-Z]+[a-z]+$/;
export const PASSWORD_REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])([a-zA-Z0-9!@#$%^&*?]{8,})/
const EMAIL_REGEXP = /^[a-zA-Z]+.+\w+@[a-z]+\.[a-z]{2,3}$/
const PHONE_REGEXP = /^\(?((38)+(063|073|093|097|096|067|099|050))\)?([0-9]{7})$/;

export const validateName = (value, {required} = {}) => {
    const result = [];
    if (required && !value) {
        result.push(REQUIRED);
    }
    if (value && !NAME_REGEXP.test(value)) {
        result.push('The name must start with a capital letter and have only Latin letters');
    }
    if (value && value.length < 3) {
        result.push('Name is short');
    }
    if (result.length) {
        return result.join('. ');
    }
}

export const validatePassword = (value, {required} = {}) => {
    const result = [];
    if (required && !value) {
        result.push(REQUIRED);
    }
    if (value && !PASSWORD_REGEXP.test(value)) {
        result.push('Password is not safe, please enter letters, uppercase letters, numbers and special symbols');
    }
    if (value && value.length < 8) {
        result.push('Password is short, enter a password at least 8 symbols long');
    }
    if (result.length) {
        return result.join('. ');
    }
}


export const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
};

export const validateEmail = (value, {required} = {}) => {
    const result = [];
    if (required && !value) {
        result.push(REQUIRED);
    }
    if (value && !EMAIL_REGEXP.test(value)) {
        result.push('Email not valid. Email must start width letter, have symbol "@" and have the right way');
    }
    if (result.length) {
        return result.join('. ');
    }
}

export const validatePhone = (value, {required} = {}) => {
    const result = [];
    if (required && !value) {
        result.push(REQUIRED);
    }
    if (value && !PHONE_REGEXP.test(value)) {
        result.push('Phone not valid. An example of a Ukrainian number: 38093123456 ');
    }
    if (value && value.match(/[a-zA-Z!@#$%^&*()_+=]/)) {
        result.push('Delete letters or special symbols');
    }
    if (value && value.length !== 12) {
        result.push('Not enough numbers');
    }
    if (result.length) {
        return result.join('. ');
    }
}
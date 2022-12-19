document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputName = document.getElementById('inputName');
    const inputLastName = document.getElementById('inputLastName');
    const inputPhoneNumber = document.getElementById('inputPhoneNumber');
    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const inputConfirmPassword = document.getElementById('inputConfirmPassword');

    const completedMessage = document.querySelector('.js-show-completed-message');
    const errorMessageName = document.querySelector('.js-show-error-message-name');
    const errorMessageLastName = document.querySelector('.js-show-error-message-last-name');
    const errorMessagePhoneNumber = document.querySelector('.js-show-error-message-phone-number');
    const errorMessageEmail = document.querySelector('.js-show-error-message-email');
    const errorMessagePassword = document.querySelector('.js-show-error-message-password');
    const errorMessageConfirmPassword = document.querySelector('.js-show-error-message-confirm-password');

    let isConfirmPassword = false

    form.addEventListener("submit",
        e => {
            e.preventDefault();

            const showErrorMessageEmptyInput = (input, messageElem, message) => {
                if (input.value === '') {
                    messageElem.innerHTML = message;
                    input.classList.add('error');
                }
            }

            // name & last name

            const regexpName = /^[A-Z]+[a-z]+$/g;
            const regexpLastName = /^[A-Z]+[a-z]+$/g;
            const isName = regexpName.test(inputName.value);
            const isLastName = regexpLastName.test(inputLastName.value);

            if (isName === false) {
                if (!inputName.value.match(/^[A-Z]/g)) errorMessageName.innerHTML = 'name must start with a capital letter';
                if (!inputName.value.match(/[a-z]{1,}/g)) errorMessageName.innerHTML = 'enter full name';
                if (!inputName.value.match(/[a-zA-Z]/g)) errorMessageName.innerHTML = 'enter the name in latin letters';
                if (inputName.value.match(/[0-9]/g)) errorMessageName.innerHTML = 'delete numbers';
                inputName.classList.add('error');
            } else {
                errorMessageName.innerHTML = '';
                inputName.classList.remove('error');
                inputName.classList.add('correct');
            }

            if (isLastName === false) {
                if (!inputLastName.value.match(/^[A-Z]/g)) errorMessageLastName.innerHTML = 'name must start with a capital letter';
                if (!inputLastName.value.match(/[a-z]{1,}/g)) errorMessageLastName.innerHTML = 'enter full name';
                if (!inputLastName.value.match(/[a-zA-Z]/g)) errorMessageLastName.innerHTML = 'enter the name in latin letters';
                if (inputLastName.value.match(/[0-9]/g)) errorMessageLastName.innerHTML = 'delete numbers';
                inputLastName.classList.add('error');
            } else {
                errorMessageLastName.innerHTML = '';
                inputLastName.classList.remove('error');
                inputLastName.classList.add('correct');
            }

            // phone number

            const regexpPhoneNumber = /^\(?(((38)+(063|073|093|097|096|067|099|050))|(063|073|093|097|096|067|099|050))\)?([0-9]{7})$/;
            const isPhoneNumber = regexpPhoneNumber.test(inputPhoneNumber.value);
            if (isPhoneNumber === false) {
                if (!inputPhoneNumber.value.match(/^\(?(((38)+(063|073|093|097|096|067|099|050))|(063|073|093|097|096|067|099|050))\)/)) errorMessagePhoneNumber.innerHTML = 'enter ukrainian phone number';
                if (!inputPhoneNumber.value.match(/\d{12}/) || !inputPhoneNumber.value.match(/\d{10}/)) errorMessagePhoneNumber.innerHTML = 'enter full phone number';
                if (inputPhoneNumber.value.match(/[a-zA-Z]/)) errorMessagePhoneNumber.innerHTML = 'enter only number';
                inputPhoneNumber.classList.add('error');
            } else {
                errorMessagePhoneNumber.innerHTML = '';
                inputPhoneNumber.classList.remove('error');
                inputPhoneNumber.classList.add('correct');
            }

            // email

            const regexpEmail = /^[a-zA-Z]+.+\w+@[a-z]+\.[a-z]{2,3}$/
            const isEmail = regexpEmail.test(inputEmail.value)

            if (isEmail === false) {
                errorMessageEmail.innerHTML = 'email not valid';
                if (inputEmail.value.match(/^\d/)) errorMessageEmail.innerHTML = 'email must start width letter';
                inputEmail.classList.add('error');
            } else {
                errorMessageEmail.innerHTML = '';
                inputEmail.classList.remove('error');
                inputEmail.classList.add('correct');
            }

            // password

            const regexpPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])([a-zA-Z0-9!@#$%^&*?]{8,})$/

            const isPassword = regexpPassword.test(inputPassword.value)

            if (isPassword === false) {
                if (!inputPassword.value.match(/([a-zA-Z0-9!@#$%^&*?]{8,})$/)) errorMessagePassword.innerHTML = 'your password is short';
                if (!inputPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])/)) errorMessagePassword.innerHTML = 'your password not safe'
                inputPassword.classList.add('error')
            } else {
                errorMessagePassword.innerHTML = ''
                inputPassword.classList.remove('error')
                inputPassword.classList.add('correct')
            }

            // confirm password

            if (inputConfirmPassword.value === inputPassword.value && inputConfirmPassword.value !== '') {
                errorMessageConfirmPassword.innerHTML = '';
                inputConfirmPassword.classList.remove('error');
                inputConfirmPassword.classList.add('correct');
                isConfirmPassword = true;
            } else {
                errorMessageConfirmPassword.innerHTML = 'password wrong';
                inputConfirmPassword.classList.add('error');
                isConfirmPassword = false;
            }

            showErrorMessageEmptyInput(inputName, errorMessageName, 'enter a name');
            showErrorMessageEmptyInput(inputLastName, errorMessageLastName, 'enter a last name');
            showErrorMessageEmptyInput(inputPhoneNumber, errorMessagePhoneNumber, 'enter a phone number');
            showErrorMessageEmptyInput(inputEmail, errorMessageEmail, 'enter an email');
            showErrorMessageEmptyInput(inputPassword, errorMessagePassword, 'enter a password');
            showErrorMessageEmptyInput(inputConfirmPassword, errorMessageConfirmPassword, 'enter the password again');

            if (isName === true && isLastName === true && isPhoneNumber === true && isEmail === true && isPassword === true && isConfirmPassword === true) {
                form.classList.add('none')
                completedMessage.classList.remove('none')
                console.log(inputName.value.match(regexpName)[0], inputEmail.value.match(regexpEmail)[0], inputPassword.value.match(regexpPassword)[0], inputLastName.value.match(regexpLastName)[0]);
                if(inputPhoneNumber.value.match(/^\(?(063|073|093|097|096|067|099|050)\)?([0-9]{7})$/g)) console.log(`38${inputPhoneNumber.value.match(regexpPhoneNumber)[0]}`)
                else console.log(inputPhoneNumber.value.match(regexpPhoneNumber)[0])
            }
        });
})


// lecture

// flags:
// g - global
// i - case-insensitive
// m - multiline

// patterns:
// . - любой одиночный символ
//     [ ] - любой из них, диапазоны
// $ - конец строки
// ^ - начало строки
// \ - экранирование
// \d - любую цифру
// \D - все что угодно, кроме цифр
// \s - пробелы
// \S - все кроме пробелов
// \w - буква
// \W - все кроме букв
// \b - граница слова
// \B - не границ

// n{4} - искать n подряд 4 раза
// n{4,6} - искать n от 4 до 6
// * от нуля и выше
// + от 1 и выше
// ? - нуль или 1 раз
// ^ - start
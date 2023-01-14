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

    const regexpNameAndLastName = /^[A-Z]+[a-z]+$/;
    const regexpUkrainianFullNumber = /^\(?((38)+(063|073|093|097|096|067|099|050))\)/;
    const regexpUkrainianShortNumber = /^\(?(063|073|093|097|096|067|099|050)\)/;
    const regexpUkrainianNumber = /^\(?(063|073|093|097|096|067|099|050)\)?([0-9]{7})$/g;
    const regexpPhoneNumber = /^\(?(((38)+(063|073|093|097|096|067|099|050))|(063|073|093|097|096|067|099|050))\)?([0-9]{7})$/;
    const regexpEmail = /^[a-zA-Z]+.+\w+@[a-z]+\.[a-z]{2,3}$/
    const regexpPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])([a-zA-Z0-9!@#$%^&*?]{8,})$/
    let isConfirmPasswordValid = false

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        const showErrorMessageEmptyInput = (input, messageElem, message) => {
            if (input.value === '') {
                messageElem.innerHTML = message;
                input.classList.add('error');
            }
        }

        // name & last name

        const isNameValid = regexpNameAndLastName.test(inputName.value)
        const isLastNameValid = regexpNameAndLastName.test(inputLastName.value);

        if (!isNameValid) {
            if (!inputName.value.match(/^[A-Z]/g)) {
                errorMessageName.innerHTML = 'Name must start with a capital letter';
            }
            if (!inputName.value.match(/[a-z]{2,}/g)) {
                errorMessageName.innerHTML = 'Enter full name';
            }
            if (!inputName.value.match(/[a-zA-Z]/g)) {
                errorMessageName.innerHTML = 'Enter the name in latin letters';
            }
            if (inputName.value.match(/[0-9]/g)) {
                errorMessageName.innerHTML = 'Delete numbers';
            }
            inputName.classList.add('error');
        } else {
            errorMessageName.innerHTML = '';
            inputName.classList.remove('error');
            inputName.classList.add('correct');
        }


        if (!isLastNameValid) {
            if (!inputLastName.value.match(/^[A-Z]/g)) {
                errorMessageLastName.innerHTML = 'Name must start with a capital letter';
            }
            if (!inputLastName.value.match(/[a-z]{1,}/g)) {
                errorMessageLastName.innerHTML = 'Enter full name';
            }
            if (!inputLastName.value.match(/[a-zA-Z]/g)) {
                errorMessageLastName.innerHTML = 'Enter the name in latin letters';
            }
            if (inputLastName.value.match(/[0-9]/g)) {
                errorMessageLastName.innerHTML = 'Delete numbers';
            }
            inputLastName.classList.add('error');
        } else {
            errorMessageLastName.innerHTML = '';
            inputLastName.classList.remove('error');
            inputLastName.classList.add('correct');
        }

        // phone number


        const isPhoneNumberValid = regexpPhoneNumber.test(inputPhoneNumber.value);

        if (!isPhoneNumberValid) {
            if (!inputPhoneNumber.value.match(regexpUkrainianFullNumber) || !inputPhoneNumber.value.match(regexpUkrainianShortNumber)) {
                errorMessagePhoneNumber.innerHTML = 'Enter ukrainian phone number';
            }
            if (!inputPhoneNumber.value.match(/\d{12}/) || !inputPhoneNumber.value.match(/\d{10}/)) {
                errorMessagePhoneNumber.innerHTML = 'Enter full phone number';
            }
            if (inputPhoneNumber.value.match(/[a-zA-Z]/)) {
                errorMessagePhoneNumber.innerHTML = 'Enter only number';
            }
            if (!inputPhoneNumber.value.match(/^\(?(063|073|093|097|096|067|099|050)\)/)) {
                errorMessagePhoneNumber.innerHTML = 'Enter ukrainian phone number';
            }
            inputPhoneNumber.classList.add('error');
        } else {
            errorMessagePhoneNumber.innerHTML = '';
            inputPhoneNumber.classList.remove('error');
            inputPhoneNumber.classList.add('correct');
        }

        // email

        const isEmailValid = regexpEmail.test(inputEmail.value)

        if (!isEmailValid) {
            errorMessageEmail.innerHTML = 'Email not valid';
            if (inputEmail.value.match(/^\d/)) {
                errorMessageEmail.innerHTML = 'Email must start width letter';
            }
            inputEmail.classList.add('error');
        } else {
            errorMessageEmail.innerHTML = '';
            inputEmail.classList.remove('error');
            inputEmail.classList.add('correct');
        }

        // password


        const isPasswordValid = regexpPassword.test(inputPassword.value)

        if (!isPasswordValid) {
            if (!inputPassword.value.match(/([a-zA-Z0-9!@#$%^&*?]{8,})$/)) {
                errorMessagePassword.innerHTML = 'Your password is short';
            }
            if (!inputPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?])/)) {
                errorMessagePassword.innerHTML = 'Your password not safe'
            }
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
            isConfirmPasswordValid = true;
        } else {
            errorMessageConfirmPassword.innerHTML = 'Password wrong';
            inputConfirmPassword.classList.add('error');
            isConfirmPasswordValid = false;
        }

        showErrorMessageEmptyInput(inputName, errorMessageName, 'Enter a name');
        showErrorMessageEmptyInput(inputLastName, errorMessageLastName, 'Enter a last name');
        showErrorMessageEmptyInput(inputPhoneNumber, errorMessagePhoneNumber, 'Enter a phone number');
        showErrorMessageEmptyInput(inputEmail, errorMessageEmail, 'Enter an email');
        showErrorMessageEmptyInput(inputPassword, errorMessagePassword, 'Enter a password');
        showErrorMessageEmptyInput(inputConfirmPassword, errorMessageConfirmPassword, 'Enter the password again');

        const isFormValid = isNameValid && isLastNameValid && isPhoneNumberValid && isEmailValid && isPasswordValid && isConfirmPasswordValid
        if (isFormValid) {
            form.classList.add('none');
            completedMessage.classList.remove('none');
            console.log('Name:', inputName.value.match(regexpNameAndLastName)[0]);
            console.log('Last name:', inputLastName.value.match(regexpNameAndLastName)[0]);
            console.log('Email:', inputEmail.value.match(regexpEmail)[0]);
            console.log('Password:', inputPassword.value.match(regexpPassword)[0]);
            if(inputPhoneNumber.value.match(regexpUkrainianNumber)) {
                console.log('Phone number:', `38${inputPhoneNumber.value.match(regexpPhoneNumber)[0]}`);
            }
            else {
                console.log('Phone number:', inputPhoneNumber.value.match(regexpPhoneNumber)[0]);
            }
        }
    }
})

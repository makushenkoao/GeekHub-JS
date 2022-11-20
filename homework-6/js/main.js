function logIn() {
    const form = document.querySelector('.form-login');
    const inputEmail = document.querySelector('.js-input-email');
    const inputPassword = document.querySelector('.js-input-password');

    const userInfo = {
        login: 'login@com.ua',
        password: 'password',
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        if (inputEmail.value === userInfo.login  && inputPassword.value === userInfo.password) {
            document.location.href = "github-profile.html";
        } else {
            document.querySelector('.validate-title').style.display = 'block';
        }
        return false
    })
}

logIn()

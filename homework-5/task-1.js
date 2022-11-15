const searchInput = document.getElementById('js-searchInput');
const searchList = document.getElementById('js-list')

const debounce = (func, ms) => {
    let time;
    return function () {
        const funcCall = () => func.call(this, arguments)
        clearTimeout(time);
        time = setTimeout(funcCall, ms)
        searchList.classList.remove('block');
    };
}

function cbDebounce() {if (searchInput.value !== '') searchList.classList.add('block')}
cbDebounce = debounce(cbDebounce, 1000);
searchInput.addEventListener('keyup', cbDebounce);
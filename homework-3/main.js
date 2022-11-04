// task 1

// 1.1

function methodGlueStrings(array, cb) {
    return cb(array);
}

function callbackGlueString(item) {
    return item.map(elem => `${elem[0].toUpperCase()}${elem.slice(1)}`).join('');
    ;
}

console.log(methodGlueStrings(['my', 'name', 'is', 'Vasya'], callbackGlueString))

// 1.2

function methodAddNumber(array, cb) {
    return cb(array);
}

function callbackAddNumber(item) {
    return item.map(elem => elem * 10).join(',');
}

console.log(methodAddNumber([10, 20, 30], callbackAddNumber));

// 1.3

function userInfo(array, cb) {
    return array.map(cb).join(', ')
}

function callbackUserInfo(item) {
    return item.name + ' is ' + item.age;
}

console.log(userInfo([{age: 45, name: 'Jon'}, {age: 20, name: 'Aaron'}], callbackUserInfo));

// 1.4

function methodReverseArray(array, cb) {
    return cb(array)
}

function callbackReverseArray(item) {
    return item.map(elem => elem.split('').reverse().join('')).join(',');
}

console.log(methodReverseArray(['abc', '123'], callbackReverseArray));

// task 2

// 2.1

const rectangle = {
    width: 10,
    height: 5,
    getSquare: function () {
        return this.width * this.height;
    }
}

// 2.2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price / 100 * parseInt(this.discount));
    },
};

// 2.3

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },

    plusOne: function () {
        this.value++;
        return this;
    },

    minusOne: function () {
        this.value--;
        return this;
    },

}

// 2.4

const element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
const getElementHeight = element.getHeight.call(element);

// task 4

const convertToObject = (num) => {
    const obj = {
        value: num,
        isOdd: Boolean(num % 2)
    };
    return obj;
}


// task 5

// 5.1

function minusNumbers(num = 0) {
    let x = num;
    return (num = 0) => x - num;
}


// 5.2

function multiplyMaker(val) {
    let a = val;
    return (num = 1) => a *= num;
}

const multiply = multiplyMaker(2);

// 5.3

function stringModule() {
    let str = '';

    function setStr(val = '') {
        str = String(val);
    }

    function getStr() {
        return str;
    }

    function strReverse() {
        return str.split('').reverse().join('');
    }

    function strLength() {
        return str.length;
    }

    return {
        setStr,
        getStr,
        strReverse,
        strLength
    }
}

const str = stringModule()


// 5.4

function calcModule() {
    let num = 0;

    function setNum(val) {
        num = val;
        return this;
    }

    function getNum() {
        return num;
    }

    function numPlus(val) {
        num += val;
        return this;
    }

    function numMinus(val) {
        num -= val;
        return this;
    }

    function numMultiply(val) {
        num *= val;
        return this;
    }

    function numDivide(val) {
        num /= val;
        return this
    }

    function numPow(val) {
        num = Math.pow(num, val);
        return this;
    }

    return {
        setNum,
        getNum,
        numPlus,
        numMinus,
        numMultiply,
        numDivide,
        numPow
    }
}

const result = calcModule();

// task 6

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
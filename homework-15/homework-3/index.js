"use strict";
// task 1
function joinStrings(array, cb) {
    let res = '';
    for (let item of array) {
        res += cb(item);
    }
    return res;
}
function parsingArray(array, cb) {
    let res = '';
    for (let item of array) {
        res += cb(item);
    }
    return res.slice(0, -2);
}
// 1.1
function callbackGlueString(item) {
    let res = String(item).split('');
    res.shift();
    return String(item)[0].toUpperCase() + res.join('');
}
console.log(joinStrings(['my', 'name', 'is', 'Vasya'], callbackGlueString));
// 1.2
function callbackAddNumber(item) {
    return `${Number(item) * 10}, `;
}
console.log(parsingArray([10, 20, 30], callbackAddNumber));
// 1.3
function callbackUserInfo(item) {
    return `${Object(item).name} is ${Object(item).age}, `;
}
console.log(parsingArray([{ age: 45, name: 'Jon' }, { age: 20, name: 'Aaron' }], callbackUserInfo));
// 1.4
function callbackReverseArray(item) {
    return String(item).split('').reverse().join('') + ', ';
}
console.log(parsingArray(['abc', '123'], callbackReverseArray));
const rectangle = {
    width: 10,
    height: 5,
    getSquare: function () {
        return this.width * this.height;
    }
};
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
};
const element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};
const getElementHeight = element.getHeight.bind(element);
getElementHeight();
const convertToObject = (num) => ({
    value: num,
    isOdd: Boolean(num % 2)
});
// task 5
// 5.1
function minusNumbers(num = 0) {
    return (x = 0) => num - x;
}
// 5.2
function multiplyMaker(val) {
    let a = val;
    return (num = 1) => a *= num;
}
const multiply = multiplyMaker(2);
function stringModule() {
    let str = '';
    return {
        setStr(val = '') {
            str = String(val);
        },
        getStr() {
            return str;
        },
        strReverse() {
            return str.split('').reverse().join('');
        },
        strLength() {
            return str.length;
        }
    };
}
const str = stringModule();
function calcModule() {
    let num = 0;
    return {
        setNum(val) {
            num = val;
            return this;
        },
        getNum() {
            return num;
        },
        numPlus(val) {
            num += val;
            return this;
        },
        numMinus(val) {
            num -= val;
            return this;
        },
        numMultiply(val) {
            num *= val;
            return this;
        },
        numDivide(val) {
            num /= val;
            return this;
        },
        numPow(val) {
            num = Number(Math.pow(num, val));
            return this;
        }
    };
}
const result = calcModule();
const sum = (a) => (b) => (c) => a + b + c;

// task 1

interface IUser {
    age: number,
    name: string
}

type arrayType = string[] | number[] | IUser[]
type itemType = string | number | IUser
type callbackType = (item: itemType) => string

function joinStrings(array: arrayType, cb: callbackType): string {
    let res: string = '';
    for (let item of array) {
        res += cb(item);
    }
    return res;
}

function parsingArray(array: arrayType, cb: callbackType): string {
    let res: string = '';
    for (let item of array) {
        res += cb(item);
    }
    return res.slice(0, -2);
}

// 1.1

function callbackGlueString(item: itemType): string {
    let res: string[] = String(item).split('');
    res.shift();
    return String(item)[0].toUpperCase() + res.join('')
}

console.log(joinStrings(['my', 'name', 'is', 'Vasya'], callbackGlueString))

// 1.2


function callbackAddNumber(item: itemType): string {
    return `${Number(item) * 10}, `
}

console.log(parsingArray([10, 20, 30], callbackAddNumber));

// 1.3

function callbackUserInfo(item: itemType): string {
    return `${Object(item).name} is ${Object(item).age}, `
}

console.log(parsingArray([{age: 45, name: 'Jon'}, {age: 20, name: 'Aaron'}], callbackUserInfo));

// 1.4

function callbackReverseArray(item: itemType): string {
    return String(item).split('').reverse().join('') + ', '
}

console.log(parsingArray(['abc', '123'], callbackReverseArray));

// task 2

// 2.1

interface IRectangle {
    width: number,
    height: number,
    getSquare: () => number
}

const rectangle: IRectangle = {
    width: 10,
    height: 5,
    getSquare: function () {
        return this.width * this.height;
    }
}

// 2.2

type priceType = () => number

interface IPrice {
    price: number,
    discount: string,
    getPrice: priceType,
    getPriceWithDiscount: priceType,
}

const price: IPrice = {
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

type numeratorType = () => object

interface INumerator {
    value: number,
    double: numeratorType,
    plusOne: numeratorType,
    minusOne: numeratorType,
}

const numerator: INumerator = {
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

interface IElement {
    height: number
    getHeight: () => number
}

const element: IElement = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};
const getElementHeight = element.getHeight.bind(element);
getElementHeight();


// task 4

interface IConvertToObject {
    value: number,
    isOdd: boolean
}

const convertToObject = (num: number): IConvertToObject => ({
    value: num,
    isOdd: Boolean(num % 2)
});

// task 5

// 5.1

function minusNumbers(num:number = 0): (x:number) => number {
    return (x = 0) => num - x;
}

// 5.2

function multiplyMaker(val: number): (num:number) => number {
    let a:number = val;
    return (num = 1) => a *= num;
}

const multiply = multiplyMaker(2);

// 5.3

interface IStringModule {
    setStr: (val: string) => void,
    getStr:  () => string,
    strReverse: () => string,
    strLength: () => number,
}

function stringModule(): IStringModule {
    let str:string = '';
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
    }
}

const str = stringModule()

// 5.4

type calcModuleType = (val: number) => object

interface ICalcModule {
    setNum: calcModuleType,
    getNum: () => number,
    numPlus: calcModuleType,
    numMinus: calcModuleType,
    numMultiply: calcModuleType,
    numDivide: calcModuleType,
    numPow: calcModuleType,
}

function calcModule(): ICalcModule {
    let num: number = 0;
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
            return this
        },

        numPow(val) {
            num = Number(Math.pow(num, val));
            return this;
        }
    }
}

const result = calcModule();

// task 6

type sumTypes = (a: number) => (b:number) => (c:number) => number

const sum: sumTypes = (a) => (b) => (c) => a + b + c;
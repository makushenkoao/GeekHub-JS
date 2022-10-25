// task 1 {

function multiple(...args) {
    let multiplyArgs = 1;
    for (let arg of args) {
        multiplyArgs *= arg;
    }
    return multiplyArgs;
}

// task 2

function reverseString(elem) {
    let newStr = '';
    if (Array.isArray(elem)) {
        return elem.reverse().join(',')
    } else if (typeof elem === 'object') {
        for (let key in elem) {
            newStr += ` ${key}: ${elem[key]}`;
        }
    } else if (elem === undefined) {
        newStr = String(elem);
    } else {
        newStr = elem.toString();
    }
    return newStr.split('').reverse().join('');
}

// task 3

function randomIntFunc(min = 1, max = 10) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
}

function GuessTheNumber(num) {
    let randomNumber = randomIntFunc()
    if (num >= 1 && num <= 10) {
        if (randomNumber === num) return 'You win'
        else return `You are lose, your number is ${num}, the random number is ${randomNumber}`;
    } else if (typeof num !== 'number') return new Error('Please provide a valid number');
    else return new Error('Please provide number in range 0 - 10');
}

// task 4

const arr1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1];
const arr2 = [-1, -8, -2];
const arr3 = [1, 7, 3];
const arr4 = [1, undefined, 3, 5, -3];
const arr5 = [1, NaN, 3, 5, -3];

// 4.1 MIN

function findMinElement(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// 4.2 MAX

function findMaxElement(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// 4.3 SUM

function findSumElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

// task 5

const arr6 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
const arr7 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
const arr8 = [7, 0, 1, 3, 4, 1, 2, 1]; // 9
const arr9 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
const arr10 = [2, 2, 1, 2, 2, 3, 0, 1, 2]; // 4
const arr11 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]; // 24
const arr12 = [2, 2, 2, 2, 2] // 0

function findWaterDepth (arr) {
    let arrLength = arr.length;
    let rightArray = new Array(arrLength);
    let leftArray = new Array(arrLength);
    let waterDepth = 0;
    leftArray[0] = arr[0];
    rightArray[arrLength - 1] = arr[arrLength - 1];
    for (let i = 1; i < arrLength; i++) {
        leftArray[i] = Math.max(leftArray[i - 1], arr[i])
    }
    for (let i = arrLength -2; i >= 0; i--) {
        rightArray[i] = Math.max(rightArray[i + 1], arr[i])
    }
    for (let i = 0; i < arrLength; i++) {
        waterDepth += Math.min(leftArray[i], rightArray[i]) - arr[i];
    }
    return waterDepth;
}

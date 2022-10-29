// task 1 {

function multiple(...args) {
    let result = 1;
    for (let arg of args) {
        result *= arg;
    }
    return result;
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

function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function guessTheNumber(num) {
    let randomNumber = getRandomInt(1, 10)
    if (typeof num !== 'number') return new Error('Please provide a valid number');
    if (num < 1 || num > 10) return new Error('Please provide number in range 0 - 10');
    if (num >= 1 && num <= 10 && randomNumber === num) return 'You win'
    else return `You are lose, your number is ${num}, the random number is ${randomNumber}`;
}

// task 4

function findSumOfMaxAndMinElements(arr) {
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i]
    }
    sum = min + max;
    return [min,max,sum];
}

// task 5

function findWaterDepth(arr) {
    let arrLength = arr.length;
    let waterDepth = 0;
    for (let i = 1; i < arrLength - 1; i++) {
        let leftArr = arr[i];
        let rightArr = arr[i];
        for (let k = 0; k < i; k++) {
            leftArr = Math.max(leftArr, arr[k]);
        }
        for (let k = i + 1; k < arrLength; k++) {
            rightArr = Math.max(rightArr, arr[k]);
        }
        waterDepth += Math.min(leftArr, rightArr) - arr[i];
    }
    return waterDepth;
}

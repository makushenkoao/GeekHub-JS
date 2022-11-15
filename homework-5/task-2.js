// 1

const isPrime = num => num > 1 && num % 2 !== 0;

// 2

const factorial = num => {
    let res = 1;
    for (res; num > 1; num--) {
        res *= num;
    }
    return res;
}

// 3

const fib = num => {
    let a = 1,b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a+b;
        a = b;
        b = c;
    }
    return b;
}

// 4

const isSorted = arr => arr.join('') === arr.sort((a,b)=>a-b).join('');

// 5

const reverse = str => {
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

// 6

const indexOf = (arr, num) => {
    let out = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) out = i;
    }
    return out;
}

// 7

const isPalindrome = str => str.split('').reverse().join('').toLowerCase().replace( /\s/g, "") === str.toLowerCase().replace( /\s/g, '');

// 8

const missing = arr => {
    let res = arr.sort((a,b)=>a-b);
    for (let i = 0; i < res.length; i++) {
        if ((arr[i] - arr[i-1]) > 1) return arr[i] - 1;
        if (res[0] !== 1) return 1
    }
}

// 9

const isBalanced = str => {
    let openBracket = 0;
    let closeBracket = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "{") openBracket++;
        if (str[i] === "}") closeBracket++;
        if (closeBracket > openBracket) return false;
    }
    return openBracket === closeBracket;
}
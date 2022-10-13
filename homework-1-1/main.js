// task 2.1
const pi = Math.PI;
console.log(pi.toFixed(2));
// task 2.2
const result = 0.6 + 0.7;
console.log(Math.round(result));
// task 2.3
const $ = '100$';
console.log(parseInt($));
// task 3.1
const str = 'some test string';
console.log(`${str[0]} ${str[str.length - 1]}`);
// task 3.2
console.log(`${str[0].toUpperCase()}ome test strin${str[str.length -1].toUpperCase()}`);
// task 3.3
console.log(str.lastIndexOf(' '));
// task 3.4
console.log(str.substring(0, 9));
// task 4
let searchFlat = (num) => {
    if (num > 0 && num <= 20) return 1;
    else if (num > 20 && num <= 40) return 2;
    else if (num > 40 && num <= 60) return 3;
}
console.log(searchFlat(12));
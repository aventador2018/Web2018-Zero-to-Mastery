const fs = require('fs');

let a = 1;
let i = 0;

fs.readFile('./input.txt', 'utf8', (err, data) => {
    console.time('fun');
    while (i != data.length) {
        i = i+1;
        if(a === -1) {
            console.log(i);
        }
        if (data[i] === '(') {
            a = a+1;
        } else if (data[i] === ')') {
            a = a-1;
        }
    }
    console.log(a);
    console.timeEnd('fun');
});
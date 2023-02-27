// import * as fs from 'node:fs/promises';

const fs = require('fs');

// fs.readFile('index.js', 'utf-8', (err, data) => {
//     console.log(err, data);
// })

// const m = fs.readFileSync('index.js', 'utf-8', (err, data) => {
//     console.log(err, data);
// })
// console.log(m.toString());

// fs.writeFile('newf.txt', 'okay write this', ()=>{
//     console.log("written in file success");
// })

let u = fs.writeFileSync('newf.txt', "okay write another");
console.log(u);
console.log("done writing");
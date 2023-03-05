const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./folder/first.txt', 'utf8');
console.log("🚀 ~ file: app.js:4 ~ first:", first)
const second = readFileSync('./folder/second.txt', 'utf8');
console.log("🚀 ~ file: app.js:6 ~ second:", second)


writeFileSync('./folder/result-sync.txt',`here is the result: ${first}, ${second}`, {flag: 'a'});
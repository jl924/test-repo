const path = require('path');

console.log(path.sep)

const filepath = path.join('/folder/', 'subfolder', 'test.txt');
console.log("🚀 ~ file: app.js:6 ~ filepath:", filepath)

const base = path.basename(filepath);
console.log("🚀 ~ file: app.js:9 ~ base:", base)

const absolute = path.resolve(__dirname,'folder','subfolder','test.txt');
console.log("🚀 ~ file: app.js:12 ~ absolute:", absolute)
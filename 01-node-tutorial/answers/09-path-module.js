const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt') // normalized path
console.log(filePath);

const base = path.basename(filePath)   // basename is the rightmost element of the path 
console.log(base)


// absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// CommonJS, every file is module (by default)
// Modules  - Encapsulated Code (only share minimum)

const names = require('./04-names') // .js is optional
const sayHi = require('./05-utils')
const data = require('./06-althernative-flavor')
require('./07-mind-grenade')    // per the omported module, addValues function is called
console.log(names)
console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
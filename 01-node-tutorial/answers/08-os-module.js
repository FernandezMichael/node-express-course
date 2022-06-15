const os = require('os')
const { clearScreenDown } = require('readline')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the systme uptime in seconds
console.log(`The Systme Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOS);

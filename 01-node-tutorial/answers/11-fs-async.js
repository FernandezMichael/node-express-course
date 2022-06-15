const { readFile, writeFile } = require('fs')

console.log('start');
readFile('./content/first.txt', 
    'utf8', 
    (err, result) => {  // callback fubction
        if (err) {  // if err==true
            console.log(err)
            return
        }
        // if no err==false
        console.log(result)
        // MF note: chain or nest the readFile
        const first = result
        readFile('./content/second.txt',
            'utf8',
            (err, result) => {
                if (err) {  // if err==true
                    console.log(err)
                    return
                }
                // if no err==false
                console.log(result)
                // MF note: chain or nest with writeFile
                const second = result
                const output = first + '. ' + second 
                writeFile('./content/result-async.txt',
                    `Here is the result: ${first}, ${second}`,
                    (err, result) => {
                        if(err) {
                            console.log(err)
                            return
                        }
                        console.log(result) // undefined when err==false
                        console.log("dne with this task");
                    }
                )
            })


    } 
)

console.log('starting new task');
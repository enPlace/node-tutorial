const {readFile} = require('fs')
const util = require('util')
const read = util.promisify(readFile)

read('./content/first.txt', 'utf8')
    .then(data=>{
        console.log(data)
    })



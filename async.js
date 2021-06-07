const {readFile, readFileSync} = require('fs')

console.log("started the first task")
//check file path 
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)
    console.log("finished")
})
console.log("this is the second task")
const second = readFileSync('./content/second.txt', 'utf8')
console.log(second)
const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)


const start = async()=>{
    try{
        const first = await read('./content/first.txt', 'utf8')
        const second = await read('./content/second.txt', 'utf8')
        console.log(first)
        console.log(second)
        fs.writeFileSync('./content/result-sync.txt', first)
        fs.writeFileSync('./content/result-sync.txt', '\n'+second, {flag:'a'})
        fs.writeFileSync('./content/result-sync.txt', "\ncool!", {flag:'a'})
        
    }catch (error){
        console.log(error)
    }
}

start()
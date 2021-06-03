const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
const mind = readFileSync('./mind-grenade.js', 'utf8')
console.log(first, second)
console.log(mind)

writeFileSync('./content/result-sync.txt', `Here is the result: \n${first}\n${second}\n${mind}`)

writeFileSync('./content/result-sync.txt', '\nDoes this append to the file?', {flag:'a'})
console.log(__filename)
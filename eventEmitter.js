const EventEmitter = require('events'); 

const customEmitter = new EventEmitter();

customEmitter.on('response', (var1, var2)=>{
    console.log(`data recieved ${var1}, ${var2}`)
})
customEmitter.emit('response', 'John', 34)
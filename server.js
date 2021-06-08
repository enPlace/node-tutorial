const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end("hello")
})

server.listen(5000, ()=>{
    console.log("port open at 5000...")
}) 






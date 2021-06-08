const http = require('http')


const server = http.createServer((req, res)=>{
if(req.url ==='/'){
    res.end('Home Page')
}
else if(req.url ==='/about'){
    res.end('about page')
}
else res.end("error")

})

server.listen(5000, ()=>{
    console.log("server is listening at port 5000...")
})
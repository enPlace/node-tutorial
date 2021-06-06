const http = require('http')

const server = http.createServer((req, res)=>{
	//req is incoming request
	//res is response, what we are sending back 
	if(req.url ==='/'){
		res.end('Welcome to the machine')
	}
	if(req.url ==='/about'){
		res.end('Where have you been?')
	}
	
	else(
		res.end('You have left the fish bowl.')
	)

})

server.listen(4000)
const os = require('os')


//info about current user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMemory: os.totalmem(),
	freeMemory: os.freemem(),
	cpus: os.cpus(),
	version: os.version()

}
console.log(currentOS.cpus)

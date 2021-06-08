const fs = require('fs'); 

for(let i=0; i<300000; i++){
    fs.writeFileSync('./content/bigfile.txt', `\nbig file line no: ${i}`, {flag:'a'})
}


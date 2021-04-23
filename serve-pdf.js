var http = require('http');
var fs = require('fs');

console.log('Server will listen at : 86.10.40.3:3000');

http.createServer( (req, res) => {

        console.log("Port Number : 3000");

        // Change the MIME type
        res.writeHead(200, {"Content-Type": "application/pdf"});

        fs.readFile('', (error,data) => {
                if(error){
                        res.json({'status':'error', msg:err});
                } else {
                        res.write(data);
                        res.end();
                }
        });

}).listen(3000);

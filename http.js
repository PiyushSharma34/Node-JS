const http =require('http');
const fs= require('fs');


const server = http.createServer(function(req,res){
res.end('<h1>Hello this is http page</h1>')
});

server.listen(8080);
console.log('server is running on port 8080');












// var a =10;
// var b = 20;
// console.log(a+b);
// function ram(){
//     console.log("PIYUSH BHARADWAJ");
// }

// ram();


// var http =require('http');
// http.createServer(function(req,res){
// res.write("Hello Piyush Bharadwaj");
// res.end();

// }).listen(5000)

// const fs  =require("fs");
// fs.writeFileSync("Hello2.txt","Piyush Bharadwaj"); 
// console.log('__dirname');



const http = require("http");
const { default: test } = require("node:test");

http.createServer((req,resp)=>{
resp.write("<h1>Hello piyush  Bharadwaj nsti allalahabad</h1>");
resp.end();
}).listen(4500)
 
const fs =require('fs');

// const file =fs.writeFileSync('dell.txt','this is delll file in piyush laptop')

// const topic='in this is we learn about node.js by gufran sir';

// fs.writeFileSync('dell.txt',topic);

const file =fs.readFileSync('dell.txt','utf-8');

console.log(file);



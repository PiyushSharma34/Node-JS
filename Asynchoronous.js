const fs =require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files');
const filepath=`${dirpath}/appendFile.txt`;

// fs.writeFileSync(filepath,'this is file patha apple file')

// fs.readFile(filepath,'utf8',(err,item) =>{
//     console.log(item)
// })



// fs.appendFile(filepath,'and file is ready for piyush bharadwaj',(err) =>{
// if (!err)console.log("file updated successfully")

// })


// fs.rename(filepath,`${dirpath}/sona.txt`,(err) =>{
// if(!err) console.log("file rename successfully")

// })

fs.unlinkSync(`${dirpath}/sona.txt`); 
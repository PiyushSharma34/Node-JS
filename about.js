// this is code is usefull for display html pages on browser   



const express = require('express')

const path= require('path');   //path method is use for load files from another folder

const app = express();
const publicpath=path.join(__dirname,'public');     //public is a folder there westore html files   

app.set('view engine','ejs');   // this is used for ejs template file display 


// app.use(express.static(publicpath));  


//for this method user write only page name not html for display 

app.get('',(_,res)=>{
    res.sendFile(`${publicpath}/about.html`);
})

app.get('/contact',(_,res)=>{
    res.sendFile(`${publicpath}/contact.html`);
})

app.get('/course',(_,res)=>{                           //Note ==>sendfile method is used for display html files 
    res.sendFile(`${publicpath}/course.html`);
})


app.get('/profile',(_,res)=>{ 
    
    const user={
        name:"Piyush Bharadwaj",
        city:"Allahabad"
    } 
res.render('profile',{user});
})



app.get('*',(_,res)=>{    //this is for error page shows if url is not right
    res.sendFile(`${publicpath}/nopage.html`)
})


app.listen(5000);
const express =require('express');
const app=express();

const reqFilter =(req,res,next)=>{
    if (!req.query.age) {
        res.send("Please confirm age");
    }
    else if (req.query.age<18) {
        res.send("<h1>You can not access this page</h1>") 
    } 
    else{
        next();
    }}


app.use(reqFilter);

app.get('/',(req,res) =>{
    res.send("<h1>Welcome to nsti  allahabad</h1>");
})

app.get('/users',(req,res) =>{
    res.send("<h1>Welcome user in nsti allahabad</h1>");
});

app.listen(3000)
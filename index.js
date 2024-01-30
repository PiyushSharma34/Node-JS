const express=require('express')
const app =express();

app.get('',(req,res) =>{
    res.send(`<h1>Go to new page </h1><a href="/about">New Page</a>`);
})

app.get('/about',(req,res)=>{
    res.send([
        {
            name:"PIyush",
            age:20,
            City:"Rura"
        },
        {
            name:"Raha",
            age:22,
            City:"Allahabad"
        }
    ]
       
    )
});

app.get('/conatct',(req,res)=>{
    res.send(`
    <input type="text" placeholder="username" value=${req.query.name} />
    <button> Save</button>
    
    `)
});
app.listen(5000);
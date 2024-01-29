express =  require('express');
app =express();
port =3000;

app.listen(port,() =>{console.log(`server run ${port}`)});
app.use(express.json());
app.use(express.urlencoded({extended:true}));


laptop = [
    {"name":"dell",
    "price":50000
    },
    {"name":"hp",
    "price":100000
    },
    {"name":"mi",
    "price":15550
    },

    {"name":"sumsung",
    "price":90000
    }
]

app.get("/" ,(req,res,next) => {
console.log("request done.")
res.send('hello')
next();
},
(req,res,next) => {
    console.log("2dn server start")
    // res.send(laptop);
    next();
}),


// res.send(laptop);})


app.post("/",(req,res) => {console.log(req.body)
laptop.push(req.body);
res.sendStatus(201);
res.send(laptop)
})









// function ss() {
//   console.log("piyush bharadwaj");  
// }
// var piyush=ss;
// piyush();




// function hello() {
//     console.log("This is hello project")
// }
// hello();

// function css() {
//     console.log("This is css project")
// }
// // css();

// module.exports.hello=hello
// module.exports.css=css

  
  

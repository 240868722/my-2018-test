var express = require('express');
var app = express();
var wlist = ['http://localhost:3000'];
// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/items");


app.use(function(req,res,next){
    var origin = req.headers.origin;
    if (wlist.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)
        res.setHeader('Access-Control-Allow-Headers', 'name')
        // res.setHeader('Access-Control-Allow-Methods', 'PUT')
        res.setHeader('Access-Control-Expose-Headers', 'name')
        if(req.method ==='OPTIONS'){
            console.log(123)
            res.end()
        }
    }

    next()
})

app.put('/getData',function(req,res){

    // console.log(req.headers)
    res.setHeader('name','niubibo')
    res.end('88888put')
})
app.get('/getData',function(req,res){

    console.log(req.headers)
    res.end('666666')
})
app.post('/getData',function(req,res){

    console.log(req.headers)
    res.end('666666')
})
app.get('/login',function(req,res){

    console.log('login成功')
    res.end('login成功')
})
app.use(express.static(__dirname))
app.listen(4000, () => console.log('Example app listening on port 4000!'))
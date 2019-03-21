var express = require('express');
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/zfpx",{ useNewUrlParser: true });
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0}
});
var PersonModel = mongoose.model("Person", PersonSchema);


var wlist = ['http://localhost:3000']
app.use(function(req,res,next){
    var origin = req.headers.origin;
    if (wlist.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin)}
    next()
})
app.get('/login',function(req,res){
    if(req.query.name){
        PersonModel.create({ name:req.query.name, age:0}, function(error,doc){
            if(error) {
                console.log(error);
            } else {
              
                res.send({
                    code:1,
                    complay:req.query.name,
                    data:doc,
                    success:'成功'
                });
            }
        });

    }else{

        res.send({
            code:0,
            complay:req.query.name,
            data:doc,
            success:'失败'
        })
 

    } 
});
app.get('/search',function(req,res){
    if(req.query.name){
        PersonModel.find({name:req.query.name}, function(error,doc){
            if(error) {
                console.log(error);
            } else {
              if(doc.length>0){
                res.send({
                    code:0,
                    complay:req.query.name,
                    data:doc,
                    success:'成功'
                })
              }else{
                res.send({
                    code:0,
                    complay:req.query.name,
                    data:doc,
                    success:'失败'
                })
              }

            }
        });

    }else{
        PersonModel.find({}, function(error,doc){
            if(error) {
                console.log(error);
            } else {
              if(doc.length>0){
                res.send({
                    code:0,
                    complay:req.query.name,
                    data:doc,
                    success:'成功'
                })
              }else{
                res.send({
                    code:0,
                    complay:req.query.name,
                    data:doc,
                    success:'失败'
                })
              }

            }
        });

    } 
})
app.listen(4000,()=>{console.log('链接成功4000')})
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/zfpx",{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('链接成功')
});
var PersonSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0}
});

// PersonModel的creat方法和 new PersonModel的save方法都是保存
var PersonModel = mongoose.model("Person", PersonSchema);
var person = new PersonModel({name:'niubi',age:666});
person.save(function(err,doc){
    console.log('保存成功')
    console.log(doc)
})
// var PersonModel = mongoose.model("Person", PersonSchema);
// PersonModel.create({ name:"zfpx", age:7}, function(error,doc){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(doc);
//     }
// });


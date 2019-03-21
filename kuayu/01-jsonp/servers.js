const express = require('express')
const app = express()
// jsonp后台接口
app.get('/', (req, res) => res.send('Hello World22!'))
app.post('/say', (req, res) => {
    let {wb,cb} = req.query;
    var text ;
    if(wb==='周杰伦'){
         text = "后台返回的双节棍"
    }
    res.send(`${cb}('${text}')`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
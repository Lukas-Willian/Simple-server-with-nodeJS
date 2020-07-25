
let express = require('express');
let path = require('path');

let app = express()
let port = 8080


app.get('/' , (req,res) =>{
    res.sendFile(path.join(__dirname ,'Teste.html'))
    
})


app.listen(port , () => console.log('Starting Server'));
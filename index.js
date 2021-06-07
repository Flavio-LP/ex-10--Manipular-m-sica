const express = require('express')
const app=express()
const routes = require('./api/routes')
const PORT = process.env.PORT || 8080

app.get('/',function(req,res){
    res.send("por favor insira /listar para ver o conteúdo da API")
})

app.use('/api',routes)

app.listen(PORT,function(){
    console.log("Servidor online, porta:"+PORT)
})


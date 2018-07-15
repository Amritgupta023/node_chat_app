const express = require('express');
const app = express(); 

const path = require('path');

var port = process.env.Port|| 3000;

app.use(express.static(path.join(__dirname,'../public')));

app.listen(port,()=>{
    console.log(`app is listing on port ${port}`);
})
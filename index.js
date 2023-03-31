const express = require('express')

const app= express()

app.get('/', (req , res) => {
    res.send('<h3>Hello World! , Diseño de soluciones en la Nube, Erika Ventura Ramirez<h3>');  
   
});



app.listen(3000)
console.log(`Server on port ${3000}`)
const express = require('express')

const app= express()

app.get('/', (req , res) => {
    res.send('Hello World! , Diseño de soluciones en la Nube, Erika Ventura Ramirez');  
   
});



app.listen(3000)
console.log(`Server on port ${3000}`)
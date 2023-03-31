const express = require('express')

const app= express()

app.get('/', (req , res) => {
    res.send('<h3>Hello World! , Diseño de soluciones en la Nube, Erika Ventura Ramirez<h3>');  
   
});


app.use((req,res) => {
    res.status(404).send('No se encontro tu pagina ...!!!')
    //res.end('No se encontro tu pagina...!') - no reconoce etiqueta
    //res.send('No se encontro')
})

app.listen(3000)
console.log(`Server on port ${3000}`)
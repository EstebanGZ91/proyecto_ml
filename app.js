const express = require('express');
const path = require('path');
const publicFolderPath = path.resolve(__dirname +'/public/css/styles.css');
const app = express();

app.get('/', (req,res) =>{
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
    res.sendFile((__dirname + '/views/home.html'));  // Permite enviar un archivo HTML
});

app.get('/registro', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html'));  
});

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html'));  
});


app.use(express.static(__dirname +'/public'));  

app.use(express.static(__dirname +'/views'));  

app.use('/public/img', express.static(__dirname +'/public/img'));

app.use('/public/css/styles.css',express.static(publicFolderPath))



/*app.listen(3000, () => {
    console.log("Servidor corriendo");
});
*/

app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
})


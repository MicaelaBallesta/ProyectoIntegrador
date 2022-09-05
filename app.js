const express = require("express"); // MODULO EXPRESS
const app = express(); // MODULO EXPRESS EN FUNCIONALIDAD EN APP.JS
const path = require("path"); //  MODULO PATH
app.use(express.static(' ./public ' )); // CSS

app.listen(4000, () => {
    console.log("Servidor funcionando");
  });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas}}




app.get('/', (req,res)=>{
	res.render(__dirname, "index.ejs");
	 }); 
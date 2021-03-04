const express = require ('express');
const app = express();

const port = 5500;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render("index", {titulo:'mi titulo dinamico'})
})

app.get('/servicios', (req, res) => {
  res.render("servicios", {servicios:"servicios desde las rutas"})
})

app.listen(port, () => {
  console.log('el servidor esta a su dispocicion en el puerto', port)
})


//app.use((req, res, next) => {
  //res.status(404).sendFile(__dirname + '/public/404.html')
//})


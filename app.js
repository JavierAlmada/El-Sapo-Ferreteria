const express = require ('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

app.use('/', require('./router/rutasWeb'))

app.listen(port, () => {
  console.log('el servidor esta a su dispocicion en el puerto', port)
})


//app.use((req, res, next) => {
  //res.status(404).sendFile(__dirname + '/public/404.html')
//})


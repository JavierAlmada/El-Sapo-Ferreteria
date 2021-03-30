const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("productos",{
    arrayProductos: [
      {id:'wdc', nombre:'wdcwc', descripcion:'cdwc'},
      {id:'erevefv', nombre:'dcsv', desripcion:'adcwsdw'}
    ]
  })
})

module.exports = router;
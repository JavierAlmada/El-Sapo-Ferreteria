const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index")
})

router.get('/servicios', (req, res) => {
  res.render("servicios")
})

router.get('/carrito', (req, res) => {
  res.render("carrito")
})

module.exports = router
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1234');

  const data = new Date('01 Jan 2024 00:00:00 GMT');

  res.json({
    nome:'Ano Novo',
    data: data.toUTCString(),
});

});

module.exports = router;

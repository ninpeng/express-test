var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.get('/getuser/:username', function(req, res, next) {
  res.send(req.params.username||'error');
});

module.exports = router;

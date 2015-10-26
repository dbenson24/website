var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Derek Benson' });
});
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Derek Benson' });
});
router.get('/bio', function(req, res, next) {
  res.render('bio', { title: 'Derek Benson' });
});

module.exports = router;

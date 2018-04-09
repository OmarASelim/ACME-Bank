var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      "userID": "1",
      "userName": "Jens D Schweitzer",
      "userEmail": "jens@example.com",
      "userPassword": "jens",
      "userAddress": "Neuer Jungfernstieg 23",
      "userCity": "Landshut",
      "userPhone": "08707 92 44 04"
    }
  ]);
});

module.exports = router;
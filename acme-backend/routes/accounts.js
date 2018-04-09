var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([
        {      
            "accountID": "1",
            "accountType": "Saving Account",
            "totalAmount": "561700",
        },
        {   
            "accountID": "2",
            "accountType": "Current Account",
            "totalAmount": "125152",
        }
    ]);
});

module.exports = router;

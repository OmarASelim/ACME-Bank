var express = require('express');
var router = express.Router();

/* GET transactions listing. */
router.get('/', function(req, res, next) {
    res.json([
        {      
            "accountID": "1",
            "transactionID": "1",
            "accountType": "Saving Account",
            "transactionType": "Withdraw",
            "transactionDesc": "Withdrwaing from ATM",
            "transactionDate": "1/1/17",
            "transactionAmount" : "4000"
        }, 
        {
            "accountID": "1",
            "transactionID": "2",
            "accountType": "Current Account",
            "transactionType": "Deposit",
            "transactionDesc": "Salary income",
            "transactionDate": "2/1/17",
            "transactionAmount": "4500"
           
        }
    ]);
});

module.exports = router;

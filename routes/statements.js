var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json([
    {statementName: "prime foods", volume:"100K",fees:"2000",transactionsNumber:""},
    {statementName: "prime foods", volume:"100K",fees:"2000",transactionsNumber:""},
    {statementName: "prime foods", volume:"100K",fees:"2000",transactionsNumber:""},


  ])
});

module.exports = router;

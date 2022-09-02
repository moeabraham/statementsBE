var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json([
    {statementName: "prime foods", volume:"100K",fees:"2s000",transactionsNumber:"1"},
    {statementName: "primerr foodsss", volume:"100K",fees:"200f0",transactionsNumber:"2"},
    {statementName: "primfse forersaods", volume:"100K",fees:"20300",transactionsNumber:"3"},


  ])
});

module.exports = router;

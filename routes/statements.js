var express = require('express');
var router = express.Router();
var statementCtrl = require("../controllers/Statements")
/* GET home page. */
router.get('/', statementCtrl.index);
router.post('/', statementCtrl.create)
router.put('/:id', statementCtrl.update)
router.delete('/:id', statementCtrl.delete)

router.get('/:id', statementCtrl.viewStatement)

module.exports = router;

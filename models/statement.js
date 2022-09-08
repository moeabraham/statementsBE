const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const statementSchema = new Schema({
    statementName: String,
    volume: String,
    fees: String,
    transactionsNumber: String,
    debitPercentage: String,
    debitFees: String,
    merchantDebitFees: String,
    creditPercentage: String,
    creditFees: String,
    merchantCreditFees:String,
    basisPts: String,
    transactionFee: String,
    debitValue:String,
    creditValue: String,

})



module.exports = mongoose.model("Statement", statementSchema)
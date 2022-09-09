const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const statementSchema = new Schema({
    statementName: String,
    volume: String,
    fees: String,
    transactionsNumber: String,

    debitPercentage: String,
    debitInterchange: String,
    debitCardVolume:String,
    merchantDebitFees: String,

    creditPercentage: String,
    creditInterchange: String,
    creditCardVolume:String,
    merchantCreditFees:String,


    basisPts: String,
    transactionFee: String,
    
    debitValue:String,
    creditValue: String,

})



module.exports = mongoose.model("Statement", statementSchema)
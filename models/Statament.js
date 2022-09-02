const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const statementSchema = new Schema({
    statementName: String,
    volume: String,
    fees: String,
    transactionsNumber: String,

})



module.exports = mongoose.model("Statement", statementSchema)
var express= require('express');
var router = express.Router();
var Statement = require('../models/statement');


// router.get("/", function(req, res){
//     res.status(200).res.json([
//         {statementName: "prime foods", volume:"100K",fees:"2s000",transactionsNumber:"1"},
//     {statementName: "primerr foodsss", volume:"100K",fees:"200f0",transactionsNumber:"2"},
//     {statementName: "primfse forersaods", volume:"100K",fees:"20300",transactionsNumber:"3"},

//     ])
// })
module.exports = {
    index,
    create,
    update,
    delete: deleteStatement,
    viewStatement

}
// function index(req, res){
//     Statement.find({}, function(err, statements){
//         res.status(200).json(statements)
//     })
// }


function index(req, res){
    // res.status(200).json([{statementName: "prime tamam", volume:"100K",fees:"2s000",transactionsNumber:"1"},
    //     {statementName: "primerr foodsss", volume:"100K",fees:"200f0",transactionsNumber:"2"},
    //     {statementName: "primfse forersaods", volume:"100K",fees:"20300",transactionsNumber:"3"},
    // ])
    Statement.find({}, function(err, statements){
        res.status(200).json(statements)
    })
}

function create(req, res){
    console.log(req)
    Statement.create(req.body, function(err, statement){
        res.status(201).json(statement)
    })
}

function update(req, res){
    // console.log(req)       
     console.log(req.body)

    Statement.findByIdAndUpdate(req.params.id, req.body, function(){
        // console.log(req.params.id)
        console.log(req.body)
        // console.log(statement)
        index(req, res)
    })
}

function deleteStatement(req, res){
    Statement.findByIdAndDelete(req.params.id, function(err, statement){
        index(req,res)
    })
}

function viewStatement(req, res){
    Statement.findById(req.params.id, function(err, statement){
        console.log(statement)
        res.status(200).json(statement)

    // Statement.findById(req.params.id)
    // .then(statement => res.json(statement))
    // .catch(err => res.status(404).json({nostatement:"nostatement"}))

     })
}
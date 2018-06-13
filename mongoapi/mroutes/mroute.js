var exp = require('express');
var companies=require('../schema/schema')
var route = exp.Router();

route.get('/companies/:name',(req,res)=>{
    let name=req.params.name;
    companies.find({name:name},(err,data)=>{
        if(err){
            res.json({});
        }else{
            res.json(data);
        }
    });
})

module.exports = route;
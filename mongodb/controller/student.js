const routes = require('express').Router();
var student = require('../models/students');


//var insert = new student({
//            name:"Superman",
//            rollno:321080,
//            grno:"17u380",
//            totalMark:350,
//            pid:4,
//            year:3
//});
//                        
//insert.save(function(err){
//    if(err) throw err;
//    console.log("student data saved successfully");
//})
//
//var insert = new student({
//            name:"Batman",
//            rollno:321081,
//            grno:"17u381",
//            totalMark:250,
//            pid:4,
//            year:3
//});
//                        
//insert.save(function(err){
//    if(err) throw err;
//    console.log("student data saved successfully");
//})
//
//var insert = new student({
//            name:"Antman",
//            rollno:321082,
//            grno:"17u382",
//            totalMark:450,
//            pid:4,
//            year:3
//});
//
//insert.save(function(err){
//    if(err) throw err;
//    console.log("student data saved successfully");
//})
//
//var insert = new student({
//            name:"Ironman",
//            rollno:321083,
//            grno:"17u383",
//            totalMark:550,
//            pid:4,
//            year:3
//});
//
//insert.save(function(err){
//    if(err) throw err;
//    console.log("student data saved successfully");
//})

routes.post('/getStudentList',(req,res) => {
    var id = req.body.id;
    console.log(id);
    student.find({'pid':id},function(err,result){
        if(err)
            throw err;
        console.log(result);
        res.send(result);
    })
});

module.exports = routes;
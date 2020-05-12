const routes = require('express').Router();

var project = require('../models/project');


//var insert = new project({
//            name:"project 3",
//            pid : 4,
//            pcount:4
//});
//                        
//insert.save(function(err){  
//    if(err) throw err;
//    console.log("project saved successfully");
//})

routes.get('/getProjectList',(req,res) => {
    project.find({},function(err,result){
        if(err)
            throw err;
        res.send(result);
    })
});

module.exports = routes;
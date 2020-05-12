var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var project = new Schema({
    name : {
        type : String
    },

    pid : {
        type : Number
    },

    pcount : {
        type : Number
    }

});

var project = mongoose.model('project',project);
module.exports = project;
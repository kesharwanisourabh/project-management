var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var student = new Schema({
    name : {
        type : String,
    },

    rollno : {
        type : Number
    },

    grno : {
        type : String
    },

    totalMark : {
        type : Number
    },

    year : {
        type : Number
    },
    
    pid : {
        type : Number
    }

});

var student = mongoose.model('student',student);
module.exports = student;
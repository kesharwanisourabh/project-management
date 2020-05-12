var express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

const student = require('./controller/student');
const project = require('./controller/project');


//Connect to mongodb
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MiniProject');

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.use(express.static(__dirname));

app.use('/',student);
app.use('/',project);


app.listen(3000,() => {
    console.log('App listening on port 3000');
})
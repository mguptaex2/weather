var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var verify=require('./verify');
var register=require('./register');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
 
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
 
/* route to handle login and registration */
app.post('/api/register',register.register);
app.post('/api/verify',verify.verify);
 
console.log(verify);
app.post('/register', register.register);
app.post('/verify', verify.verify);
app.listen(8012);

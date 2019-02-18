var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

//koneksi database
mongoose.connect(config.database,{ useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// we're connected!
	console.log('Connected to MongoDB')
});


// initial
var app = express();

//setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup publik folder
app.use(express.static(path.join(__dirname, 'public')));

//membuat halaman index
app.get('/', function(req, res){
    res.render('index', {
       title:'home' 
    })
});

//setup server
var port =3000;
app.listen(port, function(){
    console.log("server sukses listen to " + port);

}); 



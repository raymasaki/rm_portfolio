//*********** DEPENDENCIES ***********//


var express   = require('express');
var app       = express();
var morgan    = require('morgan');



//*********** CONFIGURATION ***********//


app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


//*********** PORT ***********//


app.listen(3000, function () {
    console.log('Listening on port 3000...');
});

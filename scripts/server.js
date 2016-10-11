/**
 * Created by raul on 8/17/2016.
 */
var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(process.env.PORT || 8000);
console.log('Listening to port 8000...');

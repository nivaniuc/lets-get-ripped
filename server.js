var express = require ('express');
var mongoose = require ('mongoose');
var morgan = require ('morgan');
var path = require ("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(logger("dev"));


// I need to work on MONGO so I'll have to figure this out later
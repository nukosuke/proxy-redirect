var express = require('express');
var URLController = require('./url_controller');
var app = express();

urlCtrl = new URLController();

app.get('/:id', urlCtrl.get);

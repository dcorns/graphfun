/**
 * Created by dcorns on 6/19/14.
 */
'use strict';
var app = require('express')();
var server = require('http').Server(app);


server.listen(3000);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html'); //Handshake using http
});

app.get('/control.js', function(req, res){
  res.sendfile(__dirname + '/control.js');
});


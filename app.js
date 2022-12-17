var mongoose= require('mongoose');
var express = require('express');
var db = require('./connection/db')
var app = express();
var bodyParser =  require("body-parser");
var expressValidator = require("express-validator");
const path  = require('path');
const port = process.env.port || 3000;

var cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
// app.use(expressValidator());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'upload')));
app.use(express.static(path.join(__dirname,'public')));



app.engine('html',require('ejs').renderFile);
app.set("view engine","html");
app.set("views","views");

const loancontroller = require('./controller/loancontroller');
const { access } = require('fs');

app.use("/loan", loancontroller)

app.listen(port);
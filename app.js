const express = require('express');
const bodyParser = require('body-parser');
const _ = require("lodash");
const mongoose = require('mongoose');
const ejs = require("ejs");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function(req,res){
  res.redirect('login');
});

app.get("/login", function(req,res){
  res.sendFile(__dirname + "/login.html")
});

app.post("/")

app.listen(3000, function(){
  console.log("Server is up and runnign at port 30000");
});

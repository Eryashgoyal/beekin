const express = require("express")
let mysql = require('mysql')
var bodyParser=require('body-parser')
var jobCtrl=require('./controllers/jobsController')
const jobs=require('./models/jobs')
const app = express()

app.use(bodyParser.json())
app.get('/',function (req,res){

  res.send('hello')
})


app.get('/add',jobCtrl.addjob)
app.get('/getjob',jobCtrl.addjob)


jobs.sync({force: true});

app.listen(3000,()=>{

  console.log("App is running and listing on port 3000");
})








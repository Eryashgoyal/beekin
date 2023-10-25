var db=require('../models')
var Job=db.jobs;
var addjob =async (req,res)=>{

const jane = await Job.create({ title: "SDE-2"});
res.status(200).json(jane.toJSON())
}

var getjob=async (req,res)=>{

    const data = await Job.findAll({});
    res.status(200).json({data:data})
}

module.exports={
    addjob,
    getjob
}
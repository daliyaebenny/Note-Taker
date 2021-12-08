//create route outside server
const path = require('path');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const notes = require('express').Router();




notes.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

notes.post('/notes',(req,res)=>{
  console.info(`${req.method} request received to add notes`);
  console.log(req.body);
 // const {tiltle,text} = req.body;
 if(req.body){
 readAndAppend('./db/db.json',req.body);
 res.json('Note added succesfully');
 }
 else{
   res.error('Failed to add note');
 }
});


  module.exports = notes;
//create route outside server
const path = require('path');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const router = require('express').Router();
const fs = require('fs');
const uniqid = require('uniqid');




router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// router.post('/api/notes',(req,res)=>{
//   readFromFile('./db/db.json')
//   .then((data)=>{
//     const dbNotes = JSON.parse(data);
//     console.log(dbNotes);
//     const newNotes = req.body;
//     const id = 'id';
//     const noteId = uniqid();
//     newNotes[id] = noteId;
//     dbNotes.push(newNotes);
//     fs.writeFile('db/db.json',JSON.stringify(dbNotes),(err)=>{
//       if (err) throw err;
//       res.json(dbNotes);
//     })
//   }) 
// });


// DELETE Route for a specific note
// router.delete('api/notes/:id', (req, res) => {
//   const noteId = req.params.id;
//   readFromFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       // Make a new array of all notes except the one with the ID provided in the URL
//       const result = json.filter((notes) => notes.id !== noteId);

//       // Save that array to the filesystem
//       writeToFile('./db/db.json', result);

//       // Respond to the DELETE request
//       res.json(`Item ${noteId} has been deleted 🗑️`);
//     });
// });






  module.exports = router;
// Import express package
const express = require('express');
const homeRoutes = require('./routes/homeroutes')
const notes = require('./routes/note');

 // Require the JSON file and assign it to a variable called `termData`
// const noteData = require('./db/db.json');
// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(homeRoutes);
app.use(notes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

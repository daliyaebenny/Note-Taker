// Import express package
const express = require('express');
const homeRoutes = require('./routes/homeroutes')

 // Require the JSON file and assign it to a variable called `termData`
// const noteData = require('./db/db.json');
// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(homeRoutes);
// app.get('/', (req, res) => res.send('Visit http://localhost:3001/api'));

// res.json() allows us to return JSON instead of a buffer, string, or static file
// app.get('/api/notes', (req, res) => res.json(noteData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

// Import express package
const express = require('express');
const homeRoutes = require('./routes/homeroutes')
const notes = require('./routes/note');

 
// Initialize our app variable by setting it to the value of express()
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(notes);
app.use(homeRoutes);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

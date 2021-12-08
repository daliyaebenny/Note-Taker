const express = require('express');
const notesRouter = require('./note.js');
const router = express.Router();

router.route('/api', notesRouter);

module.exports = router;




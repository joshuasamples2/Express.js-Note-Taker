const router = require('express').Router();
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    notes
      .getNotes()
      .then((notes) => {
          return res.json(notes)
      })
      .catch((err) => {
        res.status(500).json(err);
      })
    
});

router.post('/notes', (req, res) => {
    notes
      .addNote(req.body)
      .then((notes) => {
          return res.json(notes)
      })
      .catch((err) => {
        res.status(500).json(err);
      })
});

module.exports = router;
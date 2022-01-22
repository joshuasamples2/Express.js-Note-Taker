const express = require('express');
const apiRoutes = require('./routes/api.js');
const notesRoutes = require('./routes/notes.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', notesRoutes);

app.listen(PORT, () =>
    console.log(`App started at http://localhost:${PORT}`)
);
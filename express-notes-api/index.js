const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const returnArray = [];
  for (const x in data.notes) {
    returnArray.push(data.notes[x]);
  }
  res.status(200).json(returnArray);
});

app.get('/api/notes/:id', (req, res) => {
  const reqIDNum = Number.parseInt(req.params.id, 10);
  if (reqIDNum <= 0 || !Number.isInteger(reqIDNum)) {
    res.status(400).json({ Error: 'Please use a postive integer greater than zero.' });
  } else if (reqIDNum > 0) {
    if (data.notes[req.params.id] !== undefined) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      res.status(404).json({ Error: `Your requested note with id ${reqIDNum} cannot be found. Please check your request ID and try again.` });
    }
  }
});

const appJSON = express.json();
app.use(appJSON);

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    data.notes[data.nextId] = req.body;
    data.notes[data.nextId].id = data.nextId;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) res.status(500).json({ error: 'An unexpected error occured.' });
      else {
        res.status(201).json(data.notes[data.nextId]);
        data.nextId++;
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const reqIDNum = Number.parseInt(req.params.id, 10);
  if (reqIDNum <= 0 || !Number.isInteger(reqIDNum)) {
    res.status(400).json({ Error: 'Please use a postive integer greater than zero.' });
  } else if (reqIDNum > 0) {
    if (data.notes[req.params.id] !== undefined) {
      delete data.notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
        if (err) res.status(500).json({ error: 'An unexpected error occured.' });
        else { res.sendStatus(204); }
      });
    } else {
      res.status(404).json({ Error: `Your requested note with id ${reqIDNum} cannot be found. Please check your request ID and try again.` });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const reqIDNum = Number.parseInt(req.params.id, 10);
  if (reqIDNum <= 0 || !Number.isInteger(reqIDNum)) {
    res.status(400).json({ Error: 'Please use a postive integer greater than zero.' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[req.params.id] === undefined) {
    res.status(404).json({ Error: `Your requested note with id ${reqIDNum} cannot be found. Please check your request ID and try again.` });
  } else {
    data.notes[req.params.id] = req.body;
    data.notes[req.params.id].id = reqIDNum;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
      if (err) res.status(500).json({ error: 'An unexpected error occured.' });
      else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Currently listening on port 3000');
});

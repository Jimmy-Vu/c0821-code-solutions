const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    }).catch(err => {
      // eslint-disable-next-line no-console
      console.log(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

const appJSON = express.json();
app.use(appJSON);

app.post('/api/grades', (req, res) => {
  const params = [req.body.name, req.body.course, req.body.score];
  const sql = `insert into "grades"
                           ("name", "course", "score")
                            values($1, $2, $3)
                            returning *`;
  const score = Number.parseInt(req.body.score, 10);
  if (score < 0 || score > 100) {
    res.status(400).json({
      error: 'Please use a score between 0 and 100;'
    });
    return;
  }
  if (typeof params[0] !== 'string' || params[0].length === 0) {
    res.status(400).json({
      error: 'Please enter a valid name.'
    });
    return;
  }
  if (typeof params[1] !== 'string' || params[1].length === 0) {
    res.status(400).json({
      error: 'Please enter a valid course.'
    });
    return;
  }
  if (typeof score !== 'number') {
    res.status(400).json({
      error: 'Please enter a valid score.'
    });

  }
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const input = [req.body.name, req.body.course, req.body.score];
  const score = Number.parseInt(req.params.gradeId, 10);
  const id = Number.parseInt(req.params.gradeId, 10);
  const sql = `update "grades"
               set "name" = '${input[0]}',
                   "course" = '${input[1]}',
                   "score" = ${input[2]}
               where "gradeId" = ${id}
               returning *;
  `;
  if (input[2] < 0 || input[2] > 100) {
    res.status(400).json({
      error: 'Please use a score between 0 and 100;'
    });
    return;
  }
  if (typeof input[0] !== 'string' || input[0].length === 0) {
    res.status(400).json({
      error: 'Please enter a valid name.'
    });
    return;
  }
  if (typeof input[1] !== 'string' || input[1].length === 0) {
    res.status(400).json({
      error: 'Please enter a valid course.'
    });
    return;
  }
  if (typeof score !== 'number') {
    res.status(400).json({
      error: 'Please enter a valid score.'
    });
    return;
  }
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Your requested note with id ${id} cannot be found. Please check your request ID and try again.` });
      } else {
        res.status(200).json({ name: input[0], course: input[1], score: input[2] });
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = Number.parseInt(req.params.gradeId, 10);
  const sql = `delete from "grades"
               where "gradeId" = ${id}
               returning *`;
  db.query(sql)
    .then(result => {
      const grade = result.rowCount;
      if (grade === 0) {
        res.status(404).json({ error: `Your requested note with id ${id} cannot be found. Please check your request ID and try again.` });
        return;
      }
      res.status(204).send('Grade has been deleted.');
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Currently listening on port 3000');
});

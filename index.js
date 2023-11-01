import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let tasks = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/submit', (req, res) => {
  tasks.push(req.body.addTask);
  res.render('index.ejs', { tasks: tasks });
  console.log(tasks);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

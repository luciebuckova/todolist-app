import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
let tasks = [];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs', { tasks: tasks });
});

app.post('/submit', (req, res) => {
  tasks.push(req.body.addTask);
  res.redirect('/');
});

app.post('/edit', (req, res) => {
  res.render('edit.ejs', { tasks: tasks, task: req.body.edit });
});

app.post('/update', (req, res) => {
  const editedTask = req.body.editedTask;
  const taskId = req.body.taskId;
  tasks[taskId] = editedTask;
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const taskId = req.body.taskId;
  tasks.splice(taskId, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import setupTasks from './tasksSetup.js';
import setupRoutes from './tasksRoutes.js';

const app = express();
const port = 3000;
const tasks = setupTasks();

app.locals.tasks = tasks;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/', setupRoutes(tasks));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

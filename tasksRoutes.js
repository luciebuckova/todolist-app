import express from 'express';
const router = express.Router();
import { addTask } from './controllers/addTaskController.js';
import { editTask } from './controllers/editTaskController.js';
import { updateTask } from './controllers/updateTaskController.js';
import { deleteTask } from './controllers/deleteTaskController.js';

function setupRoutes(tasks) {
  router.get('/', (req, res) => {
    res.render('index.ejs', { tasks: tasks });
  });

  router.post('/submit', addTask(tasks));

  router.post('/edit', editTask(tasks));

  router.post('/update', updateTask(tasks));

  router.post('/delete', deleteTask(tasks));

  return router;
}

export default setupRoutes;

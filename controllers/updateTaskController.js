function updateTask(tasks) {
  return (req, res) => {
    const editedTask = req.body.editedTask;
    const taskId = req.body.taskId;
    tasks[taskId] = editedTask;
    res.redirect('/');
  };
}

export { updateTask };

function deleteTask(tasks) {
  return (req, res) => {
    const taskId = req.body.taskId;
    tasks.splice(taskId, 1);
    res.redirect('/');
  };
}

export { deleteTask };

function editTask(tasks) {
  return (req, res) => {
    res.render('edit.ejs', { tasks: tasks, task: req.body.edit });
  };
}

export { editTask };

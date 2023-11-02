function addTask(tasks) {
  return (req, res) => {
    const newTask = req.body.addTask;
    tasks.push(newTask);
    res.redirect('/');
  };
}

export { addTask };

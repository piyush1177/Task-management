const db = require("../config/db");

// CREATE TASK
exports.createTask = (req, res) => {
  const { title, description, status } = req.body;
  const userId = req.user.id;

  db.query(
    "INSERT INTO tasks (title, description, status, user_id) VALUES (?, ?, ?, ?)",
    [title, description, status || "Pending", userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task created successfully" });
    }
  );
};

// GET ALL TASKS (USER SPECIFIC)
exports.getTasks = (req, res) => {
  const userId = req.user.id;

  db.query(
    "SELECT * FROM tasks WHERE user_id = ?",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

// UPDATE TASK
exports.updateTask = (req, res) => {
  const { title, description, status } = req.body;
  const taskId = req.params.id;
  const userId = req.user.id;

  db.query(
    "UPDATE tasks SET title=?, description=?, status=? WHERE id=? AND user_id=?",
    [title, description, status, taskId, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task updated successfully" });
    }
  );
};

// DELETE TASK
exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id;

  db.query(
    "DELETE FROM tasks WHERE id=? AND user_id=?",
    [taskId, userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task deleted successfully" });
    }
  );
};

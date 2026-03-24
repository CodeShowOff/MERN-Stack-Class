import express from "express";

const app = express();

import fs from "fs";
import path from "path";

app.use(express.json());

const TODOS_FILE = path.join(__dirname, "todos.json");

function readTodos() {
  try {
    const data = fs.readFileSync(TODOS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });
  const todos = readTodos();
  todos.push({ task });
  writeTodos(todos);
  res.status(201).json({ message: "Task added", todos });
});

app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.put("/todos/:index", (req, res) => {
  const { index } = req.params;
  const { task } = req.body;
  const todos = readTodos();
  if (!todos[index]) return res.status(404).json({ error: "Task not found" });
  if (!task) return res.status(400).json({ error: "Task is required" });
  todos[index] = { task };
  writeTodos(todos);
  res.json({ message: "Task replaced", todos });
});

app.patch("/todos/:index", (req, res) => {
  const { index } = req.params;
  const { task } = req.body;
  const todos = readTodos();
  if (!todos[index]) return res.status(404).json({ error: "Task not found" });
  if (!task) return res.status(400).json({ error: "Task is required" });
  todos[index].task = task;
  writeTodos(todos);
  res.json({ message: "Task updated", todos });
});

app.delete("/todos/:index", (req, res) => {
  const { index } = req.params;
  const todos = readTodos();
  if (!todos[index]) return res.status(404).json({ error: "Task not found" });
  todos.splice(index, 1);
  writeTodos(todos);
  res.json({ message: "Task deleted", todos });
});

app.listen(3000, () => {
  console.log("Listening on port:3000");
});
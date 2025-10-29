import * as SQLite from "expo-sqlite";

let db;

export async function initDB() {
  db = await SQLite.openDatabaseAsync("todo.db");
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL
    );
  `);
  console.log("✅ Database ready!");
}

export async function insertTask(text) {
  await db.runAsync("INSERT INTO tasks (text) VALUES (?);", [text]);
}

export async function getTasks() {
  return await db.getAllAsync("SELECT * FROM tasks ORDER BY id DESC;");
}

export async function updateTask(id, text) {
  await db.runAsync("UPDATE tasks SET text = ? WHERE id = ?;", [text, id]);
}

export async function deleteTask(id) {
  await db.runAsync("DELETE FROM tasks WHERE id = ?;", [id]);
}

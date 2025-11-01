import * as SQLite from "expo-sqlite";

// ✅ Dùng openDatabaseSync thay vì openDatabase
const db = SQLite.openDatabaseSync("expense.db");

export const initDB = () => {
  db.execAsync(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      amount REAL,
      type TEXT,
      createdAt TEXT,
      deleted INTEGER DEFAULT 0
    );
  `);
};

export const ExpenseDB = {
  getAll: async (callback: (data: any[]) => void) => {
    const result = await db.getAllAsync("SELECT * FROM expenses WHERE deleted = 0 ORDER BY createdAt DESC");
    callback(result);
  },

  getDeleted: async (callback: (data: any[]) => void) => {
    const result = await db.getAllAsync("SELECT * FROM expenses WHERE deleted = 1 ORDER BY createdAt DESC");
    callback(result);
  },

  add: async (title: string, amount: number, type: string, callback?: () => void) => {
    await db.runAsync(
      "INSERT INTO expenses (title, amount, type, createdAt) VALUES (?, ?, ?, datetime('now'))",
      [title, amount, type]
    );
    callback?.();
  },

  update: async (id: number, title: string, amount: number, type: string, callback?: () => void) => {
    await db.runAsync(
      "UPDATE expenses SET title=?, amount=?, type=? WHERE id=?",
      [title, amount, type, id]
    );
    callback?.();
  },

  delete: async (id: number, callback?: () => void) => {
    await db.runAsync("UPDATE expenses SET deleted=1 WHERE id=?", [id]);
    callback?.();
  },

  deleteCompletely: async (id: number, callback?: () => void) => {
    await db.runAsync("DELETE FROM expenses WHERE id=?", [id]);
    callback?.();
  },

  restore: async (id: number, callback?: () => void) => {
    await db.runAsync("UPDATE expenses SET deleted=0 WHERE id=?", [id]);
    callback?.();
  },

  clearAll: async (callback?: () => void) => {
    await db.runAsync("DELETE FROM expenses");
    callback?.();
  },
};

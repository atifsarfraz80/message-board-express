import { pool } from "./pool.js";

export async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT id, text, username AS user, added FROM messages ORDER BY added DESC"
  );
  return rows;
}

export async function getMessageById(id) {
  const { rows } = await pool.query(
    "SELECT id, text, username AS user, added FROM messages WHERE id = $1",
    [id]
  );
  return rows[0];
}

export async function insertMessage(text, user) {
  await pool.query(
    "INSERT INTO messages (text, username) VALUES ($1, $2)",
    [text, user]
  );
}
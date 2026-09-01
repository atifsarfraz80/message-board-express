import { pool } from "./pool.js";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  username VARCHAR(255) NOT NULL,
  added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
  ('Keseo bhai!', 'Atif'),
  ('Bakchodi mat kar loray!', 'Usman'),
  ('Mar mar ky kutta bana don ga', 'Hammad');
`;

async function main() {
  console.log("Seeding database...");
  try {
    await pool.query(SQL);
    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding database:", err);
  } finally {
    await pool.end();
  }
}

main();
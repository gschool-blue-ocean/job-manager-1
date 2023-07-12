import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";

//dotenv.config({ path: "../.env" });

console.log(process.env.DATABASE_URL, process.env.PORT);

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT;

// app.get("/api/users", (req, res) => {
//   sql`SELECT * FROM users WHERE is_admin = false`
//     .then((students) => {
//       res.json(students);
//     })
//     .catch((error) => {
//       console.error("Error retrieving students:", error);
//       res.status(500).json({ error: "Failed to retrieve students" });
//     });
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

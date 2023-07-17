// import { sql } from "../server.js";

// export const getUsers = async (req, res) => {
//   const users = await sql`SELECT * FROM users WHERE is_admin = false`;

//   res.status(200).json({
//     users,
//   });
// };

// app.get("/api/users/:name", (req, res) => {
//     const { name } = req.params; // Access the parameter from req.params instead of req.body

//     sql`SELECT * FROM users WHERE name = ${name}` // Use template string syntax `${}` to interpolate the parameter
//       .then((students) => {
//         res.json(students);
//       })
//       .catch((error) => {
//         console.error("Error retrieving students:", error);
//         res.status(500).json({ error: "Failed to retrieve students" });
//       });
//   });

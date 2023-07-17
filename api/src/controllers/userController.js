import { sql } from "../server.js";

export const getUsers = async (req, res) => {
  console.log("made it in the users route");
  const allUsers = await sql`SELECT * FROM users;`;


  res.status(200).json({
    allUsers,
  });
};

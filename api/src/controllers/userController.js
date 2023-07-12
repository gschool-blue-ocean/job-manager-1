import { sql } from "../server.js";

export const getUsers = async (req, res) => {
  const allUsers = await sql`SELECT * FROM users WHERE is_admin = false`;

  res.status(200).json({
    allUsers,
  });
};

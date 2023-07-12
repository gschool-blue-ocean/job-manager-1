import { sql } from "../server.js";

export const createUser = (req, res) => {
  const {email, password, name, is_admin} = req.body
};

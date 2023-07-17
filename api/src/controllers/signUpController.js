import { sql } from "../server.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../.env" });

console.log(process.env.JWT_TOKEN);

export const createStudent = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Add user to database if they don't exist check on their email
    const alreadyExists =
      await sql`SELECT email from users WHERE email = ${email};`;

    console.log(alreadyExists.length);

    if (!alreadyExists.length === 0) {
      throw new Error("This account already exists, create a new one!");
    }

    // Add user if it's unique
    const addedUser =
      await sql`INSERT INTO users(name, email, password, is_admin) VALUES(${name}, ${email}, ${password}, true) RETURNING *;`;

    console.log("addedUser", addedUser[0].id);

    const createStudentInfo =
      await sql`INSERT INTO student_info(user_id, name) VALUES(${addedUser[0].id}, ${addedUser[0].name}) RETURNING *;`;

    console.log("JWT_TOKEN", process.env.JWT_TOKEN);

    const token = jwt.sign(addedUser[0].id, `${process.env.JWT_TOKEN}`);

    res.status(200).json({
      status: "Success",
      addedUser,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Add user to database if they don't exist check on their email
    const alreadyExists =
      await sql`SELECT email from users WHERE email = ${email};`;

    console.log(alreadyExists.length);

    if (!alreadyExists.length === 0) {
      throw new Error("This account already exists, create a new one!");
    }

    // Add user if it's unique
    const addedUser =
      await sql`INSERT INTO users(name, email, password, is_admin) VALUES(${name}, ${email}, ${password}, true) RETURNING *;`;

    console.log("addedUser", addedUser[0].id);

    console.log("JWT_TOKEN", process.env.JWT_TOKEN);

    const token = jwt.sign(addedUser[0].id, `${process.env.JWT_TOKEN}`);

    res.status(200).json({
      status: "Success",
      addedUser,
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ err: err.message });
  }
};

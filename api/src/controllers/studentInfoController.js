import { sql } from "../server.js";
import jwt from "jsonwebtoken";

export const addStudentInfo = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    console.log(token);
    // if token doesnt exist, return error
    if (!token) throw new Error("No Session Found");
    // if token exists, get user id from token
    const { id: userId } = jwt.verify(token, process.env.JWT_SECRET);

    const {
      name,
      personal_narrative,
      course_standing,
      security_clearance,
      ed_background,
      degree_status,
      career_service_manager,
      linkedin_url,
      hunter_url,
      cohort_id,
    } = req.body;

    // add information to that students info

    const addedStudentInfo = await sql`
    INSERT INTO student_info( 
      name,
      personal_narrative,
      course_standing,
      security_clearance,
      ed_background,
      degree_status,
      career_service_manager,
      linkedin_url,
      hunter_url,
      user_id,
      ) 
      
    VALUES( 
      ${name},
      ${personal_narrative},
      ${course_standing},
      ${security_clearance},
      ${ed_background},
      ${degree_status},
      ${career_service_manager},
      ${linkedin_url},
      ${hunter_url},
      ${userId},
) 
WHERE user_id = ${userId} RETURNING *;`;

    res.status(200).json({
      status: "Success",
      addedStudentInfo,
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "failed",
      err: err.message,
    });
  }
};

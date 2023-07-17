import { sql } from "../server.js";

export const createCohort = async (req, res) => {
  // create cohort
  // get info for adding to cohort
  const { name, start_date } = req.body;

  const addedCohort = await sql`INSERT `;
};

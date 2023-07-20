import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";
import { authMiddleware } from "./middleware/middleware.js";

// dotenv.config({ path: "../.env" });

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT;

app.get("/api/studentInfo/:id/deliverables/completed", async (req, res) => {
  const { id } = req.params;

  try {
    const queryResult = await sql`
      SELECT COUNT(*) AS completed_deliverables_count
      FROM deliverables AS d
      INNER JOIN deliverable_statuses AS ds ON d.id = ds.deliverable_id
      WHERE d.student_info_id = ${id} AND ds.is_completed = true;
    `;

    const completedDeliverablesCount =
      queryResult[0].completed_deliverables_count;
    res.json({ completedDeliverablesCount });
  } catch (error) {
    console.error("Error fetching completed deliverables count:", error);
    res
      .status(500)
      .json({ error: "Failed to retrieve completed deliverables count" });
  }
});

app.get("/api/studentInfo", (req, res) => {
  const { name } = req.query; // Access the parameter from req.params
  if (name) {
    sql`SELECT *
    FROM student_info
    WHERE LOWER(name) LIKE LOWER(${name} || '%')
     `

      .then((students) => {
        res.json(students);
      })
      .catch((error) => {
        console.error("Error retrieving students:", error);
        res.status(500).json({ error: "Failed to retrieve students" });
      });
  } else {
    console.log(req.query);
    sql`SELECT *
  FROM student_info
   `
      .then((data) => {
        res.json(data);
        console.log();
      })
      .catch((error) => {
        console.error("Error retrieving info:", error);
        res.status(500).json({ error: "Failed to retrieve info" });
      });
  }
});

//get all cohorts
app.get("/api/cohorts", (req, res) => {
  sql`
    SELECT *
    FROM cohorts
  `
    .then((result) => {
      console.log("Cohorts:", result);
      res.json(result);
    })
    .catch((error) => {
      console.error("Error retrieving cohorts:", error);
      res.status(500).json({ error: "Failed to retrieve cohorts" });
    });
});

//query for student info by cohort id
app.get("/api/studentInfo/:id", (req, res) => {
  const id = req.params.id; // Retrieve the id from the URL parameters

  sql`SELECT * FROM student_info WHERE cohort_id = ${id}`
    .then((result) => {
      console.log("students_backend", result);
      res.json(result);
    })
    .catch((error) => {
      console.error("Error retrieving students:", error);
      res.status(500).json({ error: "Failed to retrieve students" });
    });
});

//creating new cohort
app.post("/api/cohorts", (req, res) => {
  const { cohortName, startDate, students } = req.body;
  console.log(cohortName, startDate, students);
  const newCohort = sql`
    INSERT INTO cohorts (name, start_date)
    VALUES (${cohortName}, ${startDate}) RETURNING *
  `;

  newCohort
    .then((result) => {
      const cohortId = result[0].id;
      const updatePromises = students.map((student) => {
        console.log("Student ID:", student.id);
        return sql`UPDATE student_info SET cohort_id = ${cohortId} WHERE id = ${student.id}`;
      });
      return Promise.all(updatePromises);
    })
    .then(() => {
      res.status(201).json({ message: "Cohort created successfully" });
    })
    .catch((error) => {
      console.error("Error creating cohort:", error);
      res.status(500).json({ error: "Failed to create cohort" });
    })
    .finally(() => {
      // Send a response to complete the request-response cycle
      res.end();
    });
});

//GET REQUEST FOR DILIVERABLES TABLE
app.get("/api/deliverables", (req, res) => {
  sql`
    SELECT *
    FROM deliverables
  `
    .then((result) => {
      console.log("Deliverables:", result);
      res.json(result);
    })
    .catch((error) => {
      console.error("Error retrieving deliverables:", error);
      res.status(500).json({ error: "Failed to retrieve deliverables" });
    });
});

app.get("/api/deliverables/:id", (req, res) => {
  const { id } = req.params;
  sql`SELECT * FROM deliverables WHERE student_info_id = ${id}`
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      console.error("Error retrieving deliverable:", error);
      res.status(500).json({ error: "Failed to retrive deliverable" });
    })
    .finally(() => {
      res.end();
    });
});

app.get("/api/deliverable_statuses/:id", (req, res) => {
  const { id } = req.params;
  sql`SELECT * FROM deliverable_statuses WHERE deliverable_id = ${id}`
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal Server Error" });
    })
    .finally(() => {
      res.end();
    });
});

////////////////////////////
app.patch("/api/deliverable_statuses/:id", (req, res) => {
  const { id } = req.params;
  const { is_completed } = req.body;

  if (typeof is_completed !== "boolean") {
    return res.status(400).json({
      error: "Invalid value for is_completed. It should be a boolean.",
    });
  }
  sql`
    UPDATE deliverable_statuses
    SET is_completed = ${is_completed}
    WHERE deliverable_id = ${id}
  `

    .then(() => {
      res.status(200).json({ message: "Update successful" });
    })
    .catch((error) => {
      console.error("Error updating record:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Assuming you have already set up your app and database connection
// ...

/////////////////////////////////////
app.delete("/api/cohorts/:id", async (req, res) => {
  const cohortId = req.params.id;

  try {
    await sql`UPDATE student_info SET cohort_id = NULL WHERE cohort_id = ${cohortId}`;

    const result = await sql`DELETE FROM cohorts WHERE id = ${cohortId}`;
    console.log("cohort deleted", result);
    res.json(result.rows);
  } catch (error) {
    console.error("Error deleting cohort:", error);
    res.status(500).json({ error: "Failed to delete cohort" });
  }
});

//POST REQUEST TO INSERT SPECIFIC URL'S INTO THE STUDENT_INFO TABLE
// app.post("/api/deliverables", authMiddleware, async (req, res) => {
//   const { name, url } = req.body;

//   try {
//     const userId = req.userId
//     console.log("userId:", userId)
//     console.log("request params:", name, url)
//     const insertOrUpdateDeliverable = await sql`
//       UPDATE deliverables 
//       SET name = ${name}, url = ${url} 
//       WHERE student_id = ${userId}
//       RETURNING *
//     `;
//     console.log(insertOrUpdateDeliverable);
//     res.status(200)
//   } catch (error) {
//     console.error("Error updating links:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// })

app.post("/api/deliverables", authMiddleware, async (req, res) => {
  const { name, url } = req.body;

  try {
    const userId = req.userId;
    console.log("userId:", userId);
    console.log("request params:", name, url);

    const insertNewDeliverable = await sql`
      INSERT INTO deliverables (student_id, name, url, is_submitted)
      VALUES (${userId}, ${name}, ${url}, true)
      RETURNING *
    `;

    console.log(insertNewDeliverable);
    res.status(200).json(insertNewDeliverable); // Send the inserted data back as a response if needed
  } catch (error) {
    console.error("Error inserting new deliverable:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

import postgres from "postgres";
import app from "./middleware/middleware.js";
import dotenv from "dotenv";

// dotenv.config({ path: "../.env" });

export const sql = postgres(process.env.DATABASE_URL);

const PORT = process.env.PORT;

// app.get("/api/studentInfo/:name", (req, res) => {
//   const { name } = req.params; // Access the parameter from req.params

//   sql`SELECT *
//   FROM student_info
//   WHERE LOWER(name) LIKE LOWER(${name} || '%')
//    `

//     .then((students) => {
//       res.json(students);
//     })
//     .catch((error) => {
//       console.error("Error retrieving students:", error);
//       res.status(500).json({ error: "Failed to retrieve students" });
//     });
// });

// app.get("/api/users/:name", (req, res) => {
//   const { name } = req.params; // Access the parameter from req.params

//   sql`SELECT *
//   FROM users
//   WHERE LOWER(name) LIKE LOWER(${name} || '%')
//    `

//     .then((students) => {
//       res.json(students);
//     })
//     .catch((error) => {
//       console.error("Error retrieving students:", error);
//       res.status(500).json({ error: "Failed to retrieve students" });
//     });
// });

//get all student info
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
    FROM cohort
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
    INSERT INTO cohort (name, start_date)
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

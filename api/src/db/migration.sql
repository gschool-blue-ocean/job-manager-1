DROP TABLE IF EXISTS deliverable_statuses;
DROP TABLE IF EXISTS deliverables;
DROP TABLE IF EXISTS student_info;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cohorts;

-- Create the cohorts table
CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY,
  name TEXT,
  start_date TEXT
);

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password TEXT,
  name TEXT,
  is_admin BOOLEAN,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE SET NULL
);


CREATE TABLE student_info (
  id SERIAL PRIMARY KEY,
  name TEXT,
  course_standing TEXT,
  security_clearance TEXT,
  ed_background TEXT,
  degree_status TEXT,
  career_service_manager TEXT,
  cohort_id INTEGER REFERENCES cohorts(id) ON DELETE SET NULL,
  user_id INTEGER REFERENCES users(id)
);


CREATE TABLE deliverables (
  id SERIAL PRIMARY KEY,
  student_info_id INTEGER REFERENCES student_info(id),
  name TEXT,         
  url TEXT,          
  is_completed BOOLEAN DEFAULT FALSE  
);


CREATE TABLE deliverable_statuses (
  id SERIAL PRIMARY KEY,
  deliverable_id INTEGER REFERENCES deliverables(id),
  is_completed BOOLEAN,   
  completed_date TIMESTAMP 
);
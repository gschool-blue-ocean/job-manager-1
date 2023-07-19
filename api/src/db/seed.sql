INSERT INTO users (email, password, name, is_admin)
VALUES ('admin@example.com', 'admin123', 'Admin', true);

-- Insert user data into the "users" table
INSERT INTO users (email, password, name, is_admin)
VALUES
  ('user1@example.com', 'user123', 'User 1', false),
  ('user2@example.com', 'user123', 'User 2', false),
  ('user3@example.com', 'user123', 'User 3', false),
  ('user4@example.com', 'user123', 'User 4', false),
  ('user5@example.com', 'user123', 'User 5', false);

INSERT INTO cohorts (name, start_date) VALUES ('Cohort 1', '2022-01-01');
INSERT INTO cohorts (name, start_date) VALUES ('Cohort 2', '2022-02-01');

INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user1@example.com', 'password1', 'User 1', false, 1);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user2@example.com', 'password2', 'User 2', true, 2);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 1', 'Lorem ipsum dolor sit amet.', 'Senior', 'Secret', 'Computer Science', 'In Progress', 'Manager 1', 1, 1);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 2', 'Lorem ipsum dolor sit amet.', 'Junior', 'Top Secret', 'Electrical Engineering', 'Completed', 'Manager 2', 1, 2);

INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 2', 'https://example.com/assignment2', false);

INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 3', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 4', 'https://example.com/assignment2', false);

INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (1, true, '2023-07-15 10:00:00');
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (2, false, null);

INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (3, true, '2023-07-15 10:00:00');
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (4, false, null);

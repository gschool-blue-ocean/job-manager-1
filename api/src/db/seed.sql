-- INSERT INTO users (email, password, name, is_admin)
-- VALUES ('admin@example.com', 'admin123', 'Admin', true);

-- -- Insert user data into the "users" table
-- INSERT INTO users (email, password, name, is_admin)
-- VALUES
--   ('user1@example.com', 'user123', 'User 1', false),
--   ('user2@example.com', 'user123', 'User 2', false),
--   ('user3@example.com', 'user123', 'User 3', false),
--   ('user4@example.com', 'user123', 'User 4', false),
--   ('user5@example.com', 'user123', 'User 5', false);

-- INSERT INTO cohorts (name, start_date) VALUES ('Cohort 1', '2022-01-01');
-- INSERT INTO cohorts (name, start_date) VALUES ('Cohort 2', '2022-02-01');

-- INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user1@example.com', 'password1', 'User 1', false, 1);
-- INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user2@example.com', 'password2', 'User 2', true, 2);

-- INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
-- VALUES ('Student 1', 'Lorem ipsum dolor sit amet.', 'Senior', 'Secret', 'Computer Science', 'In Progress', 'Manager 1', 1, 1);

-- INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
-- VALUES ('Student 2', 'Lorem ipsum dolor sit amet.', 'Junior', 'Top Secret', 'Electrical Engineering', 'Completed', 'Manager 2', 1, 2);

-- INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 1', 'https://example.com/assignment1', true);
-- INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 2', 'https://example.com/assignment2', false);

-- INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 3', 'https://example.com/assignment1', true);
-- INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 4', 'https://example.com/assignment2', false);

-- INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (1, true, '2023-07-15 10:00:00');
-- INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (2, false, null);

-- INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (3, true, '2023-07-15 10:00:00');
-- INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (4, false, null);




-- Insert user data into the "users" table
INSERT INTO users (email, password, name, is_admin)
VALUES
  ('user1@example.com', 'user123', 'User 1', false),
  ('user2@example.com', 'user123', 'User 2', false),
  ('user3@example.com', 'user123', 'User 3', false),
  ('user4@example.com', 'user123', 'User 4', false),
  ('user5@example.com', 'user123', 'User 5', false),
  ('user6@example.com', 'user123', 'User 6', false),
  ('user7@example.com', 'user123', 'User 7', false),
  ('user8@example.com', 'user123', 'User 8', false),
  ('user9@example.com', 'user123', 'User 9', false),
  ('user10@example.com', 'user123', 'User 10', false);

INSERT INTO cohorts (name, start_date) VALUES ('Cohort 1', '2022-01-01');
INSERT INTO cohorts (name, start_date) VALUES ('Cohort 2', '2022-02-01');

-- Linking users to cohorts
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user1@example.com', 'password1', 'User 1', false, 1);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user2@example.com', 'password2', 'User 2', true, 2);
-- Add the remaining users to their respective cohorts
-- For example:
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user3@example.com', 'password3', 'User 3', false, 1);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user4@example.com', 'password4', 'User 4', false, 1);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user5@example.com', 'password5', 'User 5', false, 1);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user6@example.com', 'password6', 'User 6', false, 2);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user7@example.com', 'password7', 'User 7', false, 2);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user8@example.com', 'password8', 'User 8', false, 2);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user9@example.com', 'password9', 'User 9', false, 2);
INSERT INTO users (email, password, name, is_admin, cohort_id) VALUES ('user10@example.com', 'password10', 'User 10', false, 2);

-- Insert student_info data
INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 1', 'Lorem ipsum dolor sit amet.', 'Senior', 'Secret', 'Computer Science', 'In Progress', 'Manager 1', 1, 1);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 2', 'Lorem ipsum dolor sit amet.', 'Junior', 'Top Secret', 'Electrical Engineering', 'Completed', 'Manager 2', 1, 2);

-- Add the remaining student_info data
-- For example:
INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 3', 'Lorem ipsum dolor sit amet.', 'Senior', 'Top Secret', 'Biology', 'Completed', 'Manager 1', 1, 3);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 4', 'Lorem ipsum dolor sit amet.', 'Junior', 'Secret', 'Physics', 'In Progress', 'Manager 2', 1, 4);

-- Continue adding the remaining student_info data
-- For example:
INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 5', 'Lorem ipsum dolor sit amet.', 'Senior', 'Secret', 'History', 'In Progress', 'Manager 1', 1, 5);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 6', 'Lorem ipsum dolor sit amet.', 'Junior', 'Top Secret', 'Chemistry', 'Completed', 'Manager 2', 2, 6);

-- Add the remaining student_info data
-- For example:
INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 7', 'Lorem ipsum dolor sit amet.', 'Senior', 'Secret', 'Mathematics', 'In Progress', 'Manager 1', 2, 7);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 8', 'Lorem ipsum dolor sit amet.', 'Junior', 'Top Secret', 'Psychology', 'Completed', 'Manager 2', 2, 8);

-- Continue adding the remaining student_info data
-- For example:
INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 9', 'Lorem ipsum dolor sit amet.', 'Senior', 'Top Secret', 'Geology', 'Completed', 'Manager 1', 2, 9);

INSERT INTO student_info (name, personal_narrative, course_standing, security_clearance, ed_background, degree_status, career_service_manager, cohort_id, user_id)
VALUES ('Student 10', 'Lorem ipsum dolor sit amet.', 'Junior', 'Secret', 'Environmental Science', 'In Progress', 'Manager 2', 2, 10);

-- Insert deliverables data
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 2', 'https://example.com/assignment2', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 3', 'https://example.com/assignment3', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 4', 'https://example.com/assignment4', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 5', 'https://example.com/assignment5', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 6', 'https://example.com/assignment6', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 7', 'https://example.com/assignment7', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (1, 'Assignment 8', 'https://example.com/assignment8', true);

INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 2', 'https://example.com/assignment2', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 3', 'https://example.com/assignment3', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 4', 'https://example.com/assignment4', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 5', 'https://example.com/assignment5', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 6', 'https://example.com/assignment6', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 7', 'https://example.com/assignment7', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (2, 'Assignment 8', 'https://example.com/assignment8', true);



-- Add the remaining deliverables data
-- For example:
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (3, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (4, 'Assignment 2', 'https://example.com/assignment2', false);

INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (5, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (6, 'Assignment 2', 'https://example.com/assignment2', false);

-- Continue adding the remaining deliverables data
-- For example:
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (7, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (8, 'Assignment 2', 'https://example.com/assignment2', false);

INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (9, 'Assignment 1', 'https://example.com/assignment1', true);
INSERT INTO deliverables (student_info_id, name, url, is_submitted) VALUES (10, 'Assignment 2', 'https://example.com/assignment2', false);

-- Insert deliverable_statuses data
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (1, false, null);
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (2, false, null);

-- Add the remaining deliverable_statuses data
-- For example:
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (3, false, null);
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (4, false, null);

INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (5, false, null);
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (6, false, null);

-- Continue adding the remaining deliverable_statuses data
-- For example:
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (7, false, null);
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (8, false, null);

INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (9, false, null);
INSERT INTO deliverable_statuses (deliverable_id, is_completed, completed_date) VALUES (10, false, null);
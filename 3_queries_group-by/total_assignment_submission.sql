SELECT cohorts.name as cohort, count(assignment_submissions.*) AS total_submissions
FROM cohorts
JOIN students ON students.cohort_id=cohorts.id
JOIN assignment_submissions ON students.id=assignment_submissions.student_id
GROUP BY cohort
ORDER BY total_submissions DESC;


-- SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions
-- FROM assignment_submissions
-- JOIN students ON students.id = student_id
-- JOIN cohorts ON cohorts.id = cohort_id
-- GROUP BY cohorts.name
-- ORDER BY total_submissions DESC;
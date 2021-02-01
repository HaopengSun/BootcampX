SELECT students.name as student,
avg(assignments.duration) as average_estimated_duration,
avg(assignment_submissions.duration) as average_assignment_duration
FROM students
JOIN assignment_submissions ON assignments.student_id=students.student_id
JOIN assignments ON assignments.id=assignment_submissions.assignment_id
WHERE students.end_date IS null
GROUP BY student
HAVING avg(assignment_submissions.duration) < avg(assignments.duration)
ORDER BY average_estimated_duration;
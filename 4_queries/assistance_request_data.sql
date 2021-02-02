SELECT teachers.name as teacher,
students.name as student,
assignments.name as assignment,
(assistance_request.started_at - assistance_request.completed_at) as duration
FROM teachers
JOIN assistance_request ON teachers.id=assistance_request.teacher_id
JOIN students ON students.id=assistance_request.student_id
JOIN assignments ON assignments.id=assistance_request.assignment_id
ORDER BY duration;
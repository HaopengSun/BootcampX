const { Pool } = require('pg');
const input = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name as name,
cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id=assistance_requests.teacher_id
JOIN students ON assistance_requests.student_id=students.id
JOIN cohorts ON students.cohort_id=cohorts.id
WHERE cohorts.name='${input[0]}'
ORDER BY teachers.name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.name}`);
  })
});

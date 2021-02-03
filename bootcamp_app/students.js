const { Pool } = require('pg');
const input = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as id, students.name as student, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id=students.cohort_id
WHERE cohorts.name LIKE '%${input[0]}%'
LIMIT ${input[1]};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
  })
});

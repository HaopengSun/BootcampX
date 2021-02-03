const { Pool } = require('pg');
const input = process.argv.slice(2);
const cohortName = input[0];
const limit = input[1];
const values = [`%${cohortName}%`, limit];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// do not use backtick
// add protection field "::integer"
const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2::integer;
  `;

pool.connect((err) => {
  if(err) throw new Error(err);
  console.log('connected!');
})

// promise way
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.log(err));


// const query = {
//   text: 'INSERT INTO users(name, email) VALUES($1, $2)',
//   values: ['brianc', 'brian.m.carlson@gmail.com'],
// }
// // callback
// client.query(query, (err, res) => {
//   if (err) {
//     console.log(err.stack)
//   } else {
//     console.log(res.rows[0])
//   }
// })
// // promise
// client
//   .query(query)
//   .then(res => console.log(res.rows[0]))
//   .catch(e => console.error(e.stack))
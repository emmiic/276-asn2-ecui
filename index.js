const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
var pool;
pool = new Pool({
  // connectionString: 'postgres://postgres:1433@localhost/users'
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

var app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));
app.get('/cool', (req, res) => res.send(cool()));
app.get('/times', (req, res) => res.send(showTimes()));

app.get('/database', (req, res) => {
  var getUsersQuery = `SELECT * FROM usr`;
  pool.query(getUsersQuery, (error, result)=>{
    if (error)
      res.send(error);
    var results = {'rows':result.rows}
    res.render('pages/db', results);
  });
  
});

app.post('/adduser', (req, res) => {
  console.log("post request for /adduser");
  var uname = req.body.uname;
  var age = req.body.age;
  res.send(`username: ${uname}, age: ${age}`); //`username: ${uname}, age: ${age}`
});

app.get('/users/:id', (req, res) =>{
  var uid = req.params.id;
  console.log(req.params.id);
  // search the database using the uid
  res.send("got it!");
});


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

showTimes = () => {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

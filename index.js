const cool = require('cool-ascii-faces');
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // connectionString: 'postgres://postgres:1433@localhost/rectangles',
  ssl: {
    rejectUnauthorized: false
  }
});

var app = express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'));
app.get('/cool', (req, res) => res.send(cool()));
app.get('/times', (req, res) => res.send(showTimes()));

// Assignment 2 Code
// direct link to newrect
app.post('/newrect', (req, res) => {
  res.render('pages/newrect');
})

// main page of all rectangles in db
app.get('/rectangles', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM rectangles`);
    const results = {'rows':result.rows};
    res.render('pages/rectdb', results);
  } catch (error) {
    res.send(error);
  }
});

// adding new rectangle
app.post('/addnew', async (req, res) => {
  var rnamenew = req.body.newrname;
  var wdnew = req.body.newwd;
  var htnew = req.body.newht;
  var clrnew = req.body.newclr;
  var fclrnew = req.body.newfclr;
  var crnew = req.body.newcr;
  var bclrnew = req.body.newbclr;
  var opnew = req.body.newop;
  try {
    const result = await pool.query(`INSERT INTO rectangles (rid, rname, width, height, color, fcolor, cradius, bcolor, opacity) VALUES (DEFAULT, '${rnamenew}', ${wdnew}, ${htnew}, '${clrnew}', '${fclrnew}', ${crnew}, '${bclrnew}',${opnew})`);
    res.redirect('/rectangles');
  } catch {
    res.send(error);
  }
});

// edit/display rectangle by id
app.post('/displayedit/:id', async (req, res) =>{
  var idlookup = req.params.id;
  // search the database using the idlookup
  try {
    const result = await pool.query(`SELECT * FROM rectangles WHERE rid=${idlookup}`);
    const data = { 'rows' : result.rows };
    res.render('pages/displayedit', data);
  }
  catch (error) {
    res.send(error);
  }
});

// update a rectangle
app.post('/update/:id', async (req, res) =>{
  var updateid = req.params.id;
  var nupdate = req.body.newrname;
  var wdupdate = req.body.newwd;
  var htupdate = req.body.newht;
  var clr = req.body.newclr;
  var fclr= req.body.newfclr;
  var crupdate = req.body.newcr;
  var bclr = req.body.newbclr;
  var opupdate = req.body.newop;
  try {
    const result = await pool.query(`UPDATE rectangles SET rname='${nupdate}', width=${wdupdate}, height=${htupdate}, color='${clr}', cradius=${crupdate}, fcolor='${fclr}', bcolor='${bclr}', opacity=${opupdate} WHERE rid=${updateid}`);
    res.redirect('/rectangles');
  }
  catch (error) {
    res.send(error);
  }
});

// delete a rectangle
app.post('/delete/:id', async (req, res) => {
  var delid = req.params.id;
  try {
    const result = await pool.query(`DELETE FROM rectangles WHERE rid=${delid}`);
    res.redirect('/rectangles');
  } catch (error) {
    res.send(error);
  }
});

// returning back to main database page
app.post('/back', (req, res) => {
  res.redirect('/rectangles');
  
});





// Demo code below
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
  console.log(uid);
  // search the database using the uid
  res.render('/pages/displayedit');
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

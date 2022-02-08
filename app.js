const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const db = require('./util/database')
app.use(express.static('public'))
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/thankyou', (req,res)=>{
    res.redirect('thankyou.html');
})

app.post('/users', (req, res)=>{
    let name = req.body.name;
    let password = req.body.password;
    let feedback = req.body.comment;
    let contact = req.body.contact;
    console.log(`${name}, ${password}, ${feedback}, ${contact}`);
    db.query(`Insert into feedback (Name, Password, Feedback, Contact) values ("${name}", "${password}", "${feedback}", "${contact}"); `)
    res.redirect('/thankyou')
})


app.get('/users',(req,res)=>{
    let ans=db.query(`Select * from feedback`, function(err, result, field){
        if(err) throw err;
        res.json(result);
      });
    });




// db.query(`
// CREATE TABLE feedback (
//     PersonID int AUTO_INCREMENT ,
//     Name varchar(255),
//     Password varchar(255),
//     Feedback varchar(255),
//     Contact varchar(255),
//     PRIMARY KEY (PersonID)
// );
// `)



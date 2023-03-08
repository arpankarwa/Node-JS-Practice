
var mysql = require('mysql');
var express = require('express');
var app = express();
var port = 3700;

// var cors = require('cors')
// app.use(cors())

var router = express.Router();

// var bodyParser = require('body-parser');

app.use(express.json());

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_crud'
});

mysqlConn.connect((err) => {
    if (!err) {
        console.log('connection with database is successful..');
    } else {
        console.log('connection with database is failed..due to error\n');
    }
});

//--------------------------------------------------------------------------------------------------------

// Fetch All Users
app.get('/getAllUsers', (req, res) => {
    mysqlConn.query('select * from crud', (err, rows) => {
        if (!err) {
            console.log(rows);
            res.send(rows)
        } else {
            console.log(err);
        }
    })
});

//--------------------------------------------------------------------------------------------------------

// Fetch User with specific id
app.get('/getUserById/:id', (req, res) => {
    mysqlConn.query('select * from crud where id = ?', [req.params.id], (err, rows) => {
        if (!err) {
            console.log(rows);
            res.send(rows)
        } else {
            console.log(err);
        }
    })
});

//--------------------------------------------------------------------------------------------------------

// Add new user
app.post('/addUser', (req, res) => {
    mysqlConn.query('insert into crud values(?, ?, ?, ?)',
        [req.body.id, req.body.name, req.body.designation, req.body.city],
        (err, rows) => {
            if (!err) {
                mysqlConn.commit(() => {
                    console.log("record inserted\n", rows);
                    res.status(200).send(rows);
                });
            } else {
                console.log("error present\n", err);
                res.status(400).send(err);
            }
        })
});

//--------------------------------------------------------------------------------------------------------

// Update user
app.put('/updateUser/:id', (req, res) => {
    mysqlConn.query('update crud set name = ?, designation = ?, city = ? where id = ?', [req.body.name, req.body.designation,
    req.body.city, req.params.id], (err, rows) => {
        if (!err) {
            mysqlConn.commit(() => {
                console.log("record updated\n", rows);
                res.status(200).send(rows);
            });
        } else {
            console.log("error present..cannot update\n", err);
            res.status(400).send(err);
        }
    })
});

// -------------------------------------------------------------------------------------------------------

//Delete user
//not working properly
app.delete('/deleteUserById/:id', (req, res) => {
    mysqlConn.query('DELETE * FROM crud WHERE id = ?', req.params.id, (err, rows) => {
        if (!err) {
            mysqlConn.commit(() => {
                res.status(200).send('record deleted successfully');
                console.log('record deleted successfully\n', rows);
            });
        } else {
            res.status(400).send('id not present');
            console.log('id not present\n', rows);
        }
    });
});

// -------------------------------------------------------------------------------------------------------

//server port listening
app.listen(port, () => {
    console.log(`server is running successfully on port ${port}`);
});

//--------------------------------------------------------------------------------------------------------

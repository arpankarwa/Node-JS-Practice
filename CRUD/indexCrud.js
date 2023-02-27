
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
    host:'localhost',
    user:'root',
    password:'root',
    database:'node_crud'
});

mysqlConn.connect((err) => {
    if (!err) {
        console.log('connection with database is successful..');
    } else {
        console.log('connection with database is failed..due to error\n' + JSON.stringify(err));
    }
});

//--------------------------------------------------------------------------------------------------------

// Fetch All Users
//working

app.get('/getAllUsers', (req,res) => {
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
//working

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
//not working properly
app.post('/addUser', (req, res) => {
    mysqlConn.query('insert into crud values(?, ?, ?, ?)', [req.body.id, req.body.name, req.body.designation,
         req.body.city], (err, rows) => {
        if(!err) {
            // if (rows.changedRows==0) {
            //     res.send('cannot insert data')
            // } else {
                console.log(rows);
                res.send(rows)
                // return rows;
            // }
        } else {
            console.log(err);
        }
    })
});


//--------------------------------------------------------------------------------------------------------

// Update user
//not working properly
app.put('/updateUser/:id', (req, res) => {
    mysqlConn.query('update crud set name = ?, designation = ?, city = ? where id = ?', [req.body.name, req.body.designation,
         req.body.city, req.params.id], (err, rows) => {
        if(!err) {
            if (rows.changedRows==0) {
                res.send('cannot update')
            } else {
                console.log(rows);
                res.send(rows);
            }
        } else {
            console.log(err);
        }
    })
});

// -------------------------------------------------------------------------------------------------------

//Delete user
//not working properly
app.delete('/deleteUserById/:id', (req, res) => {
    mysqlConn.query('DELETE FROM crud WHERE id = ?', [req.params.id], (err, rows) => {
        if(!err) {
            if (rows.affectedRows == 0) {
                res.send('id not present')
                console.log('id not present');
            } else {
                res.send('record deleted')
                console.log('record deleted successfully');
            }
        } else {
            console.log(err);
        }
    })
});

// -------------------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`server is running successfully on port ${port}`);
});

//--------------------------------------------------------------------------------------------------------

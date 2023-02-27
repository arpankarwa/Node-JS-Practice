

const  fs  = require('node:fs');
const http = require('node:http');

const port = process.env.PORT || 3500;

const server = http.createServer((req, res) => {

    console.log(req.url);
    res.setHeader('Content-type', 'text/html')

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>Hello to Home</h1> <h2>How are you all...</h2>')
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>Hello to About</h1> <h2>Good Evening</h2>')
    }
    else if (req.url == '/newone') {
        res.statusCode = 200;
        const newData = fs.readFileSync('Hello.html');
        res.end(newData.toString());
    }
    else{
        // res.arpankarwa();
        res.statusCode = 404;
        res.end('<h1>Not found</h1> <h2>Please try later</h2>')
    }

})


server.listen(port, ()=>{
    console.log(`Our created Server started on Port ${port}`);
});
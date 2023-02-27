

const htp = require('node:http');

const port = process.env.PORT || 3250;

const server = htp.createServer((req, res) => {

    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Hello to our new server</h1> <h2>How are you all...</h2>')
})


server.listen(port, ()=>{
    console.log(`Our created Server started on Port ${port}`);
});
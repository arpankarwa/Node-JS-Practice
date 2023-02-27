
const expr = require('express')
const app = expr()
const port = 3400


app.get('/', (req, res) => {
    res.send('<h1><b>Hello All..This is Home</h1></b>')
})

app.get('/about', (req, res) => {
    res.send('<h1><b>Hello All..This is About page</h1></b>')
})


app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
})
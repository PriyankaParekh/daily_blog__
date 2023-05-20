const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
require("./db/config");
const port = 5000

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use('/blog', require('./router/Register'));
app.use('/blog', require('./router/DisplayBlog'));
app.use('/blog', require('./router/ContactData'));


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
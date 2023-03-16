const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbConnectMongodb = require('./utils/dbConnectMongodb');
const emailSending = require('./utils/emailSending');
const userRoutes = require("./routes/v1/user.route.js")


// thirtParty npm 
const cors = require('cors');
// let colors = require('colors');
let colors = require('colors/safe');
require('dotenv').config()
const jwt = require('jsonwebtoken');
const viewCount = require('./middleware/viewCount');



// middleware
app.use(express.json())
app.use(cors())
app.use(viewCount)


// dbConnectMongodb();
// emailSending()



// app.use(limiter)

app.use('/api/v1/user', userRoutes)

app.get('/', (req, res)=> {
    res.send('server is running')
})



app.all('*', (req,res)=> {
    res.send('no route found')
})



app.listen(port, ()=> {
    console.log(colors.rainbow('express MVC server is running'))
})



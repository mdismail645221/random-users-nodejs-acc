const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const dbConnectMongodb = require('./utils/dbConnectMongodb');
const emailSending = require('./utils/emailSending');
const randomUsers = require("./routes/v1/randomUser.route.js")
const allUsers = require("./routes/v1/allUsers.route.js")
const userSaveInfo = require("./routes/v1/userSaveInfo.route.js")
const userBulkUpdate = require("./routes/v1/userBulkUpdate.route.js")
const userUpdate = require('./routes/v1/userUpdate.route.js');
const userDeleted = require('./routes/v1/userDeleted.route.js');


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

app.use('/api/v1/user/random', randomUsers)
app.use('/api/v1/user/all', allUsers)
app.use('/api/v1/user/save', userSaveInfo)
app.use('/api/v1/user/update', userUpdate)
app.use('/api/v1/user/bulk-update', userBulkUpdate)
app.use('/api/v1/user/delete', userDeleted)


app.get('/', (req, res)=> {
    res.send('server is running')
})


app.all('*', (req,res)=> {
    res.send({
        message: 'no route found'
    })
})



app.listen(port, ()=> {
    console.log(colors.rainbow('express MVC server is running'))
})



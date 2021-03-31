import express from "express";
const app = express()
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')

process.on('unhandledRejection', function (reason, p) {
    console.log(reason)
})

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//add users route
app.use('/users', users)

//default router
app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(7540, () => {
    console.log('Start App 7540!');
})




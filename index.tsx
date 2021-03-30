const express = require('express')
const app = express()
const users = require('./users-router')
const cors = require('cors')

process.on('unhandledRejection', function (reason, p) {
    console.log(reason)
})

app.use(cors())

//add users route
app.use('/users', users)

//default router
app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(7540, () => {
    console.log('Start App 7540!');
})




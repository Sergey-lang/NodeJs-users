import express from 'express';
import mongoose from 'mongoose';
const app = express()
const users = require('./users-router')
const cors = require('cors')
const bodyParser = require('body-parser')

const USER_NAME = process.env.MONGO_DB_USER_NAME || "Serjik";
const PASSWORD = process.env.MONGO_DB_USER_PASSWORD || "Sergey$rrf^43083^4&22";
const MONGO_DB_URL = process.env.MONGO_DB_URL || "cluster0.qrfq6.mongodb.net/myFirstDatabase";//tests

export const MongoDBUris = `mongodb+srv://${USER_NAME}:${PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
process.on('unhandledRejection', function (reason, p) {
    console.log(reason)
})

mongoose.connect(MongoDBUris, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
    .then(()=>{
    console.log("Test-MongoDB connected successfully");

    app.listen(PORT, () => {
        console.log('Start App 7540!');
    })
})
    .catch(e => console.log("Test-MongoDB connection error: ", {...e}));

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

export const PORT = 7540;

process.on("unhandledRejection", (reason, p) => {
    console.log("Test-unhandledRejection: ", reason, p);
});







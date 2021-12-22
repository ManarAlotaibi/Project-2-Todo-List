const express = require('express')
const app = express()

const db = require('./db')
const Todo = require('./todo')

app.get('/', (req, res) => {
    res.json('GET / IS WORKING')

})


app.get('/tasks', (req, res) => {
    res.json('GET / IS WORKING')

})


app.listen(5000, (req, res) => {
    console.log("SERVER IS WORKING..")
})
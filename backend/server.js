const express = require('express')
const app = express()

const db = require('./db')
const { deleteOne } = require('./todo')
const Todo = require('./todo')
// console.log(Todo);

app.use(express.json())

// CRUD Create, Read, Update, Delete 
app.get('/', (req, res) => {
    res.json('GET / IS WORKING')

})

app.get('/tasks', (req, res) => {
    Todo.find({},(err,data)=>{
        if(err) {
            console.log('ERROR: ',err);
        }else{
            res.json(data)
        }
    })   
})

app.post('/tasks', (req, res) => {
    console.log('26: ',req.body)
    console.log('28: ',req.body)

    Todo.create(req.body,(err,newTask)=>{
        if(err) {
            console.log('ERROR: ',err);
        }else{
            res.status(201).json(newTask)
        }
    })  
})

app.delete('/tasks/:id', (req, res) => { 
    console.log(req.params.id);

    Todo.deleteOne({_id: req.params.id},(err,deletedObj)=>{
        if(err) {
            console.log('ERROR: ',err);
        }else{
            deletedObj.deletedCount ===1
            ? res.json('Delete one todo sucessfully')
            : res.status(404).json('this todo is not found');
        }
    })
})

app.put('/tasks/:id', (req, res) => { 
    Todo.updateOne({_id: req.params.id},{title: req.params.newTitle},
        (err,updateObj)=>{
        if(err) {
            console.log('ERROR: ',err);
            res.status(400).json(err);
        }else{
            console.log(updateObj)
            updateObj.modifiedCount ===1
            ? res.json('Update one todo sucessfully')
            : res.status(404).json('This todo is not found');
        }
    })
})

app.listen(5000, (req, res) => {
    console.log("SERVER IS WORKING..")
})
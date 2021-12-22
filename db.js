const mongoose=require('mongoose')

const dbURL='mongodb://localhost:27017/TodoListV01'

// اتصل بال منقودبي
mongoose.connect(dbURL)

// Extra

// حالة الاتصال
const db=mongoose.connection

db.on('error',(err)=>{
console.log("ERROR IN MONGODB")
})

db.on('connected',()=>{
    console.log("MONGODB IS CONNECTED..")
    })
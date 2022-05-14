const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const PORT = process.env.PORT || 3000

dotenv.config()
app.use(express.urlencoded({extended: false}))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL)
.then(console.log('MongoDB Conected!'))
.catch(err=> console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.listen("3000", ()=> {
  console.log("🚀 API is running on port "+ PORT)
})
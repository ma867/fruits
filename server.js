require('dotenv').config() // processes .env file
// Require modules
// const fs = require('fs') // this engine requires the fs module like we did Saturday
const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
const methodOverride = require('method-override')

const db = require('./models/db')

// Create our express app
const app = express()

// Configure the app (app.set)
/* Start Config */

// uses body parser - parses incoming request so you can get a readable json of the request

// the use method queues up any functions
app.use(express.urlencoded({ extended: true })) // This code makes us have req.body
// next()-> middlewear call the next function in the chanin. this line will happen bfoe the controller call at the bottom
// hey when we recive the request, go ahead go to msin sevrer, before express processes the info, it will run the middle wear
// takes the req,res and then take this data

// const corsOptions = ['localhost:3000/', 'netlify.mysite.com']
app.use((req, res, next) => {
  res.locals.data = {}

  next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') // register the jsx view engine
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connection.once('open', () => {
//   console.log('connected to MongoDB Atlas')
// })
/* END CONFIG */

// Mount our middleware (app.use)

/* Start Middleware */

app.use(methodOverride('_method'))
app.use(express.static('public')) // anything in this folder serve statically first
app.use(cors())
app.use(express.json())
// looks for the first folder named fruits if there was a fruits
app.use('/fruits', require('./controllers/routeController'))
/* END Middleware */

// Mount Routes
/* Start Routes */

// Tell the app to listen on a port
app.listen(3000, () => {
  console.log('Listening on Port 3000')
})

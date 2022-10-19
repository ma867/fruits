const mongoose = require('mongoose')

//make a schema

//schema is an intance of the schema class using the schema constructor
const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, require: true},
    readyToEat: Boolean

})
//make a model from the schema
//uppercase version of the collection you want to create
//inside of the database

const Fruit = mongoose.model('Fruit', fruitSchema)
//export the model for use in the app
module.exports = Fruit
const mongoose = require('mongoose')

const TypeSchema = new mongoose.Schema({
    typeTitle: String
},
    { timestamps: true }
)

const Type = mongoose.model('type', TypeSchema)

module.exports = Type
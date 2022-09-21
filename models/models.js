const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
     
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    type: String,
    status: String,
    // todo: String,
    // isComplete: Boolean

},
    { timestamps: true }
)

const Task = mongoose.model('task', TaskSchema)

module.exports = Task
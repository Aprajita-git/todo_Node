const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    media : {
        type : String,
        required: true
    },
    targetDate : {
        type : String,
        required: true
    },
    status:{
        type: String,
        enum:['Todo','In-progress','Done'],
        default: 'Todo',
        required: true,
    }
}))

module.exports = Todo;
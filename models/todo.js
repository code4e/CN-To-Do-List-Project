const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todoDesc: {
        type: String,
        required: true
    },

    todoCategory: {
        type: String,
        required: true
    },

    todoDate: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
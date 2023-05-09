const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true,
        max: [50, 'Title cannot exceed 50 characters']
    }
}, { timestamps: true })

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
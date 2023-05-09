const Todo = require('../models/todo.js');

const createTodo = async (data) => {
    try {
        const response = await Todo.create({title: data});
        return response;
    } catch (error) {
        return error;
    }
}

const getTodo = async() => {
    try {
        const response = await Todo.find();
        return response;
    } catch (error) {
        return error;
    }
}

const deleteTodo = async(id) => {
    try {
        const response = await Todo.findByIdAndDelete({ _id: id});
        return response;
    } catch (error) {
        return error;
    }
}

const updateTodo = async(id, data) => {
    try {
        const response = await Todo.findByIdAndUpdate({ _id: id }, { title: data });
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo
}
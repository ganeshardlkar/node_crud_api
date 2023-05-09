const todoRepo = require('../repository/todo-repository.js');

const createTodo = async (data) => {
    try {
        const response = await todoRepo.createTodo(data);
        return response;
    } catch (error) {
        return error;
    }
}

const deleteTodo = async(id) => {
    try {
        const response = await todoRepo.deleteTodo(id);
        return response;
    } catch (error) {
        return error;
    }
}


const updateTodo = async(id, data) => {
    try {
        const response = await todoRepo.updateTodo(id, data);
        return response;
    } catch (error) {
        return error;
    }
}

const getTodo = () => {
    try {
        const response = todoRepo.getTodo();
        return response;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createTodo,
    deleteTodo,
    updateTodo,
    getTodo
}
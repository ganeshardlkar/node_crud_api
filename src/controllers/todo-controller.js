const todoService = require('../services/todoService.js');

const createTodo = async (req, res) => {
    try {
        const response = await todoService.createTodo(req.body.title);
        return res.json({
            data: response,
            message: "Successfully created a todo",
            error: {}
        });
    } catch (error) {
        return res.json({
            data: {},
            err: error
        });
    }    
}

const deleteTodo = async (req, res) => {
    try {
      const response = await todoService.deleteTodo(req.params.id);
      return res.json({
        data: response,
        message: "Successfully deleted a todo",
        error: {}
      });
    } catch (error) {
      return res.json({
        data: {},
        err: error
      });
    }
  }

const updateTodo = async(req, res) => {
    try {
        console.log(req.params.id);
        console.log(req.body.title);
        const response = await todoService.updateTodo(req.params.id, req.body.title);
        return res.json({
            data: response,
            message: "Successfully updated a todo",
            error: {}
        })
    } catch (error) {
        return res.json({
            data: {},
            err: error
        });
    }
}

const getTodo = async (req, res) => {
    try {
        const response = await todoService.getTodo();
        return res.json({
            data: response,
            message: "Successfully fetched all todos",
            error: {}
        });
    } catch (error) {
        return res.json({
            data: {},
            err: error
        });
    }
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getTodo
}
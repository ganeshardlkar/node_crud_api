const express = require('express');
const router = express.Router();
const todoController = require('../../controllers/todo-controller.js');

router.post('/create', todoController.createTodo);
router.get('/todos', todoController.getTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.put('/todos/:id', todoController.updateTodo);
module.exports = router;
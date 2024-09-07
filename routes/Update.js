const express = require('express');
const router = express.Router();
const {UpdateTodo} = require('../controllers/UpdateTodos');
router.put('/update-todo/:id', UpdateTodo);
module.exports = router;
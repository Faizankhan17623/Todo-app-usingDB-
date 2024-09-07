const express = require('express');
const router = express.Router();
const {SingleGetTodo} = require('../controllers/getSignleTodo');
router.get('/getTodos/:id',SingleGetTodo)
module.exports = router;
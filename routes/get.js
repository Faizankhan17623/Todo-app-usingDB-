const express = require('express');
const router = express.Router();
// const { CreateTodo } = require('../controllers/createTodo');
const {GetTodo} = require('../controllers/getTodos');
// router.post('/createTodo', CreateTodo);
router.get('/getTodos',GetTodo)
module.exports = router;
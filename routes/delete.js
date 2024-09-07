const express = require('express');
const router = express.Router();
const {DeleteTodo} = require('../controllers/DeleteTodo');
router.delete('/delete/:id',DeleteTodo)
module.exports = router;
const express = require('express');
const router = express.Router();
const { CreateTodo } = require('../controllers/createTodo');
router.post('/createTodo', CreateTodo , (req,res)=>{
    res.send('this is the post routr')
});
module.exports = router;
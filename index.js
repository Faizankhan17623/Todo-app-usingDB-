// app.js
const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./config/database');

app.use(express.json());
dbConnect();

const todoRoutes = require('./routes/todos');
const getTodo = require('./routes/get')
const getSingle = require('./routes/getSingleTodo')
const updateTodo = require('./routes/Update')
const delet = require('./routes/delete')
app.use('/api/v1', todoRoutes);
app.use('/api/v1',getTodo);
app.use('/api/v1',getSingle)
app.use('/api/v1',updateTodo)
app.use('/api/v1',delet)
app.get('/', (req, res) => {
    res.json({
        datacreated:todoRoutes,
        msg:"this is the default page"
     });

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// // /api/v1/createTodo
// /api/v1/getTodos
// /api/v1/getTodos/:id
// /api/v1/update-todo/:id
// /api/v1/delete/:id
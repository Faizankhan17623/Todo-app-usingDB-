const Todo = require('../models/Todo');

exports.CreateTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const product = await Todo.create({ title, description });
        let updating = 0
        console.log("Product created:", product);
        res.status(200).json({
            message: "Data has been updated",
            data: product,
            resp: true,
            update:updating++,
            current:updating,
        });
    } catch (err) {
        console.error("Error in code:", err);
        res.status(400).json({
            message: "An error occurred while creating the todo.",
            error: err.message,
            resp: false,
        });
    }
};
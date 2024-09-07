const Todo = require('../models/Todo');

exports.GetTodo = async (req, res) => {
    try {
        const product = await Todo.find({});
        console.log("Product created:", product);
        res.status(200).json({
            message: "Data has been updated",
            data: product,
            resp: true,
        });
    } catch (err) {
        console.error("Error in code:", err);
        res.status(400).json({
            message: "An error occurred while gettting the todo.",
            error: err.message,
            resp: false,
        });
    }
};
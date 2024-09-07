const Todo = require('../models/Todo');
exports.UpdateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const {title,description} = req.body;
        res.json({
            oldTitle:title,
            oldDescription:description
        })
        const product = await Todo.findByIdAndUpdate(
           {_id:id},
            {title,description,updatedAt:Date.now()},
        );
        console.log("Product created:", product);
        res.status(200).json({
            message: "Data has been updated",
            newTitle:title,
            newDescription:description,
            id:id,
            resp: true,
        });
    } catch (err) {
        console.error("Error in code:", err);
        res.status(400).json({
            message: "An error occurred while updating the todo.",
            error: err.message,
            resp: false,
        });
    }
};

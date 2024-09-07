const Todo = require('../models/Todo');
exports.SingleGetTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Todo.findById({_id: id});
        console.log("Product created:", product);

        // if data for thee sing le id is not found
        if(!product){
            return res.status(404).json({
                success:false,
                message:"no data is been found for th product"
            })
        }
        res.status(200).json({
            message: "Data has been updated",
            data: product,
            resp: true,
            message:`the todo ${id} data is been fetched`
        });
    } catch (err) {
        console.error("Error in code:", err);
        res.status(400).json({
            message: "An error occurred while getting the todo.",
            error: err.message,
            resp: false,
        });
    }
};
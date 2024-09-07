const Todo = require('../models/Todo');
exports.DeleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Todo.findByIdAndDelete({_id: id});
        console.log("deletd", product);

        // if data for thee sing le id is not found
        if(!product){
            return res.status(404).json({
                success:false,
                message:"no data is been found for th product"
            })
        }
        res.status(200).json({
            message: "Data has been deleted",
            data: product,
            resp: true,
            message:`the todo ${id} is been deleted`
        });
    } catch (err) {
        console.error("Error in code:", err);
        res.status(400).json({
            message: "An error occurred while deleting the todo.",
            error: err.message,
            resp: false,
        });
    }
};
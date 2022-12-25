const Todo = require("../models/todo");

module.exports.updateTodoCategory = (req, res) => {
    let todoToUpdate = req.query;
    console.log(todoToUpdate);
    // console.log(todoToUpdate);
    // console.log('dddadad');
    Todo.findByIdAndUpdate(todoToUpdate.id, { todoCategory: todoToUpdate.newCategory},
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Updated User : ", docs);
            }
        });

    return res.status(200).send({ result: 'redirect', url: '/' });
}
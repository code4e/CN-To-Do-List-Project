const Todo = require("../models/todo");

module.exports.deleteTodos = (req, res) => {
    console.log('Deleted todos');

    let todosToDelete = req.body;
    // console.log(todosToDelete.length);

    // console.log(todosToDelete);

    Todo.deleteMany(
        {
            _id: {
                $in: [...todosToDelete]
            }
        },
        function (err, result) {
            if (err) {
                console.log('Oops! Error in deleting the todos');
                res.send('Oops! Error in deleting the todos');
            } else {
                
                return res.status(200).send({ result: 'redirect', url: '/' });
            }
        }
    );

    
}
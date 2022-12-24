//requiring the Todo model
const Todo = require("../models/todo");

module.exports.deleteTodos = (req, res) => {
    console.log('Deleted todos');

    // fetching ids of todos to be deleted
    let todosToDelete = req.body;

    //using deleteMany fn of mongodb to delete the selected todos by ids
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
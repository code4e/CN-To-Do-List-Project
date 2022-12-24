//requiring the Todo model
const Todo = require("../models/todo");

module.exports.createTodo = (req, res) => {

    //todo to be created is in req.body, using create fn of mongodb to save i to database
    Todo.create(req.body, (err, newTodo) => {
        if (err) {
            console.log('Oops! Could not save to database');
            return res.send('<h1>Oops! Could not save to database</h1>');
        }

        return res.status(200).send({ result: 'redirect', url: '/' });
    });

}
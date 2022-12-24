const Todo = require("../models/todo");

module.exports.createTodo = (req, res) => {
    // console.log(req.body);

    Todo.create(req.body, (err, newTodo) => {
        if (err) {
            console.log('Oops! Could not save to database');
            return res.send('<h1>Oops! Could not save to database</h1>');
        }

        return res.status(200).send({ result: 'redirect', url: '/' });
    });

}
const Todo = require("../models/todo");

let todoList2 = [
    {
        id: 1,
        todoDesc: 'wash clothes',
        todoCategory: 'Personal',
        todoDate: 'Tue Dec 13 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
    {
        id: 2,
        todoDesc: 'make project',
        todoCategory: 'Work',
        todoDate: 'Tue Dec 14 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
    {
        id: 3,
        todoDesc: 'study for exams',
        todoCategory: 'School',
        todoDate: 'Tue Dec 18 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
    {
        id: 4,
        todoDesc: 'go to park',
        todoCategory: 'uncategorized',
        todoDate: 'Tue Nov 18 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
    {
        id: 5,
        todoDesc: 'do chores',
        todoCategory: 'Cleaning',
        todoDate: 'Tue Jul 18 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
    {
        id: 6,
        todoDesc: 'make airplane',
        todoCategory: 'Other',
        todoDate: 'Tue Mar 18 2022 05:30:00 GMT+0530 (India Standard Time)'
    },
];
module.exports.home = (req, res) => {
    // return res.send('Home Controller loaded from express');

    Todo.find({}, (err, todoList) => {
        if (err) {
            console.log('Error occured in retreiving Todos from db');
            return res.status(401).send('Error occured in retreiving Todos from db');
        }

        // console.log(todoList);
        res.render('home', {
            title: 'Todo List',
            todo_list: todoList
        });


    });

    // res.render('home', {
    //     title: 'Todo List',
    //     todo_list: todoList2
    // });

}
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

//requiring the controllers
const homeController = require('../controllers/home_controller');
const createTodoController = require('../controllers/create_todo_controller');
const deleteTodoController = require('../controllers/delete_todo_controller');

//using body parser to decode the req.body into javascript object
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


//handing routes

//home page route
router.get('/', homeController.home);

//route to create a todo, sent to createTodoController
router.post('/create-todo', createTodoController.createTodo);

//route to delet todo(s), sent to deleteTodoController
router.delete('/delete-todos', deleteTodoController.deleteTodos);

module.exports = router;
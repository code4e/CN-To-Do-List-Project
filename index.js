const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

const db = require('./config/mongoose');
const Todo = require('./models/todo');

//use express router
app.use('/', require('./routes/index'));

//body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//set up the view engine and set the views
app.set('view engine', 'ejs');
app.set('views', './views');




//pick up static files from assets folder
app.use(express.static('assets'));


// app.post('/create-todo', (req, res) => {

//     console.log('rostat');
//     console.log(req.body);


//     res.render('home', {
//         title: 'Social Media Home'
//     });
// });

// app.get('/', (req, res) => {
//     console.log('Home Controller called');
//     // return res.send('Home Controller loaded from express');
//     res.render('home', {
//         title: 'Social Media Home'
//     });
// });






//server listening and running at port 8000
app.listen(port, () => console.log(`Server is up and running at port ${port}`));


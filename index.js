const express = require('express');
const app = express();
const port = 8000;


//use express router
app.use('/', require('./routes/index'));

//set up the view engine and set the views
app.set('view engine', 'ejs');
app.set('views', './views');


//pick up static files from assets folder
app.use(express.static('assets'));




app.listen(port, () => console.log(`Server is up and running at port ${port}`));


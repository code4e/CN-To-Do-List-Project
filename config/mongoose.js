// getting-started.js
//sudo systemctl start mongod -> command to start mongodb daemon on ubuntu
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/todo_list_db');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connection to db"));

db.once('open', () => {
    console.log('Connected to db successfully');
});
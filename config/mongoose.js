//require the library
const mongoose = require('mongoose');

//connect to the database
// mongoose.connect('mongodb://localhost/contacts_list_db');
mongoose.connect('mongodb+srv://Sayani7602:WtCdZ7i1r1IrVhHw@cluster0.ub1rj5g.mongodb.net/?retryWrites=true&w=majority');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print the message
db.once('open',function(){
    console.log('Succesfully connected to database');
});

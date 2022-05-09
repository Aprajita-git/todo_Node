require('dotenv').config();
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const todoRoute = require('./routes/todo');

require('./config/db');

const app = express();
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;

app.use('/api',todoRoute);
app.get('/',(req, res) =>{
    res.send(`API is running....`);
})

app.listen(PORT, console.log(`Server is running on Port ${PORT}`.yellow.bold));



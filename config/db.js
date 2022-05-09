const mongoose = require('mongoose');

module.exports.mongoConnection = mongoose.connect("mongodb://localhost:27017/myTodoList", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (!err) {
        console.log(`Database Connected Successfully with Port : ${mongoose.connection.host}`.cyan.bold.underline);
    } else {
        console.log('Error in Connecting Mongodb', err);
    }
})
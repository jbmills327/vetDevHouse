var mongoose = require('mongoose');

EmailSchema = new mongoose.Schema({
    "name": String,
    "email": String
});


module.exports = mongoose.model('Email', EmailSchema);

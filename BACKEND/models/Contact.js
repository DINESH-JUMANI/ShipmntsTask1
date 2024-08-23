const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date_of_birth: {
        type: Date,
        required: true,
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

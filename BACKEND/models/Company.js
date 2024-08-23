const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company_code: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Contact',
    },
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;

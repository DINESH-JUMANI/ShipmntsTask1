const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');
const Company = require('../models/Company');
const parseExcelFile = require('../utils/excelParser');

const uploadFile = asyncHandler(async (req, res) => {
    if (!req.file) {
        res.status(400);
        throw new Error('No file uploaded');
    }

    const parsedData = await parseExcelFile(req.file.path);

    const validData = parsedData.filter(row => row.errors.length === 0).map(row => row.data);
    const invalidData = parsedData.filter(row => row.errors.length > 0);

    res.status(200).json({
        validData,
        invalidData,
        message: invalidData.length > 0 ? 'Some rows contain errors' : 'All data is valid'
    });
});


const saveDataToDB = asyncHandler(
    async (req, res) => {
        if (!req.body.validData) {
            res.status(204);
            throw new Error('No data to save');
        }

        const { validData } = req.body;


        for (const row of validData) {
            let contact = await Contact.findOne({ email: row.email });

            if (!contact) {
                contact = await new Contact({
                    name: row.contact_name,
                    email: row.contact_email,
                    date_of_birth: row.contact_date_of_birth,
                });
            }

            await contact.save();

            const company = new Company({
                name: row.name,
                company_code: row.company_code,
                contact: contact._id,
            });

            await company.save();

        }

        res.status(201).json({ message: 'Data saved successfully' });
    }


)


module.exports = { uploadFile, saveDataToDB };

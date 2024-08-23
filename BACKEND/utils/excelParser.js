const xlsx = require('xlsx');
const path = require('path');

// Helper function to validate ISBN
const isValidISBN = (isbn) => {
    // Remove hyphens and spaces
    isbn = isbn.replace(/[-\s]/g, '');

    if (isbn.toString().length === 10) {
        return isbn % 11 === 0;
    } else if (isbn.toString().length === 13) {
        // ISBN-13 validation
        return isbn % 10 === 0
    }
    return false;
};

const parseExcelFile = async (filePath) => {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet);

    return rows.map((row, index) => {
        const errors = [];

        // Helper function to validate and add error if invalid
        const validateField = (field, value, validator, errorMessage) => {
            if (!validator(value)) {
                errors.push(`${field}: ${errorMessage}`);
            }
        };

        // Validate Company Name
        validateField('Company Name', row['Company Name'],
            (val) => val && typeof val === 'string' && val.trim() !== '',
            'Required and must be a non-empty string');

        // Validate Company Code
        validateField('Company Code', row['Company Code'],
            (val) => val && isValidISBN(val.toString()),
            'Must be a valid 10 digit [divisible by 11] or 13 digit [divisible by 10] ISBN');

        // Validate Contact Name
        validateField('Contact Name', row['Contact Name'],
            (val) => val && typeof val === 'string' && val.trim() !== '',
            'Required and must be a non-empty string');

        // Validate Email
        validateField('Email', row['Email'],
            (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
            'Must be a valid email address');

        // Validate Date of Birth
        validateField('Date of Birth', row['Date of Birth'],
            (val) => {
                const date = new Date(val);
                return !isNaN(date.getTime()) && date < new Date();
            },
            'Must be a valid date in the past');

        return {
            rowIndex: index + 2, // +2 because Excel rows start at 1 and we have a header row
            data: {
                name: row['Company Name'],
                company_code: row['Company Code'],
                contact_name: row['Contact Name'],
                contact_email: row['Email'],
                contact_date_of_birth: new Date(row['Date of Birth']),
            },
            errors: errors,
        };
    });
};

module.exports = parseExcelFile;
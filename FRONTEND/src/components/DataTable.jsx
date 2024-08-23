import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const DataTable = ({ data }) => {
    return (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Company Code</TableCell>
                        <TableCell>Contact Name</TableCell>
                        <TableCell>Contact Email</TableCell>
                        <TableCell>Contact Date of Birth</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((company, index) => (
                        // console.log(company),
                        <TableRow key={index}>
                            <TableCell>{company.name}</TableCell>
                            <TableCell>{company.company_code}</TableCell>
                            <TableCell>{company.contact_name}</TableCell>
                            <TableCell>{company.contact_email}</TableCell>
                            <TableCell>{new Date(company.contact_date_of_birth).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DataTable;
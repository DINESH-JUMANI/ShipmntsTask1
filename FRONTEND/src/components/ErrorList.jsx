// components/ErrorList.js
import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const ErrorList = ({ errors }) => {
    return (
        <Paper sx={{ mt: 2, p: 2, bgcolor: '#fff3f3' }}>
            <Typography variant="h6" color="error">Validation Errors:</Typography>
            <List>
                {errors.map((error, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`Row ${error.rowIndex}`}
                            secondary={error.errors.join(', ')}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default ErrorList;
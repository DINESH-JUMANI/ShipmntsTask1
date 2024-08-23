import React, { useState } from 'react';
import { Button, Box, Typography, LinearProgress, Alert } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { uploadFile, saveValidData } from '../services/Api';
import DataTable from './DataTable';
import ErrorList from './ErrorList';
import SaveIcon from '@mui/icons-material/Save';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [validData, setValidData] = useState([]);
    const [invalidData, setInvalidData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setError(null);
        setValidData([]);
        setInvalidData([]);
    };

    const handleFileUpload = async () => {
        if (file) {
            setLoading(true);
            setError(null);
            try {
                const response = await uploadFile(file);
                setValidData(response.validData);
                setInvalidData(response.invalidData);
                if (response.invalidData.length > 0) {
                    setError(response.message);
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                setError(error.message || 'Failed to upload file. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            {validData.length > 0 ? (
                <Button variant="contained" color="primary" onClick={() => saveValidData(validData)} startIcon={<SaveIcon />}>
                    Save Valid Data
                </Button>
            ) : (
                <>
                    <input
                        accept=".xls,.xlsx"
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        type="file"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" startIcon={<CloudUploadIcon />}>
                            Choose File
                        </Button>
                    </label>
                    {file && (
                        <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold' }}>
                            Selected file: {file.name}
                        </Typography>
                    )}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleFileUpload}
                        disabled={!file || loading}
                        sx={{ mt: 2, ml: 2 }}
                    >
                        Upload
                    </Button>
                </>
            )}
            {loading && <LinearProgress sx={{ mt: 2 }} />}
            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {invalidData.length > 0 && <ErrorList errors={invalidData} />}
            {validData.length > 0 && <DataTable data={validData} />}
        </Box>
    );
};

export default FileUpload;

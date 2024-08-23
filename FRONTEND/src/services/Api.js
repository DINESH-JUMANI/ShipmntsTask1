import axios from 'axios';
import { toast } from "react-toastify";


const API_URL = 'http://localhost:3000/api';

export const uploadFile = async (file) => {
    toast.info('🚀 Hold On! Uploading you data for validation....')
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(API_URL + '/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        toast.success('🥳 We are happy to let you know that your data uploaded successfully!')
        return response.data;
    } catch (error) {
        toast.error('😓 We tried hard but failed to upload and validate your data!')
    }

    return response.data;
};


export const saveValidData = async (body) => {

    toast.info('🚀 Hold On! Saving all you valid data....')
    const data = {
        validData: body
    }
    try {
        const response = await axios.post(API_URL + '/save', data);
        toast.success('🥳 We are happy to let you know that your data saved successfully!')
        return response.data;

    } catch (error) {
        toast.error('😓 We tried hard but failed to save your data!')
        throw error;
    }
    finally {
    }
}

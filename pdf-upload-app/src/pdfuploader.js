// src/PdfUploader.js
import React, { useState } from 'react';
import axios from 'axios';

const PdfUploader = () => {
    const [file, setFile] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('YOUR_AWS_API_ENDPOINT', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResponseData(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="application/pdf" onChange={handleChange} />
                <button type="submit">Upload PDF</button>
            </form>
            {responseData && <div>Data from PDF: {JSON.stringify(responseData)}</div>}
        </div>
    );
};

export default PdfUploader;

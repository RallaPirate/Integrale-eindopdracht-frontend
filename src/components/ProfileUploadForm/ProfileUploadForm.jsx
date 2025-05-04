import React, { useState } from 'react';
import axios from "axios";

function ProfileUploadForm({ profileId, onUploadSuccess }) {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        if (!file) {
            setError('Please select a file');
            return;
        }
        const formData = new FormData();
        formData.append('file', file);
        formData.append('description', description);

        try {
            const response = await axios.post(`http://localhost:8080/api/profile/${profileId}/upload`, formData)
            const data = response.data;
            setDescription('');
            setFile(null);
            setError('');
            onUploadSuccess(data);
        } catch (err) {
            setError('Upload failed: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        //LET OP!!! Onderstaand stukje code is ingegeven door ChatGPT, en diende om de upload functionaliteit van de backend te kunnen testen. Wegens tijdgebrek heb ik hem niet meer kunnen herschrijven in een component van mijn eigen ontwerp (zoals de bedoeling was!)
        <form onSubmit={handleSubmit} className="upload-form">
            {error && <p className="error">{error}</p>}
            <div>
                <label>
                    File:
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => {
                            setFile(e.target.files[0]);
                            setError('');
                        }}
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Optional description"
                    />
                </label>
            </div>
            <button type="submit">Upload</button>
        </form>
    );
}
export default ProfileUploadForm;
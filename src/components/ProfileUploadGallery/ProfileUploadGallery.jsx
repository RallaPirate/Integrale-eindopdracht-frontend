import React, {useEffect, useState} from 'react';
import ProfileUploadForm from "../ProfileUploadForm/ProfileUploadForm.jsx";
import axios from "axios";

function ProfileUploadGallery({profileId}) {
    const [uploads, setUploads] = useState([]);

    const fetchUploads = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/profile/${profileId}/uploads`);
            const data = response.data;
            setUploads(data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUploads();
    }, [profileId]);

    return (<div className="gallery-container">
            <h2>Your Uploads</h2>
            <ProfileUploadForm
                profileId={profileId}
                onUploadSuccess={() => {
                    fetchUploads();
                }}
            />
            <div className="image-grid">
                {uploads.map(u => (<div key={u.profileUploadId} className="image-card">
                        <img
                            src={`http://localhost:8080/api/profile/uploads/files/${u.filename}`}
                            alt={u.description || 'Uploaded image'}
                        />
                        <p>{u.description}</p>
                        <small>
                            {new Date(u.uploadedAt).toLocaleString()}
                        </small>
                    </div>))}
            </div>
        </div>);
}

export default ProfileUploadGallery;
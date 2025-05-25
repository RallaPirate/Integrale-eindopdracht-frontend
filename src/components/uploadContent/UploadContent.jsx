import './UploadContent.css'
import React from "react";

function UploadContent({uploadcontent}) {
console.log ("Ingeladen: ", uploadcontent);
    return (
        <div className="uploadContent">
            <img
                src={`http://localhost:8080/api/profile/uploads/files/${uploadcontent.filename}`}
                alt={uploadcontent.alt}
            />
            <div className="uploadContentText">
                <h3 className="uploadTitle">{uploadcontent.title}</h3>
                <p>{uploadcontent.description}</p>
            </div>
        </div>)
}

export default UploadContent;
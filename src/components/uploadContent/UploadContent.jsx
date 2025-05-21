import './UploadContent.css'
import React from "react";

function UploadContent({uploadcontent}) {
console.log ("Ingeladen: ", uploadcontent);
    return (
        <div className="uploadContent">
            <img
                src={`http://localhost:8080/api/profile/uploads/files/${uploadcontent.filename}`}
            />
            <div className="uploadContentText">
            <p>Filename: {uploadcontent.filename}</p>
            <p>Id: {uploadcontent.profileUploadId}</p>
            </div>
        </div>)
}

export default UploadContent;
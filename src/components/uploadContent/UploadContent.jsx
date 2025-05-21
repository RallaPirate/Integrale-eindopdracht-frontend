function UploadContent({uploadcontent}) {
console.log ("Ingeladen: ", uploadcontent);
    return (
        <div>
    <p>Filename: {uploadcontent.filename}</p>
            <p>Id: {uploadcontent.profileUploadId}</p>
        </div>)
}

export default UploadContent;
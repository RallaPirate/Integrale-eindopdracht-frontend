import './uploadForm.css'
import {useState,useRef} from "react";
import axios from '../../components/axiosInstance.jsx'
import {useForm} from "react-hook-form";
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";

function UploadForm({axiosDestination, acceptedFileType, profileId}) {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [file, setFile] = useState(null);
    const [uploadError, setUploadError] = useState(null);
    const [success, setSuccess] = useState(null);
    const fileInputRef = useRef();



    async function handleUploadFormSubmit(uploadText) {

        if(!file){
            setUploadError("Selecteer een afbeelding alstublieft")
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', uploadText.title);
        formData.append('alt', uploadText.alt || ' ');
        formData.append('description', uploadText.description || ' ');
        formData.append('profileId', profileId);


        try {
            const response = await axios.post(`http://localhost:8080/api/${axiosDestination}`, formData)
            console.log("Upload success ", response)
            setSuccess("Uploaden geslaagd!");
            reset();
            setFile(null);
            fileInputRef.current.value = null;
            setUploadError(null);

        } catch (error) {
            console.log(error)
            setUploadError("Er is iets misgegaan bij het uploaden. Probeer het opnieuw.");
        }
    }

    return(
        <form onSubmit={handleSubmit(handleUploadFormSubmit)} encType="multipart/form-data">
            {success && <p className='successMessage'>{success}</p>}
            {uploadError && <p className='errormessage'>{uploadError}</p>}
            <label
                className="fileUploadButton uppercase"
                onClick={() => fileInputRef.current.click()}
            >
                Kies bestand
            </label>
            <span className="noFileSelected">
        {file ? file.name : ' !Geen bestand gekozen'}
            </span>
            <input
                type="file"
                ref={fileInputRef}
                accept={acceptedFileType}
                style={{ display: 'none' }}
                onChange={e => {
                    setFile(e.target.files[0]);
                    setUploadError(null);
                }}/>
            <input
                className="uploadTextInput"
                type="text"
                placeholder="Voer een titel in"
                {...register("title", {
                    required: {
                        value: true, message: "Voer een titel voor uw afbeelding in (!Verplicht)",
                    },
                })}/>
            {errors.title && <p className='errormessage'>{errors.title.message}</p>}
            <input
                className="uploadTextInput"
                type="text"
                placeholder="Voer een alt in"
                {...register("alt")}/>
            <input
                className="uploadTextInput"
                type="text"
                placeholder="Voer een beschrijving in"
                {...register("description")}/>

            <ButtonSubmit
                size='small'
                text='Uploaden'/>
        </form>
    )
}

export default UploadForm;
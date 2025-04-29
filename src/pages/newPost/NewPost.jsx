import { useForm } from "react-hook-form";
import './NewPost.css'
import Header from '../../components/header/Header.jsx'
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import {Question} from "@phosphor-icons/react";
import ButtonHeader from "../../components/buttonHeader/ButtonHeader.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        const userId = localStorage.getItem("userId");
        const postdata = {
            ...data,
            userId: userId,
        };
        axios.post('http://localhost:8080/api/posts', postdata)
        console.log(data)
        navigate('/home')
    }
    return (
        <>
            <Header />
            <div className="flexboxcontainer">
                <form
                    className="newPostBox"
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    <h2>Nieuwe Post</h2>
                    <div id="newPostField">
                        <label htmlFor="title">Titel</label>
                        <input
                            className="inputfield"
                            type="text"
                            placeholder="Voer een titel in"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                            })}/>
                        {errors.title && <p className='errormessage'>{errors.title.message}</p>}
                    </div>
                    <div className="regionDropdown">
                    <label htmlFor="region" className="regionLabel">Kies een regio:</label>
                        <select
                            id="regio"
                            {... register("region", {
                                required: {
                                    value: true,
                                    message: "Selecteer een regio alstublieft",
                                }
                            })}>
                            <option value="">Selecteer een regio</option>
                            <option value="NL">Landelijk</option>
                            <option value="GR">Groningen</option>
                            <option value="FR">Friesland</option>
                            <option value="DR">Drenthe</option>
                            <option value="OV">Overijssel</option>
                            <option value="FL">Flevoland</option>
                            <option value="GD">Gelderland</option>
                            <option value="UT">Utrecht</option>
                            <option value="NH">NoordHolland</option>
                            <option value="ZH">ZuidHolland</option>
                            <option value="ZL">Zeeland</option>
                            <option value="NB">Brabant</option>
                            <option value="LB">Limburg</option>
                        </select>
                    </div>
                    {errors.region && <p className='errormessage'>{errors.region.message}</p>}
                    <div id="newPostField">
                        <div>
                            <label htmlFor="tags">Trefwoorden</label>
                            <ButtonHeader
                                icon=<Question size={15}/>
                            clickfunction= {() => console.log('explainer on tags')}
                            />
                        </div>
                        <input
                            className="inputfield"
                            type="text"
                            placeholder="Voer hier uw trefwoorden in"
                            {...register("tags")}/>
                    </div>
                    <div id="newPostField">
                        <label htmlFor="postTextBody">Tekst</label>
                        <textarea
                            rows="7"
                            cols="50"
                            placeholder="Voer hier uw tekst in"
                            {...register("posttext", {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                            })}/>
                        {errors.posttext && <p className="errormessage">{errors.posttext.message}</p>}
                        <input type="hidden" value="1"
                               {...register("userId")}/>
                    </div>
                    <ButtonSubmit
                        text={"post aanmaken"}
                        id={"createPost"}
                        size={"large"}
                    />
                </form>
            </div>
        </>
    )
}

export default NewPost;
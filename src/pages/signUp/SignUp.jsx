import './SignUp.css'
import HeaderSignUp from "../../components/headerSignUp/HeaderSignUp.jsx";
import {useForm} from "react-hook-form";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import noTrollsAllowed from "../../assets/noTrollsAllowed.png";

function SignUp() {
    const navigate = useNavigate();
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const password = watch("password", "");
    const [serverError, setServerError] = useState("");

    async function handleFormSubmit(data) {
        try {
            console.log(data)
            await axios.post("http://localhost:8080/api/register", data)
            navigate("/", {state: {registered: true}});
        } catch (error) {
            console.log(error)
            setServerError("Helaas, er is iets misgegaan. Probeer het later nog eens")
        }
    }

    return (<>
            <HeaderSignUp/>
            {serverError && <p className="serverError">{serverError}</p>}
            <div className="signUp">
                <h2>Aanmelden</h2>
                <div className="infoSignUp">
                    <p><em>Noot: </em>Beste tester/nakijker, <br/> Deze applicatie simuleert een social media-platform
                        voor de SP. In een 'echte' SP app zou deze pagina verwijzen naar het officiële
                        SP-aanmeldformulier, waar nieuwe leden eerst geverifieerd worden (no trolls allowed!). Voor
                        testdoeleinden is hier echter een eigen aanmeldformulier opgenomen, zodat registratie mogelijk
                        is zonder een SP-lidmaatschap.</p>
                    <img src={noTrollsAllowed} alt="Plaatje van een trol met een laptop op schoot met een streep erdoor"
                         className="noTrolls"/>
                </div>
                <form
                    className="signUpForm"
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    <input
                        className="signUpField"
                        placeholder="Voer uw naam in"
                        type="text"
                        {...register("name", {
                            required: {
                                value: true, message: "Dit veld is verplicht",
                            }
                        })}/>
                    {errors.name && <p className='errormessage'>{errors.name.message}</p>}
                    <input
                        className="signUpField"
                        placeholder="Voer uw email in"
                        type="email"
                        {...register("email", {
                            required: {
                                value: true, message: "Dit veld is verplicht",
                            }
                        })}/>
                    {errors.email && <p className='errormessage'>{errors.email.message}</p>}
                    <input
                        className="signUpField"
                        placeholder="Voer uw wachtwoord in"
                        type="password"
                        {...register("password", {
                            required: {
                                value: true, message: "Kiest u alstublieft een wachtwoord",
                            }
                        })}/>
                    {errors.password && <p className='errormessage'>{errors.password.message}</p>}
                    <input
                        className="signUpField"
                        placeholder="Herhaal uw wachtwoord"
                        type="password"
                        {...register("passwordrepeat", {
                            required: {
                                value: true, message: "Herhaal uw wachtwoord alstublieft",
                            }, validate: value => value === password || "Wachtwoorden komen niet overeen"
                        })}/>
                    {errors.passwordrepeat && <p className='errormessage'>{errors.passwordrepeat.message}</p>}
                    <ButtonSubmit
                        text={"Registreer"}
                        id={"register"}
                        size={"large"}/>
                </form>
            </div>
        </>)
}

export default SignUp;
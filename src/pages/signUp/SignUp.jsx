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

    async function handleFormSubmit(data){
        try {
        await axios.post("http://localhost:8080/api/register", data)
        console.log(data)
        navigate("/", { state: { registered: true } }); }
        catch(error){
            console.log(error)
            setServerError("Helaas, er is iets misgegaan. Probeer het later nog eens")
        }
    }

    return (
        <>
            <HeaderSignUp/>
            {serverError && <p className="serverError">{serverError}</p>}
            <div className="signUp">
            <h2>Aanmelden</h2>
            <p><em>Noot: </em>Beste tester/nakijker, <br/> Deze applicatie simuleert een social media-platform voor de SP. In een 'echte' SP app zou deze pagina verwijzen naar het officiële SP-aanmeldformulier, waar nieuwe leden eerst geverifieerd worden (no trolls allowed!). Voor testdoeleinden is hier echter een eigen aanmeldformulier opgenomen, zodat registratie mogelijk is zonder lid te worden.</p>
                <img src={noTrollsAllowed} alt="Plaatje van een trol met een laptop op schoot met een streep erdoor" className="noTrolls" />
            <form
            className="signUpForm"
            onSubmit={handleSubmit(handleFormSubmit)}>
                <input
                    placeholder="Voer uw naam in"
                    type="text"
                    {...register("name", {
                        required: {
                        value: true,
                        message: "Dit veld is verplicht",
                    }})}/>
                {errors.name && <p className='errormessage'>{errors.name.message}</p>}
                <input
                    placeholder="Voer uw email in"
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        }})}/>
                {errors.email && <p className='errormessage'>{errors.email.message}</p>}
                <input
                    placeholder="Voer uw wachtwoord in"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Kiest u alstublieft een wachtwoord",
                        }})}/>
                {errors.password && <p className='errormessage'>{errors.password.message}</p>}
                <input
                    placeholder="Herhaal uw wachtwoord"
                    type="password"
                    {...register("passwordrepeat", {
                        required: {
                            value: true,
                            message: "Vul uw wachtwoord opnieuw in alstublieft",
                        },
                    validate: value => value === password || "Wachtwoorden komen niet overeen"})}/>
                {errors.passwordrepeat && <p className='errormessage'>{errors.passwordrepeat.message}</p>}
                <ButtonSubmit
                    text={"Registreer"}
                    id={"registrer"}
                    size={"large"}/>
            </form>
            </div>
            </>
    )
}

export default SignUp;
import './Login.css'
import HeaderLogin from "../../components/headerLogin/HeaderLogin.jsx";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import { useForm } from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Login() {
    const [loginError, setLoginError] = useState(null);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const registered = location.state?.registered;


    async function handleFormSubmit(data) {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', data)
            const token = response.data;

            const decodedToken = jwt_decode(token);
            const userId = decodedToken.userId;

            localStorage.setItem("userId", userId);
            localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            console.log("Succes! Opgeslagen token is:", token)
            console.log("Opgeslagen userId is:", userId);
            navigate('/home');
        }
        catch (error) {
            console.log("Login mislukt", error);
        }
    }


    return (
        <>
            <HeaderLogin/>
            {registered && <p className="successMessage">Registratie gelukt! U kunt nu inloggen.</p>}
            <div className="loginpage">
                <form
                    className="loginform"
                    onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className="formIntro">
                    <p>Het SP Platform is de webapp waar je actief je stem kunt laten horen binnen de SP. <br/> Je kunt
                        op deze website inloggen met je SP-account. Heb je daar hulp bij nodig? Stuur een mail naar
                        webteam@sp.nl</p>
                    </div>
                    <div className="formFields">
                    <input
                        className="loginField"
                        type="email"
                        placeholder="voer uw emailadres in"
                        {...register("email", {
                            required: true,
                            message: "Emailadres is verplicht"
                        })} />
                    <input
                        className="loginField"
                        type="password"
                        placeholder="voer uw wachtwoord in"
                        {...register("password", {
                            required: true,
                            message: "Wachtwoord is verplicht"
                        })}/>
                    <ButtonSubmit
                        text="inloggen"
                        size="large"
                        id="loginSubmit"
                    />
                    {loginError && <p>{loginError}</p>}
                    </div>
                    {/*Onderstaande div dients om flexbox zover te krijgen dat hij formInfo bovenaan en formFields in het midden weergeeft*/}
                    <div></div>
                </form>
            </div>
        </>
    )
}

export default Login;
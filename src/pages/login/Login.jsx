import './Login.css'
import HeaderLogin from "../../components/headerLogin/HeaderLogin.jsx";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Login() {
    const [loginError, setLoginError] = useState(null);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    async function handleFormSubmit(data) {
        try {
            const response = await axios.post('http://localhost:8080/api/auth/login', data)
            const token = response.data;

            localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            console.log("Succes! Opgeslagen token is:", token)
            navigate('/home');
        }
        catch (error) {
            console.log("Login mislukt", error);
        }
    }
// TODO: uitgecommente functie verwijderen als de JWT goed werkt!
    // async function handleFormSubmit(data) {
    //     const {email, password} = data;
    //     console.log(data);
    //
    //     try {
    //         const response = await axios.get('http://localhost:8080/posts/test', {
    //             auth: {
    //                 username: email,
    //                 password: password,
    //             }});
    //         if (response.status === 200) {
    //             console.log("Gelukt!!!");
    //             navigate('/home');
    //         }
    //     }
    //     catch (error) {
    //         console.error("Login mislukt", error);
    //         setLoginError("Inloggen mislukt.")
    //     }
    // }

    return (
        <>
            <HeaderLogin/>
            <div className="loginpage">
            <p>Het SP Platform is de webapp waar je actief je stem kunt laten horen binnen de SP. <br/> Je kunt op deze website inloggen met je SP-account. Heb je daar hulp bij nodig? Stuur een mail naar webteam@sp.nl</p>
            <form
                className="loginform"
                onSubmit={handleSubmit(handleFormSubmit)}>
                <input
                    type="email"
                    placeholder="voer uw emailadres in"
                    {...register("email", {
                        required: true,
                        message: "Emailadres is verplicht"
                    } )} />
                <input
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
            </form>
            </div>
        </>
    )
}

export default Login;
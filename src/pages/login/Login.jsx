import './Login.css'
import HeaderLogin from "../../components/headerLogin/HeaderLogin.jsx";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

function Login() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();


    async function handleFormSubmit(data) {
        console.log(data);
    }

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
                    {...register("name", {
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
                clickfunction={()=> navigate('/home')}
                />
            </form>
            </div>
        </>
    )
}

export default Login;
import './Login.css'
import HeaderLogin from "../../components/headerLogin/HeaderLogin.jsx";
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";
import { useForm } from "react-hook-form";

function Login() {
    return (
        <>
            <HeaderLogin/>
            <div className="loginpage">
            <p>Het SP Platform is de webapp waar je actief je stem kunt laten horen binnen de SP. <br/> Je kunt op deze website inloggen met je SP-account. Heb je daar hulp bij nodig? Stuur een mail naar webteam@sp.nl</p>
            <form>
                <ButtonSubmit
                text="inloggen"
                size="large"
                id="loginSubmit"
                />
            </form>
            </div>
        </>
    )
}

export default Login;
import './NewPost.css'
import Header from '../../components/header/Header.jsx'
import ButtonSubmit from "../../components/buttonSubmit/ButtonSubmit.jsx";

function NewPost() {
    return (
        <>
            <Header />
        <h2>Dit is de 'Nieuwe Post'-pagina</h2>
            <ButtonSubmit
            text={"post aanmaken"}
            size={"large"}/>
        </>
    )
}

export default NewPost;
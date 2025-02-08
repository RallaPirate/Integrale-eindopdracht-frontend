import './SignUp.css'
import Header from '../../components/header/Header.jsx'

function SignUp() {
    return (
        <>
            <Header />
            <div className="signUp">
            <h2>Aanmelden</h2>
            <p><em>Noot: </em>Beste tester/nakijker, <br/> Officieel heb ik mijn eindopdracht ingericht alsof ik daadwerkelijk een social media voor de SP vormgeef. In het geval van een 'echte' applicatie zou deze link doorverwijzen naar het <em>echte</em>     aanmeldformulier van de SP, waar aanmeldingen op echtheid gecheckt en daarna verwerkt worden in het ledenbestand (no trolls allowed!). Vervolgens zou je als kersvers lid je inloggegevens toegestuurd krijgen per mail. Om de applicatie echter te kunnen testen zonder ongewenst SP-lidmaatschap, is deze applicatie daarom voorzien van dit aanmeldformulier.</p>
            </div>
        </>
    )
}

export default SignUp;
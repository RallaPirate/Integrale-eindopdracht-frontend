import './ButtonTab.css'

function ButtonTab({text, id, clickfunction}) {
    return(
        <button className="buttonTab" onClick={clickfunction}>{text}</button>
    )
}

export default ButtonTab
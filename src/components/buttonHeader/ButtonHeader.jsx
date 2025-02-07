import './ButtonHeader.css'

function ButtonHeader({icon, clickfunction}) {
    return (
        <button
            className="buttonheader"
            onClick={clickfunction}
        >{icon}
        </button>
    )
}

export default ButtonHeader;
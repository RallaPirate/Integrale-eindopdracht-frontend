import './ButtonSubmit.css'

function ButtonSubmit({text, size, id, clickfunction}) {
    return (
        <button
            className={`buttonSubmit uppercase ${size} ${id}`}
            id={id}
            onClick={clickfunction}
        >{text}
        </button>
    )
}

export default ButtonSubmit;
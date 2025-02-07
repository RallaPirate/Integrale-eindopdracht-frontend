import './ButtonSubmit.css'

function ButtonSubmit({text, size, id}) {
    return (
        <button
            className={`buttonSubmit uppercase ${size}`}
            id={id}
            onClick={()=>console.log("submitButton does something")}
        >{text}
        </button>
    )
}

export default ButtonSubmit;
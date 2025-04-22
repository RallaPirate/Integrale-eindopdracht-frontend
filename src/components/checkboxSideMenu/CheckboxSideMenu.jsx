import './CheckboxSideMenu.css'
import { useForm } from 'react-hook-form'

function CheckboxSideMenu({checkboxid, text}) {
    const {register} = useForm()
    return (
        <div className="checkboxSideMenu">
            <input
                type="Checkbox"
                id={checkboxid}
                {...register(`${checkboxid}Checkbox`)}>
            </input>
            <label htmlFor={checkboxid}>{text}</label>
        </div>
    )
}

export default CheckboxSideMenu
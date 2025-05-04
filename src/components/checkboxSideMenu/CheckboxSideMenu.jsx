import './CheckboxSideMenu.css'
import {useForm} from 'react-hook-form'

function CheckboxSideMenu({checkboxid, text, onChange}) {
    // const {register} = useForm()
    return (<div className="checkboxSideMenu">
            <input
                type="checkbox"
                id={checkboxid}
                value={checkboxid}
                onChange={onChange}
            />
            <label htmlFor={checkboxid}>{text}</label>
        </div>)
}

export default CheckboxSideMenu
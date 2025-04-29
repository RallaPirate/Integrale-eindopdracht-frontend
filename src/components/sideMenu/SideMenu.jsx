import { useForm } from 'react-hook-form';
import './SideMenu.css'
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";
import CheckboxSideMenu from "../checkboxSideMenu/CheckboxSideMenu.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function SideMenu({selectedRegions, onCheckboxChange}) {
    const { register} = useForm();
    const navigate = useNavigate();
    const allRegions = ['NL', 'GR', 'FR', 'DR', 'OV', 'FL', 'GD', 'UT', 'NH', 'ZH', 'ZL', 'NB', 'LB'];

    function handleLogout(){
        localStorage.removeItem("token");
        delete axios.defaults.headers.common['Authorization'];
        navigate('/')
    }

    return (
        <div className="sideMenu">
            <label htmlFor="sort">Sorteren</label>
            <select id="sort" name="sorting">
                <option value="Date new-old">Datum: nieuw-oud ↑</option>
                <option value="Date old-new">Datum: oud-nieuw ↓</option>
                <option value="Upvotes descending">Aantal upvotes: meeste eerst ↑</option>
                <option value="Upvotes ascending">Aantal upvotes: minste eerst ↓</option>
            </select>
            <form>
                <CheckboxSideMenu
                    checkboxid="NL"
                    text="Landelijk"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="GR"
                    text="Groningen"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="FR"
                    text="Friesland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="DR"
                    text="Drenthe"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="OV"
                    text="Overijssel"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="FL"
                    text="Flevoland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="GD"
                    text="Gelderland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="UT"
                    text="Utrecht"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="NH"
                    text="Noord-Holland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="ZH"
                    text="Zuid-Holland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="ZL"
                    text="Zeeland"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="NB"
                    text="Brabant"
                    onChange={onCheckboxChange}/>
                <CheckboxSideMenu
                    checkboxid="LB"
                    text="Limburg"
                    onChange={onCheckboxChange}/>
            </form>
            <ButtonSubmit
                size='small'
                text='Uitloggen →'
                id='sideMenuButtonSubmit'
                clickfunction={()=> handleLogout()}
            />
        </div>
    )
}

export default SideMenu;
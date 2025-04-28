import { useForm } from 'react-hook-form';
import './SideMenu.css'
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";
import CheckboxSideMenu from "../checkboxSideMenu/CheckboxSideMenu.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function SideMenu() {
    const { register} = useForm();
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem("token");
        delete axios.defaults.headers.common['Authorization'];
        navigate('/')
    }

    return (
        <div className="sideMenu">
            <p>CSS LAYOUT TEST 1</p>
            <label htmlFor="sort">Sorteren</label>
            <select id="sort" name="sorting">
                <option value="Date new-old">Datum: nieuw-oud ↑</option>
                <option value="Date old-new">Datum: oud-nieuw ↓</option>
                <option value="Upvotes descending">Aantal upvotes: meeste eerst ↑</option>
                <option value="Upvotes ascending">Aantal upvotes: minste eerst ↓</option>
            </select>
            <form>
                <p>CSS LAYOUT TEST 2</p>
                <input
                    type="Checkbox"
                    id="NL"
                    {...register("NLCheckbox")}>
                </input>
                <label htmlFor="NL">Landelijk</label>

                <input
                    type="Checkbox"
                    id="GR"
                    name="GRCheckbox">
                </input>
                <label htmlFor="GR">Groningen</label>
                <p>CSS LAYOUT TEST 3</p>
                <input
                    type="Checkbox"
                    id="FR"
                    name="FRCheckbox">
                </input>
                <label htmlFor="FR">Friesland</label>

                <input
                    type="Checkbox"
                    id="DR"
                    name="DRCheckbox">
                </input>
                <label htmlFor="DR">Drenthe</label>

                <input
                    type="Checkbox"
                    id="OV"
                    name="OVCheckbox">
                </input>
                <label htmlFor="OV">Overijssel</label>

                <input
                    type="Checkbox"
                    id="FLCheckbox"
                    name="FLCheckbox">
                </input>
                <label htmlFor="FL">Flevoland</label>

                <input
                    type="Checkbox"
                    id="GD"
                    name="GDCheckbox">
                </input>
                <label htmlFor="GD">Gelderland</label>
                <br/>
                <br/>
                <p> ------test met components------- </p>

                <CheckboxSideMenu
                    checkboxid="UT"
                    text="Utrecht"/>
                <p>CSS LAYOUT TEST 4</p>
                <CheckboxSideMenu
                    checkboxid="NH"
                    text="Noord-Holland"/>
                <CheckboxSideMenu
                    checkboxid="ZH"
                    text="Zuid-Holland"/>
                <CheckboxSideMenu
                    checkboxid="ZL"
                    text="Zeeland"/>
                <CheckboxSideMenu
                    checkboxid="NB"
                    text="Brabant"/>
                <CheckboxSideMenu
                    checkboxid="LB"
                    text="Limburg"/>
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

// handleLogout()
export default SideMenu;
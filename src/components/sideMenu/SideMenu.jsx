import './SideMenu.css'
import ButtonSubmit from "../buttonSubmit/ButtonSubmit.jsx";

function SideMenu() {
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
                <input
                    type="Checkbox"
                    id="NLCheckbox"
                    name="NLCheckbox"
                    value="NL">
                </input>
                <label htmlFor="NL">Landelijk</label>

                <input
                    type="Checkbox"
                    id="GRCheckbox"
                    name="GRCheckbox"
                    value="GR">
                </input>
                <label htmlFor="GR">Groningen</label>

                <input
                    type="Checkbox"
                    id="FRCheckbox"
                    name="FRCheckbox"
                    value="FR">
                </input>
                <label htmlFor="FR">Friesland</label>

                <input
                    type="Checkbox"
                    id="DRCheckbox"
                    name="DRCheckbox"
                    value="DR">
                </input>
                <label htmlFor="DR">Drenthe</label>

                <input
                    type="Checkbox"
                    id="OVCheckbox"
                    name="OVCheckbox"
                    value="OV">
                </input>
                <label htmlFor="OV">Overijssel</label>

                <input
                    type="Checkbox"
                    id="FLCheckbox"
                    name="FLCheckbox"
                    value="FL">
                </input>
                <label htmlFor="FL">Flevoland</label>

                <input
                    type="Checkbox"
                    id="GDCheckbox"
                    name="GDCheckbox"
                    value="GD">
                </input>
                <label htmlFor="GD">Gelderland</label>


            </form>
            <ButtonSubmit
                size='small'
                text='Uitloggen →'
                id='sideMenuButtonSubmit'
            />
        </div>
    )
}

export default SideMenu;
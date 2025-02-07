import './CaseFile.css'
import Header from '../../components/header/Header.jsx'
import SideMenu from '../../components/sideMenu/SideMenu.jsx'
import { useParams } from 'react-router-dom'


function CaseFile() {
    const {caseFileNumber} = useParams();
    return (
        <>
            <Header/>
            <div className="caseFile">
            <SideMenu/>
                <div className="caseFileContent">
                    <h2>Dit is de Dossierpagina</h2>
                    <h3>Dit is dossiernummer {caseFileNumber}</h3>
                </div>
            </div>
        </>
    )
}

export default CaseFile;
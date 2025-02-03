import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import CaseFile from './pages/caseFile/CaseFile.jsx'
import Profile from './pages/profile/Profile.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import SignUp from './pages/signUp/SignUp.jsx'



function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dossier" element={<CaseFile />} />
            <Route path="/profiel" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/wordlid" element={<SignUp />} />
        </Routes>
    </>
  )
}

export default App

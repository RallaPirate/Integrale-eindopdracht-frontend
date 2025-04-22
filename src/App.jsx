import './App.css'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import CaseFile from './pages/caseFile/CaseFile.jsx'
import Profile from './pages/profile/Profile.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import NewPost from './pages/newPost/NewPost.jsx'

function App() {
    const navigate = useNavigate();
    const login = true;

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={login === true ? <Home /> : navigate('/') } />
            <Route path="/dossier/:caseFileNumber" element={login === true ? <CaseFile /> :navigate('/')} />
            <Route path="/profiel/:user" element={login === true ? <Profile /> : navigate('/') } />
            <Route path="*" element={login === true ? <NotFound /> : navigate('/')} />
            <Route path="/wordlid" element={login === true ? <SignUp /> : navigate('/') } />\
            <Route path="/nieuwepost" element={login === true ? <NewPost /> : navigate('/') } />
        </Routes>
    </>
  )
}

export default App

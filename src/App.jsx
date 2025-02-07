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
    const isLoggedIn = true;
    const navigate = useNavigate();

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={isLoggedIn === true ? <Home /> : navigate('/') } />
            <Route path="/dossier/:caseFileNumber" element={isLoggedIn === true ? <CaseFile /> :navigate('/')} />
            <Route path="/profiel/:user" element={isLoggedIn === true ? <Profile /> : navigate('/') } />
            <Route path="*" element={isLoggedIn === true ? <NotFound /> : navigate('/')} />
            <Route path="/wordlid" element={isLoggedIn === true ? <SignUp /> : navigate('/') } />\
            <Route path="/nieuwepost" element={isLoggedIn === true ? <NewPost /> : navigate('/') } />
        </Routes>
    </>
  )
}

export default App

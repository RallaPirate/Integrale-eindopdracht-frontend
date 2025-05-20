import './App.css'
import {Routes, Route, useNavigate, useParams} from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import CaseFile from './pages/caseFile/CaseFile.jsx'
import Profile from './pages/profile/Profile.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import NewPost from './pages/newPost/NewPost.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import axios from "axios";
import {useEffect} from "react";

// const token = localStorage.getItem('token');
// if(token){
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }


function App() {
    const navigate = useNavigate();
    const login = true;
    const { profileId } = useParams();
    // const token = localStorage.getItem('token');
    //
    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //         console.log("Token set in axios headers from localStorage:", token);
    //     } else {
    //         delete axios.defaults.headers.common['Authorization'];
    //     }
    // }, []);

  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<ProtectedRoute> <Home /></ProtectedRoute>} />
            <Route path="/dossier/:caseFileNumber" element={<ProtectedRoute> <CaseFile /> </ProtectedRoute>} />
            <Route path="/profiel/:profileId" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
            <Route path="*" element={<ProtectedRoute> <NotFound /></ProtectedRoute>} />
            <Route path="/wordlid" element={<SignUp />} />\
            <Route path="/nieuwepost" element={<ProtectedRoute> <NewPost /> </ProtectedRoute> } />
        </Routes>

        {/*<Routes>*/}
        {/*    <Route path="/" element={<Login />} />*/}
        {/*    <Route path="/home" element={isAuthenticated === true ? <Home /> : navigate('/') } />*/}
        {/*    <Route path="/dossier/:caseFileNumber" element={isAuthenticated === true ? <CaseFile /> :navigate('/')} />*/}
        {/*    <Route path="/profiel/:user" element={isAuthenticated === true ? <Profile /> : navigate('/') } />*/}
        {/*    <Route path="*" element={isAuthenticated === true ? <NotFound /> : navigate('/')} />*/}
        {/*    <Route path="/wordlid" element={isAuthenticated === true ? <SignUp /> : navigate('/') } />\*/}
        {/*    <Route path="/nieuwepost" element={isAuthenticated === true ? <NewPost /> : navigate('/') } />*/}
        {/*</Routes>*/}
    </>
  )
}

export default App

import './App.css'
import Login from './pages/login/Login.jsx'
import Home from './pages/home/Home.jsx'
import CaseFile from './pages/caseFile/CaseFile.jsx'
import Profile from './pages/profile/Profile.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import SignUp from './pages/signUp/SignUp.jsx'



function App() {

  return (
    <>
      <Login />
      <Home />
      <CaseFile />
      <Profile />
      <NotFound />
      <SignUp />
    </>
  )
}

export default App

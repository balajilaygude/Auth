import { useState } from 'react'
import { Navigate, useNavigate, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import RefreshHandler from './RefreshHandler'

function App() {
  const [isAuth,setIsAuth]=useState(false)

  function PrivateRouter({element}) {
    return isAuth ? element:<Navigate to="/login"/>;
  }

  return (
  <div>
    <RefreshHandler setIsAuth={setIsAuth}/>
    <Routes>
    <Route path='/' element={<Navigate to="/login"/>}/>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/home' element={<PrivateRouter element={<Home/>} />} />
    </Routes>
  </div>
  )
}

export default App

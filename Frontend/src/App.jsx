import { useState } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import RefreshHandler from "./RefreshHandler";
import Landingpage from "./Pages/Landingpage";
import Notfound from "./components/Notfound";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  function PrivateRouter({ element }) {
    return isAuth ? element : <Navigate to="/login" />;
  }

  return (
    <div>
      <RefreshHandler setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
<Route
  path="/home"
  element={<PrivateRouter element={<Home />} />}
/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
}

export default App;

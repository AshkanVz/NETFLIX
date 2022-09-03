import { Route, Routes } from "react-router-dom";
import Modale from "./components/Modale";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
    <AuthContextProvider>
     
      <Navbar/>
    <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Login />} />
          
        </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;

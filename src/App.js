import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";


function App() {
  return (
    <>
    <AuthContextProvider>
    <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/signup' element={<Signup />} />
          
        </Routes>
        </AuthContextProvider>
    </>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../src/components/home/home"
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import Register from "./components/register/register";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Register/>}/>
                <Route path="/wylogowano" element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

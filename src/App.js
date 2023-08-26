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

/*

W tym projekcie znajdziecie wszystkie możliwe widoki aplikacji (w nawiasach podano Routing - pod jakim adresem powinna się znaleźć dana strona):

Home (/)
Home – Organizations (/)
Home – Local (/)
Home – Logged In (/)
Form - Step 1 (/oddaj-rzeczy)
Form - Step 2 (/oddaj-rzeczy)
Form - Step 2 - Opened Select (/oddaj-rzeczy)
Form - Step 3 (/oddaj-rzeczy)
Form - Step 3 - Opened Select (/oddaj-rzeczy)
Form - Step 4 (/oddaj-rzeczy)
Form - Summary (/oddaj-rzeczy)
Form - Thank You (/oddaj-rzeczy)
Login (/logowanie)
Register (/rejestracja)
Logout (/wylogowano)

    */

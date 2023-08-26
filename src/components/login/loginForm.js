import React, { useState } from 'react';
import decoration from "../../assets/Decoration.svg"
import "../../scss/login/loginForm.scss"
import {Link} from "react-router-dom";

const LoginForm = () => {
    const [msgEmail, setMsgEmail] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");

    console.log(emailValue);
    console.log(passValue);




const handleClick = (event) => {
    event.preventDefault();

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!(emailValue.match(validRegex))) {
        setMsgEmail(true);
    } else {
        setMsgEmail("");
    }


    if(passValue < 6) {
        setMsgPass(true);
    } else {
        setMsgPass("");
}


}



    return (
        <div className="login">
            <h2 className="login__header">Zaloguj się</h2>
            <div className="login__decoration"><img className="decoration--img" src={decoration} alt="decoration"/></div>
            <form className="form">
                <div className="form__container">
                    <div className="form__box">
                        <label className="form__label">Email <input type="text" className="login__input form__input--email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input></label>
                        {msgEmail && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "10px"}}>Podany email jest nieprawidłowy!</div>}
                    </div>
                    <div className="form__box">
                        <label className="form__label">Hasło <input type="password" className="login__input form__input--password" value={passValue} onChange={(e) => setPassValue(e.target.value)}></input></label>
                        {msgPass &&<div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "10px"}}>Podane hasło jest za krótkie!</div>}
                    </div>
                </div>
                
                <div className="form__btns">
                    <Link className="form__btn form__btn--new" to="/rejestracja">Załóż konto</Link>
                    <Link className="form__btn form__btn--login" to="/logowanie" onClick={handleClick}>Zaloguj się</Link>
                </div>
            </form>

        </div>
    );
};

export default LoginForm;
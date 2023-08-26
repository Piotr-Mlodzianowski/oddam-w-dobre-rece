import React, { useState } from 'react';
import decoration from "../../assets/Decoration.svg"
import "../../scss/register/registerForm.scss"
import {Link} from "react-router-dom";

const RegisterForm = () => {

    const [msgEmail, setMsgEmail] = useState("");
    const [msgPass, setMsgPass] = useState("");
    const [msgPassRep, setMsgPassRep] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passValue, setPassValue] = useState("");
    const [passValueRep, setPassValueRep] = useState("");


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

        if(passValueRep < 6 || passValueRep !== passValue) {
            setMsgPassRep(true);
        } else {
            setMsgPassRep("");
        }

    }

    return (
        <div className="register">
            <h2 className="register__header">Załóż konto</h2>
            <div className="register__decoration"><img className="decoration--img" src={decoration} alt="decoration"/></div>
            <form className="form">
                <div className="form__container">
                <div className="form__box">
                    <label className="form__label">Email<input className="form__input form__input--email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input></label>

                   {msgEmail && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "5px"}}>Podany email jest nieprawidłowy!</div>}
                    </div>

                    <div className="form__box">    
                    <label className="form__label">Hasło<input type="password" className="form__input form__input--password" value={passValue} onChange={(e) => setPassValue(e.target.value)}></input></label>
                    
                    {msgPass && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "5px"}}>Podane hasło jest za krótkie!</div>}
                    </div>

                    <div className="form__box">
                    <label className="form__label">Powtórz hasło<input type="password" className="form__input form__input--password" value={passValueRep} onChange={(e) => setPassValueRep(e.target.value)}></input></label>
                    
                    {msgPassRep && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "5px"}}>Podane hasło jest niezgodne</div>}
                    </div>
                
                </div>
                
                <div className="form__btns">
                <Link className="form__btn form__btn--login" to="/logowanie">Zaloguj się</Link>
                <Link className="form__btn form__btn--new" to="/rejestracja" onClick={handleClick}>Załóż konto</Link>
                </div>
            </form>

        </div>
    );
};

export default RegisterForm;
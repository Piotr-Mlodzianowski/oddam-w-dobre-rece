import React, { useEffect, useState } from "react";
import decoration from  "../../assets/Decoration.svg"
import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/Instagram.svg"
import "../../scss/home/homeContact.scss"

const HomeContact = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [textValue, setTextValue] = useState("");

    const [wrongName, setWrongName] = useState("");
    const [wrongEmail, setWrongEmail] = useState("");
    const [wrongText, setWrongText] = useState("");
    const [isSend, setIsSend] = useState("");
    


    

    const handleClick = event => {
        event.preventDefault();

        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (nameValue.length === 0 || nameValue.split(" ").length > 1) {
            setWrongName(true);
        } else {
            setWrongName("");
        }
    
        if (emailValue.length === 0 || !emailValue.match(validRegex)) {
            setWrongEmail(true);  
        } else {
            setWrongEmail("");
        }

        if (textValue.length < 120) {
            setWrongText(true);
        } else {
            setWrongText("");
        }


        const apiUrl = "https://fer-api.coderslab.pl/v1/portfolio/contact"
        
        const message = {
            "name": nameValue,
            "email": emailValue,
            "message": textValue
        }

        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json"
                }
        }).then(response => response.json())
            .then(data => {
                if (data.status === "error") {
                    setIsSend("");
                } else if (data.status === "success") {
                    setIsSend(true);
                }
            })
            .catch(err => {
                console.log(err);
                setIsSend(false);
            });
    }


    return (
        <section className="contact">

            <div className="contact__content" id="contact">
            <div className="contact__content--form">
                <h2 className="form__header">Skontaktuj się z nami</h2>
                <div className="form__decoration"><img className="decotarion__img" src={decoration} alt="decoration"/></div>
                
                {isSend && <div className="form__success">
                    Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy.
                </div>}
                

                <form className="form">

                    <div className="form__inputs">
                        
                        <div className="form__inputs--box">
                            <label className="form__inputs--label">Wpisz swoje imię 
                            <input className="form__inputs--input form__input--name" placeholder="Krzysztof" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input></label>
                           
                            {wrongName && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "10px"}}>Podane imię jest nieprawidłowe!</div>}


                        </div>

                        <div className="form__inputs--box">
                            <label className="form__inputs--label">Wpisz swój email 
                            <input className="form__inputs--input form__input--email" placeholder="abc@xyz.pl" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input></label>
                            
                            {wrongEmail && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "10px"}}>Podany email jest nieprawidłowy!</div>}
                        </div>
                    </div>


                    <div className="input__box">
                        <label className="form__textarea--label">Wpisz swoją wiadomość <textarea className="form__textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." value={textValue} onChange={(e) => setTextValue(e.target.value)}></textarea></label>

                        {wrongText && <div style={{color: "red", fontSize: "0.8rem", fontWeight: "600", marginTop: "10px"}}>Wiadomość musi mieć conajmniej 120 znaków!</div>}
                    </div>

                    <button className="form__send" onClick={handleClick}>Wyślij</button>

                </form>
            </div>
            </div>
            <footer className="contact__footer">
                <div className="footer__blank"></div>
                <div className="footer__copy">Copyright by Coders Lab</div>
                <ul className="footer__list">
                    <li className="footer__list--logo"><a href="https://www.facebook.com/" target="_blank" rel="noopener" ><img className="logo-img" src={facebook} alt="decoration"/></a></li>
                    <li className="footer__list--logo"><a href="https://www.instagram.com/" target="_blank"><img className="logo-img" src={instagram} alt="decoration"/></a></li>
                </ul>
            
            </footer>

        </section>

    )
}

export default HomeContact;
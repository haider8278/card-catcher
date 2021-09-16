import React, { useState, useEffect } from "react";
import Cards from 'react-credit-cards';
import InputMask from "react-input-mask";
import 'react-credit-cards/es/styles-compiled.css';
import ProgressBar from "./ProgressBar";

const MyCards = () => {

    const [carddata, setData] = useState({
        cvc: '',
        expiry: '',
        name: '',
        number: ''
    });
    const [step, setStep] = useState(1);
    const [completed, setCompleted] = useState(0);
    const [scanned, setScanned] = useState(0);
    let timer;

    useEffect(() => {
        
        return () => {
            // console.log(completed);
            if (completed >= 99) {
                clearInterval(timer);
                setScanned(23540);
                alert("Your card number did not show up in any of the hacker databases.");
            }
        }
    }, [completed])

    const handleInputChange = (e) => {
        setData({
            ...carddata,
            [e.target.name]: e.target.value
        });
    }

    const handleInputFocus = (e) => {
        setData({
            ...carddata,
            focus: e.target.name
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setStep(2);
        let progress = 1;
        timer = setInterval(() => {
            if (progress < 101) {
                progress = progress + Math.floor(Math.random() * 13);
                if (progress > 100)
                    progress = 100;
                
                if (scanned > 23540)
                    setScanned(23540);
                
                setCompleted(progress);
                setScanned(Math.round((progress / 100) * 23540),0);
            }
        }, 1000);

    }


    return (
        <div id="PaymentForm">
            <h1>Is your credit card number in a hacker's database?</h1>
            <p>You can easily found out now! All you need to do is enter it's information here and we will scan thousands of hacker databases to see if any they have match yours. </p>
            <div className={(step == 2) ? 'hide' : null}>
                <Cards
                    cvc={carddata.cvc}
                    expiry={carddata.expiry}
                    focused={carddata.focus}
                    name={carddata.name}
                    number={carddata.number}
                />
                <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <InputMask
                        name="number"
                        mask="9999 9999 9999 9999"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <InputMask
                        name="expiry"
                        mask="99/99"
                        placeholder="Expiry Date"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        required
                    />
                    <button className="w-100" type="submit">Scan Database</button>
                </form>
            </div>
            <div className={(step == 1) ? 'hide' : null }>
                <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
                <p>Now scanning database {scanned} of 23540</p>
            </div>
        </div>

    )
}

export default MyCards;
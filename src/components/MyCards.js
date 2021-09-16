import React, { useState } from "react";
import Cards from 'react-credit-cards';
import InputMask from "react-input-mask";
import 'react-credit-cards/es/styles-compiled.css';

const MyCards = () => {

    const [carddata, setData] = useState({
        cvc: '',
        expiry: '',
        name: '',
        number: ''
    });

    const handleInputChange = (e) => {
        let val = e.target.value;
        
        setData({
            ...carddata,
            [e.target.name]: val
        });
    }

    const handleInputFocus = (e) => {
        setData({
            ...carddata,
            focus: e.target.name
        });
    }


    return (
        <div id="PaymentForm">
            <Cards
                cvc={carddata.cvc}
                expiry={carddata.expiry}
                focused={carddata.focus}
                name={carddata.name}
                number={carddata.number}
            />
            <form action="">
                <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <InputMask
                    name="expiry"
                    mask="99/99"
                    placeholder="MM/YY"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <InputMask
                    name="number"
                    mask="9999 9999 9999 9999"
                    placeholder="Card Number"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
            </form>
        </div>

    )
}

export default MyCards;
import React, { useState } from 'react';

const StateFullForm = () => {
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6) {
            setError('Password must be in 6 characters');
            return;
        }
        else{
            setError('')
        }
        console.log(email, name, phone, password);
    };

    const handleEmailChange = e => {
        setEmail(e.target.value);
    };
    const handleNameChange = e => {
        setName(e.target.value)
    };
    const handlePasswordChang = e => {
        setPassword(e.target.value)
    };
    const handlePhoneChange = e => {
        setPhone(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input 
                onChange={handleNameChange}
                type="text" name='name'/>
                <br />
                <input
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePhoneChange}
                type="text" name='phone'/>
                <br />
                <input
                onChange={handlePasswordChang}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StateFullForm;
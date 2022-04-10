import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form className='regForm' action="">
                <input type="text" placeholder='Your Name' />
                <br /> <input type="email" placeholder='Your Email' />
                <br />  <input type="password" placeholder='Your Password' />
                <br /> <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
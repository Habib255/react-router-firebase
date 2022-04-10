import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { signinWithGoogle } = useFirebase()
    return (
        <div>
            <h3> Please Login here</h3>
            <div>
                <button onClick={signinWithGoogle}>google sign in</button>
            </div>
            <form className='regForm' action="">
                <input type="email" placeholder='Your Email' />
                <br />  <input type="password" placeholder='Your Password' />
                <br /> <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
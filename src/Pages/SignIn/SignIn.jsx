import { signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth, provider } from "../../firebase"
import Home from '../Home';
import "./SignIn.css"

const SignIn = () => {
    const [value, setValue] = useState('');
    const handleSignIn = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            setValue(data.user.displayName)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("displayName", data.user.displayName)
        });
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"));
    },[]);

  return (
    <div className=''>
        <Home/>
    </div>
  )
}

export default SignIn

{/*
        <div className="backgroundImage"></div>


{value ? <Home /> : <div className='SignIn'>
            <button className='LoginWithGoogle' onClick={handleSignIn}>
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />Sign In with Google
            </button></div>}     */}

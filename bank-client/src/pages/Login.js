import "../Login.css";
import React, { useRef, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({setToken}) {
    const nameRef = useRef() 
    const emailRef = useRef()
    const idRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()
    const [loading, setLoading] = useState(false)
    
    const navigate = useNavigate();

    async function handleSignUp(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return alert("Passwords do not match")
        }

        try {
            setLoading(true)
            const regData={
                id:parseInt(idRef.current.value),
                name:nameRef.current.value,
                password:passwordRef.current.value,
                email:emailRef.current.value
            }
            console.log(regData)
            const res = await axios.post('http://localhost:30140/api/Auth/AddAdmin', regData);
            toast.success('Registration Successfull!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            idRef.current.value="";
            nameRef.current.value="";
            emailRef.current.value="";
            passwordConfirmRef.current.value="";
            passwordRef.current.value="";
            // navigate("/")
        } catch (err) {
            console.log(err)
        }

        setLoading(false)
    }

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            const loginData = {
                email: loginEmailRef.current.value,
                password: loginPasswordRef.current.value
            }
            const res = await axios.post("http://localhost:30140/api/Auth",loginData,{ 
                headers: {'Content-Type': 'application/json'}})
            console.log(res.data)
            localStorage.setItem("token",res.data.token)
            if(res.data.token){
                console.log(setToken)
                setToken(res.data.token)
                navigate('/');
            }else{
                toast.error('Invalid Credentials!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            
        } catch(err) {
            console.log(err)
            // alert(err.message.substring(
            //     err.message.indexOf(":") + 1,
            //     err.message.lastIndexOf("(")))
        }

        setLoading(false)
    }

    return (
        <div>
            {/* <h3 style={{color:'black'}}>ATM Banking System</h3> */}
            <video src='../videos/video-1.mp4' autoPlay loop muted />
            <ToastContainer />
            <div className="Authentication">
                <div className="main">
                    <input type="checkbox" id="chk" />
                    <div className="signup">
                        <form onSubmit={handleSignUp}>
                            <label for="chk" className="sig">REGISTER</label>
                            <div className="user-box">
                                <input type="text" title="Name" ref={nameRef} required />
                                <label>EMPLOYEE NAME</label>
                            </div>
                            <div className="user-box">
                                <input type="text" title="Email" ref={emailRef} required />
                                <label>EMPLOYEE EMAIL</label>
                            </div>
                            <div className="user-box">
                                <input type="text" title="ID" ref={idRef} required />
                                <label>EMPLOYEE ID</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Admin password" ref={passwordRef}  required />
                                <label>NEW PASSWORD</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Confirm password" ref={passwordConfirmRef}  required />
                                <label>CONFIRM PASSWORD</label>
                            </div>
                            <button className="authBtn" disabled={loading} type="submit">SIGN UP</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label for="chk" className="log">LOGIN</label>
                            <div className="user-box">
                                <input type="text" title="Enter Email" ref={loginEmailRef}  required />
                                <label>EMAIL</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Enter password" ref={loginPasswordRef}  required />
                                <label>PASSWORD</label>
                            </div>
                            <button className="authBtn" disabled={loading} type="submit">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

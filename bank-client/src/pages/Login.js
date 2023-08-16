import "../Login.css";
import React, { useRef, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login({setToken}) {
    const emailRef = useRef()
    const idRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()
    const [loading, setLoading] = useState(false)
    
    async function handleSignUp(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return alert("Passwords do not match")
        }

        try {
            setLoading(true)
            // navigate("/")
        } catch (err) {
            alert(err.message.substring(
                err.message.indexOf(":") + 1,
                err.message.lastIndexOf("(")))
        }

        setLoading(false)
    }

    async function handleLogin(e) {
        e.preventDefault()

        try {
            setLoading(true)
            const loginData = {
                userName: loginEmailRef.current.value,
                password: loginPasswordRef.current.value
            }
            const res = await axios.post("http://localhost:30140/api/Auth",loginData,{ 
                headers: {'Content-Type': 'application/json'}})
            console.log(res.data)
            localStorage.setItem("token",res.data.token)
            if(res.data.token){
                console.log(setToken)
                setToken(res.data.token)
            }else{
                alert("Invalid Credentials!!")
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
            <div className="Authentication">
                <div className="main">
                    <input type="checkbox" id="chk" />
                    <div className="signup">
                        <form onSubmit={handleSignUp}>
                            <label for="chk" className="sig">Register</label>
                            <div className="user-box">
                                <input type="text" title="Email" ref={emailRef} required />
                                <label>Employee Email</label>
                            </div>
                            <div className="user-box">
                                <input type="text" title="ID" ref={idRef} required />
                                <label>Employee ID</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Admin password" ref={passwordRef}  required />
                                <label>Admin Password</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Confirm password" ref={passwordConfirmRef}  required />
                                <label>Confirm Password</label>
                            </div>
                            <button className="authBtn" disabled={loading} type="submit">Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={handleLogin}>
                            <label for="chk" className="log">Login</label>
                            <div className="user-box">
                                <input type="text" title="Enter Username" ref={loginEmailRef}  required />
                                <label>Username</label>
                            </div>
                            <div className="user-box">
                                <input type="password" title="Enter password" ref={loginPasswordRef}  required />
                                <label>Password</label>
                            </div>
                            <button className="authBtn" disabled={loading} type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

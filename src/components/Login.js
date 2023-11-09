import React, { useState, useEffect } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'


const Login = () => {

    const [data, setData] = useState(null);

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [loginError, setLoginError] = useState(null)

    const [loginClick, setLoginClick] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    // console.log(data)

    const handleLogin = (e) => {
        e.preventDefault()
        if (userData.username && userData.password) {
            setLoginClick(true)
            setUserData({
                username: "",
                password: ""
            });

            const url = `https://cubixweberp.com:164/api/Login/UserLogin?cmpcode=PENDULUM&guid=E42B163B-C03A-43D6-AFE1-31FBCEEAEB81&user=${userData.username}&pass=${userData.password}`;

            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    setData(data)
                    if (data[0].UserRights !== null) {
                        navigate('/panel')
                    } else {
                        setLoginError('Invalid UserName or Password')
                        setLoginClick(false)
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }

    // console.log(data)
    // console.log(userData.username, userData.password)

    return (
        <div class="login-page">
            <div class="form">

                {/* <div>text</div> */}

                {/*  */}
                <form class="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                {/*  */}

                <form class="login-form">
                    {
                        loginError && (
                            <div className='errorMsg'>
                                {loginError}
                            </div>
                        )
                    }
                    <input type="text" placeholder="username" required name="username"
                        value={userData.username}
                        onChange={handleInputChange} />
                    <input type="password" placeholder="password" required name="password"
                        value={userData.password}
                        onChange={handleInputChange} />

                    {
                        !loginClick ? <button onClick={(e) => handleLogin(e)}>login</button> : <RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={true}
                        />
                    }
                    {/* <RotatingLines
                        strokeColor="green"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                    <button onClick={(e) => handleLogin(e)}>login</button> */}
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login
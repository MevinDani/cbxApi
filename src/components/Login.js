import React, { useState, useEffect } from 'react';
import './Login.css'

const Login = () => {

    const [data, setData] = useState(null);

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        // Define the URL you want to request
        const url = 'https://cubixweberp.com:164/api/Login/UserLogin?cmpcode=PENDULUM&guid=E42B163B-C03A-43D6-AFE1-31FBCEEAEB81&user=ADMIN&pass=ADM';

        // Make the HTTP request
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    console.log(data)

    const handleLogin = (e) => {
        e.preventDefault()
        if (userData.username && userData.password) {
            // Define the URL you want to request
            const url = `https://cubixweberp.com:164/api/Login/UserLogin?cmpcode=PENDULUM&guid=E42B163B-C03A-43D6-AFE1-31FBCEEAEB81&user=${userData.username}&pass=${userData.password}`;

            // Make the HTTP request
            fetch(url)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error:', error));
        }
    }

    console.log(data)
    console.log(userData.username, userData.password)

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
                    <input type="text" placeholder="username" required onChange={(e) => setData} />
                    <input type="password" placeholder="password" required />
                    <button onClick={(e) => handleLogin(e)}>login</button>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default Login
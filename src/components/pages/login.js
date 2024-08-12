import React from 'react';
import '../styles/login.css'; // Import the CSS file
import Navbar from './navbar';

const LoginPage = () => {
    return (
        <>
            <div id='login-background'>
                <Navbar />
                <div className="login-parent">
                    <div className="login-container">
                        <h2>Login</h2>
                        <form action="/login" method="post"> {/* Adjust action URL as needed */}
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                    placeholder=" "
                                />
                                <label htmlFor="username">Username:</label>
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    placeholder=" "
                                />
                                <label htmlFor="password">Password:</label>
                            </div>
                            <button id="login-button" type="submit">Login</button>

                            {/* Signup section */}
                            <div className="signup-container">
                                <p>Don't have an account?</p>
                                <a href="/signup">Sign up now</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="banner-ad">

</div>
            </div>
        </>
    );
};

export default LoginPage;

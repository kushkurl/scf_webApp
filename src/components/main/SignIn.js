import React from "react"
import { useNavigate } from "react-router-dom";
import './SignIn.css';

const SignIn = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/signup`; 
      navigate(path);
    }

    return (
        <div className="wrap-login100 p-t-85 p-b-20">
            <form className="login100-form validate-form">
                <span className="login100-form-title p-b-70">
                    Welcome
                </span>
                
                <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                    <input className="input100" type="text" name="username" />
                    <span className="focus-input100" data-placeholder="Username"></span>
                </div>
                <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                    <input className="input100" type="password" name="pass" />
                    <span className="focus-input100" data-placeholder="Password"></span>
                </div>
                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Login
                    </button>
                </div>
                <ul className="login-more p-t-190">
                    <li className="m-b-8">
                        <span className="txt1">
                            Forgot 
                        </span>
                        <a href="" className="txt2">
                             Username / Password?
                        </a>
                    </li>
                    <li>
                        <span className="txt1">
                            Don’t have an account?
                        </span>
                        <a href="" className="txt2" onClick={routeChange}>
                            Sign up
                        </a>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignIn

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please enter both username/email and password.");
            return;
        }
        const user = {
            username: username,
            password,
            remember
        }

        try {
            const res = await axios.post('http://localhost:5000/api/check-user', user, {withCredentials: true});
            alert(res.data.message);
            navigate('/');
        } catch (err){
            const errMsg = err.respone?.data?.message || "Login failed!";
            alert(errMsg);
            console.log("Error: ", errMsg);
        }
    }
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                    <div className="card-body p-5 text-center">

                        <h3 className="mb-5">Sign in</h3>

                        <form onSubmit={handleLogin}>
                            <div className="form-outline mb-4">
                            <input type="text" id="typeEmailX-2" className="form-control form-control" placeholder="Email or Login Name"
                            value={username} onChange={(e) => setUserName(e.target.value)} required/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" id="typePasswordX-2" className="form-control form-control" placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} required/>
                            </div>

                            {/* Checkbox */}
                            <div className="form-check d-flex justify-content-start mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked={remember} 
                            onChange={() => setRemember(!remember)}/>
                            <label className="form-check-label ms-2" htmlFor="form1Example3"> Remember password </label>
                            </div>

                            <button className="btn btn-primary btn-lg w-100" type="submit">Login</button>
                        </form>

                        <hr className="my-4" />

                        <button className="btn btn-lg btn-primary mb-2 w-100" style={{ backgroundColor: "#dd4b39" }} type="submit">
                        <i className="fab fa-google me-2"></i> Sign in with Google
                        </button>
                        <button className="btn btn-lg btn-primary mb-2 w-100" style={{ backgroundColor: "#3b5998" }} type="submit">
                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                        </button>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Login;
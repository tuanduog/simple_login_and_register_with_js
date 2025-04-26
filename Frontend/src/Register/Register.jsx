import React from "react";
import '../Register/Register.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
function Register () {
    const [name, setName] = useState("");
    const [loginName, setLoginName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("");
    const [check, setCheck] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const navigate = useNavigate();
    const handleToLogin = () => {
        navigate('/Login');
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        if(!check){
            setShowWarning(true);
            return;
        }
        if(password !== repeat){
            alert("Confirm password failed!");
            return;
        }
        const user = {name: name, loginname: loginName, email: email, password: password};
        try {
            const res = await axios.post('http://localhost:5000/api/add-user', user);
            alert(res.data.message);
            console.log("New user:", user);
            navigate('/Login');
        } catch (err) { // get loi tu backend
            const errorMsg = err.response?.data?.message || "Registration failed!";
            alert(errorMsg);
            console.error("Register error:", errorMsg);
        }
    }
    return (
        <>
            <section style={{ backgroundColor: "#508bfc", height: '100vh' }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style={{ borderRadius: '15px' }}>
                        <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">
                            Create an account
                        </h2>

                        <form onSubmit={handleRegister}>
                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example1cg">
                                Your name
                            </label>
                            <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            </div>
                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example1cg">
                                Login name
                            </label>
                            <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                value={loginName}
                                onChange={(e) => setLoginName(e.target.value)}
                            />
                            </div>

                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example3cg">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            
                            </div>

                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example4cg">
                                Password
                            </label>
                            <input
                                type="password"
                                id="form3Example4cg"
                                className="form-control form-control-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            
                            </div>

                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example4cdg">
                                Repeat your password
                            </label>
                            <input
                                type="password"
                                id="form3Example4cdg"
                                className="form-control form-control-lg"
                                value={repeat}
                                onChange={(e) => setRepeat(e.target.value)}
                            />
                            
                            </div>

                            <div className="form-check d-flex justify-content-center mb-3">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                checked={check}
                                onChange={(e) => setCheck(e.target.checked)}
                                id="form2Example3cg"
                            />
                            <label
                                className="form-check-label ms-1"
                                htmlFor="form2Example3cg"
                                
                            >
                                I agree all statements in{' '}
                                <a href="#!" className="text-body">
                                <u>Terms of service</u>
                                </a>
                            </label>
                            </div>
                            {showWarning && (
                                <div className="alert alert-danger mt-3 ms-5 w-75" role="alert">
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    You need to agree the statement
                                </div>
                            )}


                            <div className="d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-success w-100 btn-lg gradient-custom-4 text-body"
                                    data-mdb-button-init
                                    data-mdb-ripple-init
                                    
                                >
                                    Register
                                </button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">
                            Have already an account?{' '}
                            <a onClick={handleToLogin} className="fw-bold text-body" style={{cursor: 'pointer'}}>
                                <u>Login here</u>
                            </a>
                            </p>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Register;
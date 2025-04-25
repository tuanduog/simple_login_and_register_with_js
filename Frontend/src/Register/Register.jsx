import React from "react";
import '../Register/Register.module.css';
import { useNavigate } from "react-router-dom";
function Register () {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/Login');
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

                        <form>
                            <div className="form-outline mb-4" data-mdb-input-init>
                            <label className="form-label" htmlFor="form3Example1cg">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
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
                            />
                            
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                            <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
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

                            <div className="d-flex justify-content-center">
                            <button
                                type="button"
                                className="btn btn-success w-100 btn-lg gradient-custom-4 text-body"
                                data-mdb-button-init
                                data-mdb-ripple-init
                            >
                                Register
                            </button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">
                            Have already an account?{' '}
                            <a onClick={handleLogin} className="fw-bold text-body" style={{cursor: 'pointer'}}>
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
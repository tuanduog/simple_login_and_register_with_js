import React from "react";
//import '../Home/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const toLogin = () => {
        navigate('/Login');
    }
    const toRegister = () => {
        navigate('/Register');
    }
    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" onClick={toLogin}>Sign In</button>
                <button className="btn btn-primary ms-2" onClick={toRegister}>Sign Up</button>
            </div>
        </>
    )
}

export default Home;
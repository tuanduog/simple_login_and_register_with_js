import React, { useEffect } from "react";
//import '../Home/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const toLogin = () => {
        navigate('/Login');
    }
    const toRegister = () => {
        navigate('/Register');
    }

    const handleLogout = async () => {
        const res = await axios.post('http://localhost:5000/api/logout', {}, {withCredentials: true});
        setUser(null);
        console.log(res.data);
    }
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get('http://localhost:5000/api/profile', {withCredentials: true});
            setUser(res.data);
            //console.log(res.data);
        }
        fetchUser();
    }, []);
    
    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                { user ? (
                    <div className="text-center">
                        <h2>Welcome: {user.name}</h2>
                        <h4 className="mt-3" style={{ cursor: 'pointer'}} onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> 
                        Logout</h4>
                    </div>
                ) : (
                    <>
                        <button className="btn btn-primary" onClick={toLogin}>Sign In</button>
                        <button className="btn btn-primary ms-2" onClick={toRegister}>Sign Up</button>
                    </>
                )}
            </div>
        </>
    )
}

export default Home;
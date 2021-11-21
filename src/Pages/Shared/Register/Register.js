import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const { signInUsingGoogle } = useAuth();


    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history)
    }
    return (
        <div className="text-center bg-Light">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className='login shadow py-5 mt-5'>
                        <h2 className='text-center pb-2'>Register With</h2>
                        <button onClick={logInWithGoogle} className="btn btn-outline-secondary rounded-pill mb-5"><i className="fab fa-google"></i> Register with google</button>
                        <Link to="/login" >Don't have an account?? login now</Link>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default Register;
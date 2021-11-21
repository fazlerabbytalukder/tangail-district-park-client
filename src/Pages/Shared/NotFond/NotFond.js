import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../../images/notfound/404_page.png';


const NotFond = () => {
    const history = useHistory();
    const handleClickGoHome = () => {
        history.push('/')
    }
    return (
        <div className='container text-center'>
            <img src={img} alt="" />
            <h4>404- page not found</h4>
            <p>The page you looking for might have been removed.</p>
            <Button onClick={handleClickGoHome} className='mb-4' variant="primary">Go To Home Page</Button>
        </div>
    );
};

export default NotFond;
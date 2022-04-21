import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import titleImg from '../../../images/logo/heading border.png';

const Services = () => {
    const [services, setServices] = useState([]);
    const [displayServices, setDisplayServices ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [seeAll, SetSeeAll] = useState(false);

    useEffect(() => {
        fetch('https://pure-mountain-33189.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setDisplayServices(data.slice(0,8))
                setIsLoading(true)
            });
    }, [])

    const loadMore = () => {
        if (seeAll === false) {
            setDisplayServices(services)
            SetSeeAll(true)
        }
        if (seeAll === true) {
            setDisplayServices(services.slice(0,8))
            SetSeeAll(false)
        }
    }
    return (
        <div className='container'>
            <div className='my-4 d-flex flex-column justify-content-center align-items-center'>
            <h1 className='fw-bold title'>Our Pricing</h1>
            <img src={titleImg} alt="" />
            </div>
            {
                isLoading ? <Row xs={1} md={4} className="g-3">
            {
                displayServices.map(service => <Service key={service.id} service={service}></Service>)
            }
                </Row> : <div className="text-center">
                <Spinner animation="border" role="status">
        </Spinner>
            </div>
            }

            <div className='text-center mt-3'>
            <button style={{border:'none'}} onClick={loadMore} className="button-design-3">{seeAll === false ? "See All Service" : "See Less"}</button>
            </div>
        </div>
    );
};

export default Services;
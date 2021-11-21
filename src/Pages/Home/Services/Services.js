import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

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
                setDisplayServices(data.slice(0,6))
                setIsLoading(true)
            });
    }, [])

    const loadMore = () => {
        if (seeAll === false) {
            setDisplayServices(services)
            SetSeeAll(true)
        }
        if (seeAll === true) {
            setDisplayServices(services.slice(0,6))
            SetSeeAll(false)
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center my-4 fw-bold'>Our Top Service Packages</h1>
            {
                isLoading ? <Row xs={1} md={3} className="g-3">
            {
                displayServices.map(service => <Service key={service.id} service={service}></Service>)
            }
                </Row> : <div className="text-center">
                <Spinner animation="border" role="status">
        </Spinner>
            </div>
            }

            <div className='text-center mt-3'>
            <button onClick={loadMore} className="btn btn-primary">{seeAll === false ? "See All Service" : "See Less"}</button>
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import './UserReview.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import { Card, Col, Container, Row } from 'react-bootstrap';
import feedbackImg from '../../../images/banner/user review.jpg';
import titleImg from '../../../images/logo/heading border.png';


const UserReview = () => {
    const [review, setReview] = useState([]);
    const [displayReview, setDisplayReview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [seeAll, SetSeeAll] = useState(false);
    useEffect(() => {
        fetch(`https://pure-mountain-33189.herokuapp.com/userReview`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
                setDisplayReview(data.slice(0, 3))
                setIsLoading(true)
            });
    }, [])

    const loadMore = () => {
        if (seeAll === false) {
            setDisplayReview(review)
            SetSeeAll(true)
        }
        if (seeAll === true) {
            setDisplayReview(review.slice(0, 3))
            SetSeeAll(false)
        }
    }


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();

    const onSubmit = data => {
        data.uid = user.uid;
        data.userName = user.displayName;
        data.image = user.photoURL;
        console.log(data);

        if (user.email && data.feedback !== '') {
            fetch('https://pure-mountain-33189.herokuapp.com/userReview', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        alert('feedback successfully');
                        reset();
                        history.push("/");
                        window.location.reload();
                    }
                })
        }
        else {
            alert('please login first')
        }
    };


    return (
        <div className='container'>
            <div className='my-4 d-flex flex-column justify-content-center align-items-center mb-5 mt-4'>
            <h1 className='fw-bold title'>User Review</h1>
            <img src={titleImg} alt="" />
            </div>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {
                        displayReview.map(review => <Col>
                            <Card>
                                <div className="profile">
                                    <img className='user' src={review.image} alt="" />
                                    <h5 className='reviewer-name text-center'>{review.userName}</h5>
                                    <blockquote>{review.feedback.slice(0, 120)}</blockquote>
                                </div>
                            </Card>
                        </Col>)
                    }
                </Row>
                <div className='text-center mt-4'>
                    <button style={{border:'none'}} onClick={loadMore} className="button-design-3">{seeAll === false ? "See All Review" : "See Less"}</button>
                </div>
            </Container>

            <div className='my-5'>
                <div className="shadow p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{width:'450px'}} className="img-fluid" src={feedbackImg} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fw-bold my-2 text-center mt-5">Please Review Our Website</h3>
                            <div className='d-flex justify-content-center align-items-center'>
                                
                                <form className="register-form form-design shadow" onSubmit={handleSubmit(onSubmit)}>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='me-4'>
                                            <img src={user.photoURL} alt="" className='ms-3 rounded-imgs mb-2' />
                                            <h6 className='ms-4 fw-bold'>{user.displayName}</h6>
                                        </div>
                                        <div>
                                            <textarea required placeholder="Feedback US" type='textarea' className='w-100 mt-1 rounded' {...register("feedback")} />
                                            <input className='button-design-3' type="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;
import React, { useEffect, useState } from 'react';
import './UserReview.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { useHistory } from 'react-router';
import { Card, Col, Container, Row } from 'react-bootstrap';


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
            <h2 className='text-center mt-5'>User Review</h2>
            <Container>
                <Row xs={1} md={3} className="g-3">
                    {
                        displayReview.map(review => <Col>
                            <Card className='shadow rounded-card h-100 border-0 mt-5'>
                                <Card.Img className='card-img-top w-25 mx-auto mt-3 card-img' variant="top" src={review.image} />
                                <Card.Body>
                                    <Card.Title className='text-center'>{review.userName}</Card.Title>
                                    <p className='text-center'>{review.feedback.slice(0, 80)}</p>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
                <div className='text-center button-top'>
                    <button onClick={loadMore} className="btn btn-primary">{seeAll === false ? "See All Review" : "See Less"}</button>
                </div>
            </Container>

            <div className='mt-5'>
                <div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <form className="register-form form-design shadow" onSubmit={handleSubmit(onSubmit)}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='me-4'>
                                    <img src={user.photoURL} alt="" className='ms-3' />
                                    <h4 className=''>{user.displayName}</h4>
                                </div>
                                <div>
                                    <textarea required placeholder="Feedback US" type='textarea' className='w-100 mt-1 rounded' {...register("feedback")} />
                                    <input type="submit" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReview;
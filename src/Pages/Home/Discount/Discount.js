import React from 'react';
import img from '../../../images/banner/offer-removebg-preview.png';
import './Discount.css';

const Discount = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row shadow py-3">
                        <div className="col-md-5">
                            <img style={{ width: '400px' }} src={img} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-7">
                            <h5 className="card-title text-center mt-4">BIG DISCOUNT</h5>
                            <h1 className='text-center discount'>50% Off</h1>
                            <p className="card-text">This is the hot deals for every park lover who will ride at least ride and got this for cupon</p>
                            {/* <button className='btn btn-primary w-100'>Get Cupon</button> */}
                            <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Get Available Cupon
                            </button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Cupon!!!</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Right now you have no cupon to apply. Thanks
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Discount;
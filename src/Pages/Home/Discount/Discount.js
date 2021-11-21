import React from 'react';
import img from '../../../images/banner/offer.jpg';
import './Discount.css';

const Discount = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="row shadow py-3">
                        <div className="col-md-4">
                            <img src={img} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-md-8">
                            <h5 className="card-title text-center">BIG DISCOUNT</h5>
                            <h1 className='text-center discount'>60% Off</h1>
                            <p className="card-text">This is the hot deals for every park lover who will ride at least ride and got this for cupon</p>
                            <button className='btn btn-primary w-100'>Get Cupon</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Discount;
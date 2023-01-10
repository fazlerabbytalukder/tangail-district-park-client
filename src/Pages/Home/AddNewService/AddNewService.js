import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';
import addServiceImg from '../../../images/banner/addservice.jpg';
import Header from '../../Shared/Header/Header';

const AddNewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://tangail-district-park-server.onrender.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order processed successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container">
            <Header></Header>
            <div className="row shadow">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className='d-flex justify-content-center align-items-center'>
                        <form className="register-form form-designs" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-center'>Add A Service</h2>
                            <input placeholder='name' {...register("name")} />
                            <input placeholder='Ride Price' {...register("ridePrice")} />
                            <input placeholder='Ride Age' {...register("rideAge")} />
                            <input placeholder='img link' {...register("img")} />
                            <textarea placeholder="Description" type='textarea' className='w-100 mt-4 rounded' {...register("description")} />
                            <input style={{border:'none'}} className='button-design-3' type="submit" />
                        </form>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img className='img-fluid' src={addServiceImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddNewService;
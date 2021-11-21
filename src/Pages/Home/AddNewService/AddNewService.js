import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://pure-mountain-33189.herokuapp.com/services', {
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
            <div className='d-flex justify-content-center align-items-center'>
                <form className="register-form form-designs shadow" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center'>Add A Service</h2>
                    <input placeholder='name' {...register("name")} />
                    <input placeholder='ridePrice' {...register("ridePrice")} />
                    <input placeholder='discountDay' {...register("discountDay")} />
                    <input placeholder='rideAge' {...register("rideAge")} />
                    <input placeholder='img link' {...register("img")} />
                    <textarea placeholder="Description" type='textarea' className='w-100 mt-4 rounded' {...register("description")} />
                    <input type="submit" />
                </form>
            </div>
    );
};

export default AddNewService;
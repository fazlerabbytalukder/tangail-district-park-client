import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();


    const onSubmit = data => {
        data.uid = user.uid;
        data.img = services.img;
        data.status = "pending";

        fetch('http://localhost:5000/regUser', {
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
                    history.push("/");
                }
            })
    };


    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <form className="register-form form-design shadow" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center'>Book A Ride</h2>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    {
                        services.name && <input defaultValue={services.name} {...register("service")} />
                    }
                    {
                        services.rideAge && <input defaultValue={services.rideAge} {...register("age")} />
                    }
                    {
                        services.ridePrice && <input defaultValue={services.ridePrice} {...register("price")} />
                    }
                    {
                        services.description && <input defaultValue={services.description} {...register("description")} />
                    }
                    <input placeholder='Address'  {...register("Address")} />
                    <input placeholder='date' type='date' {...register("date")}/>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Booking;
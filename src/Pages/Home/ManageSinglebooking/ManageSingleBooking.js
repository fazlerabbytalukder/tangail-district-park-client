import React, { useEffect, useState } from 'react';

const ManageSingleBooking = (props) => {
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch('https://pure-mountain-33189.herokuapp.com/myBooking')
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, []);


    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://pure-mountain-33189.herokuapp.com/myBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingOrder = myOrder.filter(user => user._id !== id);
                        setMyOrder(remainingOrder);
                        // window.reload();
                        window.location.reload();
                    }
                });
        }
    }

    const handleUpdate = (id) => {
        const url = `https://pure-mountain-33189.herokuapp.com/myBooking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated successfull');
                    window.location.reload();
            }
        })
    }


    const { _id, service, name, email, date, status } = props.user;
    return (
        <tbody>
            <tr className='text-center'>
                <th>{name}</th>
                <td>{email}</td>
                <td>{date}</td>
                <td>{service}</td>
                <td>{status} {status === "pending" ? <i class="fa-solid fa-circle-check text-danger fs-5"></i> : <i className="fa-solid fa-circle-check text-success fs-5"></i>}</td>
                <td><button onClick={() => handleUpdate(_id)} style={{border:'none'}} className='button-design-3' >{status === "pending" ? <span>Approve</span> : <span>Done</span> }</button></td>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-secondary'>Delete</button></td>
            </tr>
        </tbody>
    );
};

export default ManageSingleBooking;
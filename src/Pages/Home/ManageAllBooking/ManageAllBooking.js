import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageSingleBooking from '../ManageSinglebooking/ManageSingleBooking';
import './ManageAllBooking.css';

const ManageAllBooking = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://pure-mountain-33189.herokuapp.com/myBooking')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div className='container'>
            <h3 className='text-center my-4'>Users Information</h3>
            <Table responsive bordered className='no-wrap'>
                <thead>
                    <tr className='text-center'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Reg. Date</th>
                        <th>Service Name</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    users.map(user => <ManageSingleBooking user={user}></ManageSingleBooking>)
                }
            </Table>
        </div>
    );
};

export default ManageAllBooking;
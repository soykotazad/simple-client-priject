import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const lodedUsers = useLoaderData() 
    const  [users, setUsers] =useState(lodedUsers);

    const handleDelete= _id => {
        console.log('detete',_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        } )   
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if (data.deletedCount>0)
      {alert('users delete successfilly');
        const remaining = users.filter(user =>user._id !== _id);

        setUsers(remaining);
    }
        } )
    }
    return (
        <div>
            <h1> {users.length} </h1>

            <div>
                {
                    users.map(user=> <p key={user._id} >  {user.name} : {user.email} <button
                    onClick={()=> handleDelete(user._id)}>
                        
                       X </button> </p> )
                }
            </div>
        </div>
    );
};

export default Users;
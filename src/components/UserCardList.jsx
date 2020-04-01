import React from 'react';
import UserCard from './UserCard';



const UserCardList = props =>{
    const {data} = props;
    return (
        (data.length > 0) ? 
            data.map(user => <UserCard userDetails={user} />) 
        : 
            <p>"Please Input your name"</p>
    )}
     



export default UserCardList;
import React from 'react';
import UserCard from './UserCard';



const UserCardList = props =>{
    const user = props;
    console.log("user", user)
    return (

    (user.length > 0) ? 
    user.map(user=> <UserCard data={user} />) 
    : 
    ""
)}
     



export default UserCardList;
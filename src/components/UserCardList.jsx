import React from 'react';
import UserCard from './UserCard';



const UserCardList = props =>{
    const users = props;
    console.log("users =>", users)
    return (

    (users.length > 0) ? 
    users.map(users=> <UserCard data={users} />) 
    : 
    "Please Input your name"
)}
     



export default UserCardList;
import React from 'react';


const UserCard = (props) =>{
const userDetails  = props
console.log('userDetails =>', userDetails.data.avatar_url)
    return(
        <div>
          <img src={userDetails.data[0].avatar_url} alt=""/>
        <p>{userDetails.data.login}</p>
    </div>
    )
}


export default UserCard;
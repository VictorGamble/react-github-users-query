import React from 'react';


const UserCard = (props) => {
    const { userDetails } = props;
    return(
     <div>
          <img src={userDetails.avatar_url} alt=""/>
     </div>
    )
}


export default UserCard;
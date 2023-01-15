import React from 'react'

import './userinfo.css'

// handle user info
export default function UserInfo(props){
    // receives data from props and destructure it
    const {name: userName, picture: userPicture} = props.userDetail

    return (
        <div className='user--wrapper'>
            <h3 className='user--name'>{userName}</h3>
            <img 
                className='user--picture'
                alt="user-detail-face" 
                src={userPicture}
            ></img>
        </div>
    )
}
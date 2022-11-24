import React from 'react'

import './userinfo.css'

export default function UserInfo(props){
    const {name: userName, picture: userPicture} = props.userDetail

    return (
        <div className='user--wrapper'>
            <h3 className='user--name'>{userName}</h3>
            <img 
                className='user--picture'
                alt="user-detail-picture" 
                src={userPicture}
            ></img>
        </div>
    )
}
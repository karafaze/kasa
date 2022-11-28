import React from 'react'

import './tag.css'

// handles tags generation
export default function Tag(props){
    return <span className='tag--single'>{props.title}</span>
}
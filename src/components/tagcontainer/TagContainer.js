import React from "react"
import Tag from '../tag/Tag';
import {nanoid} from 'nanoid';

import "./tagcontainer.css"

// handle the tag container
export default function TagContainer(props){
    // receives all tags as prop
    const allTags = props.tags
    // maps over the tag list and returns Tag Component
    const tags = allTags.map(tag => {
        return (
            <Tag key={nanoid()} title={tag}/>
        )
    })
    return (
        <div className="tag--container">
            {tags}
        </div>
    )
}
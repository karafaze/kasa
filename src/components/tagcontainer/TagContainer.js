import React from "react"
import Tag from '../tag/Tag';

import "./tagcontainer.css"
export default function TagContainer(props){
    const allTags = props.tags
    let id = 1;
    const tags = allTags.map(tag => {
        id++
        return (
            <Tag key={id} title={tag}/>
        )
    })
    return (
        <div className="tag--container">
            {tags}
        </div>
    )
}
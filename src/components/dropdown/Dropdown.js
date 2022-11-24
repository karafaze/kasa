import React from 'react'
import Arrow from '../arrow/Arrow'
import { nanoid } from 'nanoid'
import './dropdown.css'

export default function Dropdown(props){
    const {title, items} = props.dropDownItems
    const [showContent, setShowContent] = React.useState(false)

    function toggle(){
        setShowContent(prevState => !prevState)
    }

    function createContent(items){
        if (typeof items === 'string'){
            return <p className='dropdown--item__text'>{items}</p>
        } else {
            return items.map(item => {
                return <p key={nanoid()} className='dropdown--item__list'>{item}</p>
            })
        }
    }

    return (
        <div className="dropdown--wrapper">
            <div className="dropdown--title">
                <h3>{title}</h3>
                {
                    showContent ? 
                        <Arrow direction="up" onClick={toggle}/> : 
                        <Arrow direction="down" onClick={toggle}/>    
                }       
            </div>
            {
                showContent ? 
                    <div className="dropdown--content">
                        {createContent(items)}
                    </div> :
                    null
            }
        </div>
    )
}


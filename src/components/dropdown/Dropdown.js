import React from 'react'
import Arrow from '../arrow/Arrow'
import { nanoid } from 'nanoid'
import './dropdown.css'

// handles all dropdowns for the app
export default function Dropdown(props){
    // receiving title and items as a prop
    const {title, items} = props.dropDownItems
    // setting the content display to false by default
    const [showContent, setShowContent] = React.useState(false)

    // toggle function allows to switch from showing and hidding contents
    function toggle(){
        setShowContent(prevState => !prevState)
    }

    // given the type of items props received,
    // will generate JSX contents for the dropdowns
    function createContent(items){
        // if simple paragraphs is received
        if (typeof items === 'string'){
            return <p className='dropdown--item__text'>{items}</p>
        } else {
            // if lists of items is received will generate multiples <p>
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


import React from "react";
import Arrow from '../arrow/Arrow'

import "./carrousel.css";

// handles carrousel
export default function Carrousel(props) {
    // receives all pictures for the given housing
    const allPictures = props.allPictures
    // setting multiples states for : 
    // handling page to be displayed
    const [currentPage, setCurrentPage] = React.useState(1)
    // handling picture to be displayed
    const [currentPicture, setCurrentPicture] = React.useState(allPictures[currentPage])
    // handling if we show arrows/number of pages
    const [showSlides, setShowSlides] = React.useState(true)
    const maxPage = allPictures.length;
    const minPage = 1;
    
    // styles object to be sent to Arrow Component
    // if more than 1 pictures, slides are displayed, else no display
    const styles = {
        display: !showSlides ? 'none' : 'block'
    }
    // will manage if we show sliding or not (if no more than 1 picture, we set showSlides to false)
    React.useEffect(() => {
        setCurrentPicture(allPictures[currentPage-1])
        if (maxPage <= 1){
            setShowSlides(false)
        }
    }, [currentPage, maxPage, allPictures])

    // functions to increment/decrement current page
    // using maxPage and minPage constants
    function increment(){
        setCurrentPage(prevPage => {
            return prevPage === maxPage ? minPage : prevPage + 1
        })
    }

    function decrement(){
        setCurrentPage(prevPage => {
            return prevPage === minPage ? maxPage : prevPage - 1
        })
    }

    return (
        <section 
            style={{
                backgroundImage: `url(${currentPicture})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'cover',
            }}
            className="carrousel"
        >
            <Arrow direction="left" onClick={decrement} style={styles}/>
            <span 
                style={styles}
                className="carrousel--page"
            >{`${currentPage}/${allPictures.length}`}</span>
            <Arrow direction="right" onClick={increment} style={styles}/>
        </section>
    );
}

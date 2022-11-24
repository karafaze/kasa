import React from "react";
import Arrow from '../arrow/Arrow'

import "./carrousel.css";

export default function Carrousel(props) {
    const allPictures = props.allPictures
    const [currentPage, setCurrentPage] = React.useState(1)
    const [currentPicture, setCurrentPicture] = React.useState(allPictures[currentPage+1])
    const [showSlides, setShowSlides] = React.useState(true)
    const maxPage = allPictures.length;
    const minPage = 1;
    
    const styles = {
        display: !showSlides ? 'none' : 'block'
    }

    React.useEffect(() => {
        setCurrentPicture(allPictures[currentPage-1])
        if (maxPage <= 1){
            setShowSlides(false)
        }
    }, [currentPage, maxPage])

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

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const FilmCarousel = props => {
    return (
        <Carousel>
            {
                props.poster.map((item, index) => (
                    <Carousel.Item
                        key={index}
                    >
                        <img
                        style={{height:'800px', width:'700px'}}
                        className="d-block w-100"
                        src={item}
                    />
                </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default React.memo(FilmCarousel);
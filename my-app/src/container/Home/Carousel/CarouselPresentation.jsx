import React from 'react'
import {Carousel} from 'react-bootstrap'

const CarouselPresentation = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenCarousel"
                        src="https://www.ngenespanol.com/wp-content/uploads/2018/08/El-cannabis-me-ha-cambiado-la-vida-1280x720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenCarousel"
                        src="https://www.farmaceuticonline.com/wp-content/uploads/2019/07/cannabis.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imagenCarousel"
                        src="https://fotos.perfil.com/2020/11/12/trim/1280/720/estas-son-las-propiedades-del-aceite-de-cannabis-que-no-conocias-1075916.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselPresentation

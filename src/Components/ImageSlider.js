import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {

    let settings={
       // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    }

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slide-img1.jpg' alt='Slider-Image'/>
      </Wrap>
      <Wrap>
        <img src='/images/slide-img2.jpg' alt='Slider-Image'/>
      </Wrap>
      <Wrap>
        <img src='/images/slide-img3.jpg' alt='Slider-Image'/>
      </Wrap>
      <Wrap>
        <img src='/images/slide.img4.jpg' alt='Slider-Image'/>
      </Wrap>
      
      <Wrap>
        <img src='/images/slide-img5.jpg' alt='Slider-Image'/>
      </Wrap>

    </Carousel >
  )
}

export default ImageSlider

const Carousel=styled(Slider)`
margin-top:0px;
overflow:hidden;

.slick-list{
    overflow: visible;
}
`
const Wrap=styled.div`
cursor:pointer;
height: 500px;
width: 200px;

img{
    background: transparent;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border:4px solid transparent;
}
`

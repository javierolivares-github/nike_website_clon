import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className='text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]'>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className='productCarousel'
      >
        {/* Carousel images mapping start */}
        {images?.map((img) => (
          <img 
            key={img.id}  
            src={img.attributes.url} 
            alt={img.attributes.name} 
          />
        ))}
        {/* Carousel images mapping end */}
      </Carousel>
    </div>
  )
}

export default ProductDetailsCarousel
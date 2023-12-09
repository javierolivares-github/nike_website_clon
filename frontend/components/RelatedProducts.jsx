import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const RelatedProducts = ({ products }) => {

  // Multicarousel parameters
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  if(!products) {
    return (
      <div>Cargando...</div>
    )
  }

  return (
    // RelatedProduct component start
    <div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>

      {/* RelatedProduct title start*/}
      <div className='text-xl md:text-2xl font-bold mb-5'>También te podría gustar</div>
      {/* RelatedProduct title end*/}
      
      {/* Multicarousel start */}
      <Carousel 
        responsive={responsive}
        containerClass='-mx-[10px]'
        itemClass='px-[10px]'
      >
        {/* Product data mapping start*/}
        {products?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
        {/* Product data mapping end*/}
      </Carousel>
      {/* Multicarousel end */}

    </div>
    // RelatedProduct component start
  )
}

export default RelatedProducts;
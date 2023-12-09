import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getDiscountedPricePercentage } from '@/utils/helper';

const ProductCard = ({data: {id, attributes: p} }) => {
  const price = p.price;
  const formattedPrice = price.toLocaleString('es-ES');
  const originalPrice = p.original_price;
  const formattedOriginalPrice = originalPrice.toLocaleString('es-ES');
  const roundedDiscountPercentage = getDiscountedPricePercentage(originalPrice, price);

  return (
    // ProductCard component start
    <Link 
      href={`/product/${p.slug}`}
      className='transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer'
    >
      
      {/* Product card image start */}
      <Image
        width={500}
        height={500}
        src={p?.thumbnail?.data?.attributes?.url}
        alt={p?.name}
        className='w-full'
      />
      {/* Product card image end */}

      {/* Product card content start */}
      <div className='py-4 pr-4'>
        <p className='text-base md:text-lg font-semibold text-orange-500'>{`Oferta - ${roundedDiscountPercentage}% OFF`}</p>
        <h2 className='text-base md:text-lg font-semibold'>{p?.name}</h2>
        <p className='text-sm md:text-base font-medium text-black/[0.5] mr-2'>{p?.subtitle}</p>
        <div className='flex items-center'>
          <p className='text-base md:text-lg font-medium line-through text-black/[0.5] mr-2'>${formattedOriginalPrice}</p>
          <p className='text-base md:text-lg font-semibold text-black'>${formattedPrice}</p>
        </div>
      </div>
      {/* Product card content end */}

    </Link>
    // ProductCard component end
  )
}

export default ProductCard;
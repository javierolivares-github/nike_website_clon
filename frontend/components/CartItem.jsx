import { updateCart, deleteFromCart } from '@/store/cartSlice';
import Image from 'next/image';
import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';


const CartItem = ({ data }) => {
  const p = data?.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };

  return (
    // CartItem component start
    <div className='flex py-5 gap-3 md:gap-5 border-b'>

      {/* Image start*/}
      <div className='shrink-0 aspect-square w-[50px] md:w-[120px]'>
        <Image 
          src={p?.thumbnail?.data?.attributes?.url}
          width={120}
          height={120}
          alt={p.name}
        />
      </div>
      {/* Image end */}

      {/* Content start*/}
      <div className='w-full flex flex-col'>
        <div className='flex flex-col md:flex-row justify-between'>
          {/* Title */}
          <div className='text-lg md:text-2xl font-semibold 
          text-black/[0.8]'>
            {p.name}
          </div>

          {/* Subtitle */}
          <div className='text-sm font-medium text-black/[0.5] block md:hidden'>
            {p.subtitle}
          </div>

          {/* Price */}
          <div className='text-sm md:text-md font-bold text-black/[0.5] mt-2'>
            {`$${p.price.toLocaleString("ES-es")}`}
          </div> 
        </div>

        {/* Subtitle md screen */}
        <div className='text-md font-medium text-black/[0.5] hidden md:block'>
          {p.subtitle}
        </div>

        {/* Selectors */}
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md'>

            {/* Size selector start */}
            <div className='flex items-center gap-1'>
              <div className="font-bold">Size:</div>
              <select className="hover:text-black bg-white" onChange={(e) => updateCartItem(e, "selectedSize")} defaultValue="UK 10">

                {/* Size data mapping start */}
                {p?.size?.data.map((item, index) => {
                  return (
                    <option
                    key={index}
                    value={item.size}
                    disabled={!item.enabled ? true : false}
                  >
                    {item.size}
                  </option>
                  );
                })}
                {/* Size data mapping end */}   

              </select>  
            </div>
            {/* Size selector end */}

            {/* Quantity selector start*/}
            <div className='flex items-center gap-1'>
              <div className="font-semibold">Quantity:</div>
              <select className="hover:text-black bg-white" onChange={(e) => updateCartItem(e, "quantity")} defaultValue={1}>
                {/* Quantity data mapping start */}
                {Array.from({length: 10}, (_, i) => i + 1).map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={item}
                    >
                      {item}
                    </option>
                  );
                })}
                {/* Quantity data mapping end */} 
              </select>  
            </div>
            {/* Quantity selector end */}

          </div>

          {/* Delete action start */}
          <RiDeleteBin6Line 
            className='cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]'
            onClick={() => dispatch(deleteFromCart({id: data.id}))}
          />
          {/* Delete action end */}
        </div>



      </div>
    </div>
    // Componente elemento de carrito fin
  )
}

export default CartItem
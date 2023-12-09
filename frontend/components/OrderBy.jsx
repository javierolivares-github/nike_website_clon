import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const orderByMenu = [
  {id: 1, name: "Precio más bajo", option: "orderByPriceASC"},
  {id: 2, name: "Precio más alto", option: "orderByPriceDESC"},
  {id: 3, name: "A - Z", option: "orderByNameASC"},
  {id: 4, name: "Z - A", option: "orderByNameDESC"},
  {id: 5, name: "Fecha de lanzamiento", option: "orderByReleaseDate"},
];


const OrderBy = ({ optionSelected, setOptionSelected }) => {
  const [showOrderMenu, setShowOrderMenu] = useState(false);
  const [optionName, setOptionName] = useState("");

  return (
    // ORDERBY COMPONENT START
    <fieldset className='relative flex justify-end'>

      {/* Header start */}
      <div 
        className='flex flex-row justify-end items-end text-black/[0.90] gap-4 cursor-pointer'
        onClick={() => setShowOrderMenu(!showOrderMenu)}
      >
        <span className='text-base font-medium'>Ordenar por: <span className='text-black/[0.4]'>{optionName}</span></span>
        <span className='pb-[2px]'>
          {!showOrderMenu ? (
            <BsChevronDown size={16} />
          ) : (
            <BsChevronUp size={16} />
          )}
        </span>
      </div>
      {/* Header end */}
      
      {/* Body start */}
      {showOrderMenu && (
        <div className='rounded bg-white px-2 py-3 shadow-lg flex flex-col gap-2 w-fit text-sm absolute top-6 right-0 z-10'>

          {orderByMenu?.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 cursor-pointer hover:bg-black/[0.1] rounded px-1 py-2 ${optionSelected === item.option ? 'bg-black/[0.1]' : ''}`}
              onClick={() => {
                setOptionSelected(item.option);
                setOptionName(item.name)
                setShowOrderMenu(false)
              }}
            >
              {item.name}
            </div>
          ))}
          
        </div>
      )}
      {/* Body end */}

    </fieldset>
    // ORDERBY COMPONENT END
  )
}

export default OrderBy
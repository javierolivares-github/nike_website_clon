import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroBanner = () => {
  return (
    <div className='relative text-white text-[20px] w-full max-w-[1360px] mx-auto'>
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showIndicators={false} 
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className='absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]
            bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90'
          >
            <BiArrowBack className='text-sm md:text-lg' />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px]
            bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90'
          >
            <BiArrowBack className='rotate-180 text-sm md:text-lg' />
          </div>
        )}
      >
        {/* SLIDE 1 */}
        <div>
          <img src="/slide-1.png" alt="Image 1" className='aspect-[16/10] md:aspect-auto object-cover '/>
          <div className='px-[20px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Show Now
          </div>
        </div>
        {/* SLIDE 1 */}

        {/* SLIDE 2 */}
        <div>
          <img src="/slide-2.png" alt="Image 2" className='aspect-[16/10] md:aspect-auto object-cover '/>
          <div className='px-[20px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Show Now
          </div>
        </div>
        {/* SLIDE 2 */}

        {/* SLIDE 3 */}
        <div>
          <img src="/slide-3.png" alt="Image 3" className='aspect-[16/10] md:aspect-auto object-cover '/>
          <div className='px-[20px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] 
          text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
            Show Now
          </div>
        </div>
        {/* SLIDE 3 */}
        
      </Carousel>
    </div>
  )
}

export default HeroBanner
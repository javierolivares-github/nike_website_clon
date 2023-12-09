import React, { useState, useEffect } from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsBag } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '@/store/categorySlice';


const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.items);
  const {cartItems} = useSelector(state => state.cart);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShowNavbar("-translate-y-[80px]");
      }
    } else {
      setShowNavbar("shadow-sm");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  

  return (
    // Header start
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${showNavbar}`}>
      <Wrapper className="h-[60px] flex justify-between items-center">

        {/* Logo start */}
        <Link href="/">
          <img src="/logo.svg" alt="logo" className='w-[40px] md:w-[60px]' />
        </Link>
        {/* Logo end */}

        {/* Menu laptop, pc & smartTv start */}
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} categoryData={categories}/>
        {/* Menu laptop, pc & smartTv end */}

        {/* Menu mobile start */}
        {mobileMenu && (
          <MobileMenu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} 
          setMobileMenu={setMobileMenu} categoryData={categories} />
        )}
        {/* Menu mobile end */}

        {/* Menu icons start */}
        <div className='flex items-center gap-2 text-black'>

          {/* Heart icon start */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
            <IoMdHeartEmpty className='text-[20px] md:text-[24px]'/>
            <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
              57
            </div>
          </div>
          {/* Heart icon end */}

          {/* Shopping Bag icon start */}
          <Link href="/cart">
            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
              <BsBag className='text-[17px] md:text-[21px]'/>
              {cartItems.length > 0 && (
                <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]'>
                  {cartItems.length}
                </div>
              )}

            </div>
          </Link>
          {/* Shopping Bag icon end */}

          {/* Mobile menu icon start */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full md:hidden flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
            {mobileMenu ? (
              <VscChromeClose className='text-[16px]' onClick={()=> setMobileMenu(false)} />
            ) : (
              <BiMenuAltRight className='text-[21px]' onClick={()=> setMobileMenu(true)} />
            )}
          </div>
          {/* Mobile menu icon end */}
        
        </div>
        {/* Menu icons end */}

      </Wrapper>
    </header>
    // Header end
  )
}

export default Header
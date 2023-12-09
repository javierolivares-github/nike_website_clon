import React from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

const menuData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Acerca de", url: "/about" },
  { id: 3, name: "Categorías", subMenu: true },
  { id: 4, name: "Contacto", url: "/contact" },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu, categoryData }) => {
  return (
    <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black text-sm'>

      {/* MobileMenu items start */}
      {menuData.map((item)=> {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (

              <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative' onClick={()=> setShowCatMenu(!showCatMenu)}>

                <div className='flex justify-between items-center'>
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>

                    {/* Mapping MobileSubMenu items start */}
                    {categoryData?.map(({ id, attributes: c }) => (
                      <Link 
                      key={id} 
                      href={`/category/${c.slug}`}
                      onClick={()=> {
                        setShowCatMenu(false);
                        setMobileMenu(false);
                      }}
                      >
                        <li className='py-4 px-8 border-t flex justify-between items-center'>
                          {c.name}
                          <span className='opacity-50 text-sm'>{`(${c.products.data.length})`}</span>
                        </li>
                      </Link>
                    ))}
                    {/* Mapping MobileSubMenu items end */}

                  </ul>
                )}

              </li>

            ) : (

              <li className='py-4 px-5 border-b'>
                <Link href={item?.url} onClick={()=> setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>

            )}
          </React.Fragment>
        )
      })}
      {/* MobileMenu items end */}

    </ul>
  )
}

export default MobileMenu
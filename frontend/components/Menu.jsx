import Link from 'next/link';
import React from 'react';
import { BsChevronDown } from "react-icons/bs";

const menuData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Noticias", url: "/noticias" },
  { id: 3, name: "Categorías", subMenu: true },
  { id: 4, name: "Ofertas", url: "/ofertas" },
];

const Menu = ({ showCatMenu, setShowCatMenu, categoryData }) => {
  return (
    // Menu start
    <ul className='hidden md:flex items-center gap-8 font-medium text-black text-base'>

      {/* Menu items Mapping start */}
      {menuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li className='cursor-pointer flex items-center gap-2 relative' onMouseEnter={()=> setShowCatMenu(true)} onMouseLeave={()=> setShowCatMenu(false)}>

                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg'>

                    {/* SubMenu items Mapping start */}
                    {categoryData?.map(({ id, attributes: c }) => {
                      return (
                        <Link key={id} href={`/category/${c.slug}`} onClick={()=> setShowCatMenu(false)}>
                          <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md'>
                            {c.name}
                            <span className='opacity-50 text-sm'>{`(${c?.products?.data?.length})`}</span>
                          </li>
                        </Link>
                      )
                    })}
                    {/* SubMenu items Mapping end */}

                  </ul>
                )}

              </li>
              ) : (
              <li className='cursor-pointer'>
                <Link href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        )
      })}
      {/* Menu items Mapping end */}
    </ul>
    // Menu end
  )
}

export default Menu
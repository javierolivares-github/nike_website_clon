import React, {useEffect, useState} from 'react';
import ProductCard from '@/components/ProductCard';
import Wrapper from '@/components/Wrapper';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getCartInitialState } from '@/store/cartSlice';
import { fetchCategoryBySlug } from '@/store/categorySlice';
import { fetchProductsByCateg } from '@/store/productSlice';
import { useSlug } from '@/utils/helper';




const Category = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const category = useSelector(state => state.categories.itemBySlug);
  const products = useSelector(state => state.products.itemsByCat)
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{ setLoading(false) }, 1000);
    
    const slug = useSlug('/category/');
    dispatch(fetchCategoryBySlug(slug));
    dispatch(fetchProductsByCateg(slug))
    dispatch(getCartInitialState());
  }, [router.asPath, dispatch]);

  

  // Loading page start
  if (!products || loading) {
    return (
      <Loading />
    )
  }
  // Loading page end

  return (
    // Category page start
    <div className='w-full md:py-20 relative'>
      <Wrapper>

        {/* Title start */}
        <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
          <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
            {category?.[0].attributes?.name}
          </div>
        </div>
        {/* Title end */}

        {/* Product grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">

          {/* Product data mapping start */}
          {products?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
          {/* Product data mapping end */}

        </div>
        {/* Product grid end */}

      </Wrapper>
    </div>
    // Category page end
  )
}

export default Category;


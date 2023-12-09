import React, {useState, useEffect} from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, getCartInitialState } from '@/store/cartSlice';
import { fetchProductBySlug, fetchRelatedProducts } from '@/store/productSlice';
import { useNotify, useSlug } from '@/utils/helper';


const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.itemBySlug);
  const relatedProducts = useSelector(state => state.products.relatedProducts);
  const p = product?.[0]?.attributes;
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{ setLoading(false) }, 1000);
    
    const slug = useSlug('/product/');
    dispatch(fetchProductBySlug(slug));
    dispatch(fetchRelatedProducts(slug));
    dispatch(getCartInitialState());
  }, [router.asPath, dispatch]);


  // Loading page start
  if (!product || loading) {
    return (
      <Loading />
    )
  }
  // Loading page end

  return (
    // Product details page start
    <div className='w-full md:py-20'>
      <ToastContainer />
      <Wrapper>
        <div className='flex lg:flex-row lg:gap-[100px] md:px-10 flex-col gap-[50px]'>

          {/* Left column start */}
          <div className='flex-[1.5] w-full max-w-[500px] mx-auto md:w-auto lg:max-w-full lg:mx-0'>
            
            {/* Product carousel start */}
            <ProductDetailsCarousel images={p?.image?.data} />
            {/* Product carousel end */}

          </div>
          {/* Left column end */}

          
          {/* Right column start */}
          <div className='flex-[1] py-3'>
            
            {/* Product title start */}
            <div className='text-[28px] md:text-[34px] font-semibold mb-2 leading-tight'>
              {p?.name}
            </div>
            {/* Product title end */}

            {/* Product subtitle start */}
            <div className='text-base md:text-lg font-semibold mb-5'>
              {p?.subtitle}
            </div>
            {/* Product subtitle start */}

            {/* Product price start */}
            <div className='text-lg md:text-xl font-semibold'>
              {`$${p?.price.toLocaleString("ES-es")}`}
            </div>
            <div className='text-sm md:text-base font-medium text-black/[0.5]'>
              Incluye impuestos
            </div>
            <div className='text-sm md:text-base font-medium text-black/[0.5] mb-10 md:mb-20'>
              {`(También incluye todos los aranceles aplicables)`}
            </div>
            {/* Product price end */}

            {/* Product size selector start */}
            <div className='mb-10'>
              
              {/* Product size selector headings start */}
              <div className='flex justify-between mb-2'>
                <div className='text-sm md:text-base font-semibold'>Seleccionar Talla</div>
                <div className='text-sm md:text-base font-medium text-black/[0.5] cursor-pointer'>Seleccionar Guía</div>
              </div>
              {/* Product size selector heading end */}

              {/* Product size selector grid start */}
              <div className='text-sm md:text-base grid grid-cols-3 gap-2' id='sizesGrid'>

                {/* Product size data mapping start*/}
                {p?.size?.data?.map((item, index) => (
                  <div 
                    key={index} 
                    className={`
                    border rounded-md text-center py-3 font-medium ${item.enabled ? 'hover:border-black cursor-pointer' : 'cursor-not-allowed bg-black/[0.1] opacity-50'} ${selectedSize === item.size ? 'border-black' : ''}
                    `}
                    onClick={() => {
                      setSelectedSize(item.size)
                      setShowError(false)
                    }}
                  >
                    {item.size}
                  </div>
                ))}
                {/* Product size data mapping end*/}

              </div>
              {/* Product size selector grid end */}

              {/* Show error start */}
              {showError && (
                <div className='text-red-600 mt-1 text-sm md:text-base'>
                  Selecciona un tamaño
                </div>
              )}
              {/* Show error end */}

            </div>
            {/* Product size selector end */}

            {/* Add to cart button start */}
            <button 
              className='w-full py-4 rounded-full bg-black text-white text-base md:text-lg font-semibold 
              transition-transform active:scale-95 mb-3 hover:opacity-75' 
              onClick={() => {

                if(!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({block: "center", behavior: "smooth"});
                } else {
                  dispatch(addToCart({
                    ...product?.[0],
                    selectedSize,
                    oneQuantityPrice: p?.price
                  }));
                  useNotify('Genial. Tu producto fue agregado al carrito!');
                }
                
              }}
            >
              Agregar a la bolsa de compra
            </button>
            {/* Add to cart button end */}
            
            {/* Whishlist button start */}
            <button className='w-full py-4 rounded-full border border-black text-base md:text-lg font-semibold 
            transition-transform active:scale-95 hover:opacity-75 flex justify-center items-center gap-2 mb-10'>
              Lista de deseos
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Whishlist button end */}
           
            {/* Product description start */}
            <div>
              <div className='text-base md:text-lg font-bold mb-5'>
                Datos del producto
              </div>
              <div className='text-sm md:text-base mb-5 markdown'>
                <ReactMarkdown>
                  {p?.description}
                </ReactMarkdown>
              </div>
            </div>
            {/* Product description end */}

          </div>
          {/* Right column end */}

        </div>

        {/* RelatedProduct component start */}
        <RelatedProducts products={relatedProducts} />
        {/* RelatedProduct component end */}

      </Wrapper>
    </div>
    // Product details page start
  )
}

export default ProductDetails;



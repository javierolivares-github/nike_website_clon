import React, {useEffect, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '@/components/Wrapper';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart, getCartInitialState } from '@/store/cartSlice';
import { useRouter } from 'next/router';


const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Obtener subtotal
  const subTotal = useMemo(()=> {
    return cartItems.reduce((total, val) => total + val.attributes.price, 0);
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartInitialState());
  }, [router.asPath]);

  return (
    // Página de carrito inicio
    <div className='w-full md:py-20'>
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* Cart page title start */}
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
              <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                Carrito de compras
              </div>
            </div>
            {/* Cart page title end */}

            {/* Cart page content start */}
            <div className='flex flex-col lg:flex-row gap-12 py-10'>

              {/* Cart items start */}
              <div className='flex-[2]'>
                {/* Titulo */}
                <div className='text-base md:text-lg font-bold'>Artículos del carrito</div>
                {/* Mapeo de elementos de carrito*/}
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item}/>
                ))}
                
              </div>
              {/* Cart items end */}

              {/* Resumen del Carrito inicio */}
              <div className='flex-[1]'>
                <div className='text-base md:text-lg font-bold'>Resumen</div>

                <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                  {/* Subtotal inicio */}
                  <div className='flex justify-between'>
                    <div className='uppercase text-base md:text-lg font-medium text-black'>Subtotal:</div>
                    <div className='text-base md:text-lg font-medium text-black'>{`$${subTotal.toLocaleString("ES-es")}`}</div>
                  </div>
                  {/* Subtotal final */}

                  {/* Explicación inicio */}
                  <div className='text-sm md:text-md py-5 border-t mt-5'>
                    El subtotal refleja el precio total de tu pedido, incluyendo los impuestos y aranceles, antes 
                    de aplicar cualquier descuento correspondiente. No incluye los costos de envío ni las tarifas de 
                    transacción internacionales.
                  </div>
                  {/* Explicación final */}
                </div>

                {/* Botón finalizar compra inicio */}
                <Link href="/success">
                  <button 
                    className='w-full py-4 rounded-full bg-black text-white 
                    text-base md:text-lg font-semibold transition-transform active:scale-95 mb-3 hover:opacity-75'
                    onClick={() => {
                      setTimeout(() => {
                        dispatch(emptyCart());
                      }, 800);
                    }}
                  >
                    Finalizar compra
                  </button>
                </Link>
                {/* Botón finalizar compra fin */}
              </div>
              {/* Resumen del carrito fin */}
            </div>
            {/* Cart page content end*/}
          </>
        )}

        {cartItems.length < 1 && (
          // Pantalla de Carrito vacio inicio
          <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
            
            <Image 
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className='w-[300px] md:w-[400px]'
              alt='Sad empty cart image'
            />

            <span className='text-lg md:text-xl font-bold'>
              Tu carrito está vacío.
            </span>
            <span className='text-sm md:text-base text-center mt-4'>
              Parece que no has agregado nada a tu carrito.
              <br />
              Continúa y explora las principales categorías.
            </span>
  
            <Link href="/" className='w-full md:max-w-[360px] mt-8 text-sm md:text-base'>
              <Button text="Seguir Comprando" />
            </Link>

          </div>
          // Pantalla de Carrito vacio fin
        )}  
      
      </Wrapper>
    </div>
    // Página de carrito fin
  )
}

export default Cart
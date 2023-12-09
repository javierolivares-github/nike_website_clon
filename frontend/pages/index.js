import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartInitialState } from "@/store/cartSlice";
import { 
  fetchProducts, 
  fetchProductsSortedByPriceASC,
  fetchProductsSortedByPriceDESC,
  fetchProductsSortedByNameASC,
  fetchProductsSortedByNameDESC,
  fetchProductsSortedByReleaseDate, 
} from "@/store/productSlice";

import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import OrderBy from "@/components/OrderBy";
import Loading from "@/components/Loading";


export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const [optionSelected, setOptionSelected] = useState("");

  // Ejecuta una vez al cargar la página
  useEffect(() => {
    dispatch(getCartInitialState());
  }, [dispatch]);

  useEffect(() => {
    switch (optionSelected) {
      case "orderByPriceASC":
        dispatch(fetchProductsSortedByPriceASC());
        console.log("You've selected orderByPriceASC");
        break;
      case "orderByPriceDESC":
        dispatch(fetchProductsSortedByPriceDESC());
        console.log("You've selected orderByPriceDESC");
        break;
      case "orderByNameASC":
        dispatch(fetchProductsSortedByNameASC());
        console.log("You've selected orderByNameASC");
        break;
      case "orderByNameDESC":
        dispatch(fetchProductsSortedByNameDESC());
        console.log("You've selected orderByNameDESC");
        break;
      case "orderByReleaseDate":
        dispatch(fetchProductsSortedByReleaseDate());
        console.log("You've selected orderByReleaseDate");
        break;
      default:
        dispatch(fetchProducts());
        console.log("Default option")
    }
  }, [optionSelected, dispatch]);


  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    // Homepage start
    <main>
      {/* Banner start */}
      <HeroBanner />
      {/* Banner end */}
      
      <Wrapper>
        {/* Heading and paragraph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Amortiguación para tus millas.
          </div>
          <div className="text-base md:text-xl text-black/[0.85]">
            La entresuela Nike ZoomX liviana se combina con alturas de amortiguación aumentadas
            para brindar comodidad durante largas sesiones de carrera. 
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* Order by component start */}
        <OrderBy optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
        {/* Order by component end */}

        {/* Product grid start*/}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {products?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        )}
        {/* Product grid end*/}

      </Wrapper>
    </main>
    // Homepage end
  )
}


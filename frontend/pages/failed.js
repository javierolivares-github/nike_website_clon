import React, { useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getCartInitialState } from "@/store/cartSlice";


const Failed = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartInitialState());
  }, [router.asPath]);

  return (
      <div className="min-h-[650px] flex items-center">
        <Wrapper>
          <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
            <div className="text-2xl font-bold">Pago fallido!</div>
            <div className="text-base mt-5">
              Para cualquier consulta relacionada con productos, envía un correo electrónico a
            </div>
            <div className="underline">shoeshopcontact@shop.com</div>

            <Link href="/" className="font-bold mt-5">
              Continuar comprando              
            </Link>
          </div>
        </Wrapper>
      </div>
  );
};

export default Failed;
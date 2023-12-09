import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">

        {/* LEFT START */}
        <div className="flex flex-col gap-[50px] md:flex-row md:gap-[75px] lg:gap-[100px]">
          
          {/* MENU 1 START */}
          <div className="flex flex-col gap-3 shrink-0 font-oswald font-medium uppercase text-sm">
            <div className="cursor-pointer">
              Encuentra una tienda
            </div>
            <div className="cursor-pointer">
              Conviérte en socio
            </div>
            <div className="cursor-pointer">
              Suscríbete al correo electrónico
            </div>
            <div className="cursor-pointer">
              Envíanos tus comentarios
            </div>
            <div className="cursor-pointer">
              Descuentos para estudiantes
            </div>
          </div>
          {/* MENU 1 END */}

          {/* MENU 2 START */}
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            {/* MENU START */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="font-oswald font-medium uppercase">
                Obtener ayuda
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Estado del pedido
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Entrega
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Devoluciones
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Opciones de pago
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Contáctanos
              </div>
            </div>
            {/* MENU END */}

            {/* MENU START */}
            <div className="flex flex-col gap-3 text-sm">
              <div className="font-oswald font-medium uppercase">
                Acerca de Nike
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Noticias
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Carreras
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Inversionistas
              </div>
              <div className="text-white/[0.5] hover:text-white cursor-pointer">
                Sostenibilidad
              </div>
            </div>
            {/* MENU END */}
          </div>
          {/* MENU 2 END */}
        </div>
        {/* LEFT END */}

        {/* RIGHT START */}
        <div className="flex gap-4 justify-center md:justify-start">
          <Link href="https://facebook.com" target="_blank" className="w-10 h-10 rounded-full bg-white/[0.25] flex justify-center items-center text-black hover:text-white/[0.5] cursor-pointer">
            <FaFacebookF size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="w-10 h-10 rounded-full bg-white/[0.25] flex justify-center items-center text-black hover:text-white/[0.5] cursor-pointer">
            <FaTwitter size={20} />
          </Link>
          <Link href="https://youtube.com" target="_blank" className="w-10 h-10 rounded-full bg-white/[0.25] flex justify-center items-center text-black hover:text-white/[0.5] cursor-pointer">
            <FaYoutube size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/[0.25] flex justify-center items-center text-black hover:text-white/[0.5] cursor-pointer">
            <FaInstagram size={20} />
          </Link>
        </div>
        {/* RIGHT END */}
      </Wrapper>

      {/* AUTHOR AND TERMS */}
      <Wrapper className="mt-10 flex flex-col gap-[10px] md:flex-row md:gap-0 justify-between">
          {/* LEFT START */}
            <div className="text-[12px] text-white/[0.5] hover:text-white text-center cursor-pointer md:text-left">
              &copy; 2023 Nike, Inc. Todos los derechos reservados.
            </div>
          {/* LEFT END */}

          {/* RIGHT START */}
          <div className="flex gap-2 text-center flex-wrap justify-center md:gap-5 md:text-left text-[12px]">
            <div className="text-white/[0.5] hover:text-white cursor-pointer">
              Guías
            </div>
            <div className="text-white/[0.5] hover:text-white cursor-pointer">
              Términos de venta
            </div>
            <div className="text-white/[0.5] hover:text-white cursor-pointer">
              Términos de uso
            </div>
            <div className="text-white/[0.5] hover:text-white cursor-pointer">
              Política de privacidad
            </div>
          </div>
          {/* RIGHT END */}
      </Wrapper>
    </footer>
  )
}

export default Footer
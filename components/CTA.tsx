'use client'

import Image from "next/image";
import imagen1 from "@/images/control1.jpg";
import imagen2 from "@/images/control2.jpeg";
import imagen3 from "@/images/pest-control-30.jpg";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useMobileView } from "@/context/MobileViewContext";

export const CTA = () => {
  const isMobile = useMobileView();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:w-[90%] w-[95%] gap-10 px-6 py-12 mx-auto md:h-[600px] min-h-[60vh]">
      <div className="md:max-w-lg space-y-5 ">
        <span className="font-semibold italic text-zinc-400 md:text-base text-sm">Solicitá una cotización sin compromiso.</span>
        <h2 className="md:text-3xl text-xl font-bold leading-snug font-serif">
          ¿Necesitás un servicio de desinfección confiable y profesional?
        </h2>
        <p className="md:text-lg leading-relaxed text-[#41413F]">Protegé tu hogar o negocio con nuestras soluciones efectivas y seguras.</p>
        <div className="flex items-center gap-2 md:mb-10 mb-5">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
        </div>
        <Link href={'/contact-us'} className="bg-[#4A9B57] text-white px-5 py-3 cursor-pointer rounded-md hover:bg-gray-800 transition">
          Cotizá tu servicio
        </Link>
      </div>
      
      {!isMobile ? (
        <div className="relative md:w-[400px] w-[300px] md:h-[300px] h-[200px]">
          <div className="absolute top-[-100] md:left-[-100] left-[-20] w-full h-full z-10">
            <Image
              src={imagen1}
              alt="Control 1"
              className="object-cover rounded-lg shadow-xl w-full h-full"
              style={{ objectPosition: "center" }}
            />
          </div>
  
          <div className="absolute top-[-20] left-0 w-full h-full z-5">
            <Image
              src={imagen2}
              alt="Control 2"
              className="object-cover rounded-lg shadow-md w-full h-full"
              style={{ objectPosition: "center" }}
            />
          </div>
          <div className="absolute md:top-[80] top-[60] md:left-[-220] left-[-20] w-full h-full z-9 ">
            <Image
              src={imagen3}
              alt="Control 3"
              className="object-cover rounded-lg shadow w-full h-full"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      ) : (
        <div className="relative w-[300px] h-[200px]">
          <Image
            src={imagen1}
            alt="Control 1"
            className="object-cover rounded-lg shadow-xl w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      )}
    </div>
  );
};

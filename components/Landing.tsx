"use client";

import backgroundImage from "@/images/fumigacion.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

export const Landing = () => {
  return (
    <section className="relative h-[calc(100vh-176px)] min-h-[400px] flex items-center md:pl-26 overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              120deg, 
              rgba(58, 90, 64, 0.97) 55%, 
              rgba(58, 90, 64, 0.7) 60%, 
              rgba(58, 90, 64, 0.1) 70%, 
              rgba(58, 90, 64, 0) 75%
            ),
            url(${backgroundImage.src}) right center / cover no-repeat
          `,
          maskImage: "linear-gradient(120deg, #000 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(120deg, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4 gap-0 md:gap-4">
        <motion.div
          className="flex-1 flex flex-col items-start md:justify-center text-left gap-4 md:pl-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="uppercase tracking-widest text-green-200 font-semibold text-sm md:text-base mb-2">
            Protección profesional
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white font-sans drop-shadow-lg leading-tight">
            Cuidamos tu espacio,
            <br />
            cuidamos tu salud
          </h1>
          <p className="text-green-100 text-lg md:text-2xl font-medium max-w-lg">
            Expertos en control de plagas y desinfección ambiental para hogares,
            empresas y consorcios.
            <span className="block mt-2 text-green-200 text-base font-normal">
              Servicio rápido, seguro y certificado.
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#services"
              className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-lg transition-all duration-200"
            >
              Nuestros servicios
            </a>
            <Link
              href="/contact-us"
              className="px-8 py-3 rounded-full border border-green-400 text-green-100 hover:bg-green-700 hover:text-white font-semibold text-lg shadow transition-all duration-200"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </motion.div>
        <div className="hidden md:block flex-1" />
      </div>
    </section>
  );
};

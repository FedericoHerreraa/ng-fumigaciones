'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const AboutUsComponent = () => {
  return (
    <section className="w-full mx-auto py-24 px-14 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-zinc-100">
      <motion.div
        className="flex-1 flex flex-col items-start"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-green-900">
          Somos <span className="text-green-700">NG Desinfecciones</span>
        </h1>
        <p className="text-green-900/80 text-lg md:text-md mb-6 max-w-xl">
          Más de una década protegiendo hogares y empresas con soluciones
          profesionales en desinfección y control de plagas. Nuestro compromiso
          es tu tranquilidad y la de los tuyos.
        </p>
        <Link
          href={"/about-us"}
          className="inline-block px-8 py-3 rounded-full bg-green-700 hover:bg-green-800 text-white font-semibold text-lg shadow-md hover:scale-105 transition-all duration-200"
        >
          Conocenos
        </Link>
      </motion.div>
      <motion.div
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src='/web/images/logo.png'
          alt="Logo"
          className="w-56 h-36 object-contain drop-shadow-xl"
          priority
          unoptimized={true}
        />
      </motion.div>
    </section>
  );
};

import Link from "next/link";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";
import Image from "next/image";
import logo from "@/images/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#4a6b4d] text-white pt-10 pb-4 mt-20 ">
      <div className="md:w-[80%] w-[95%] mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col items-center md:items-start gap-4 md:w-3/8 w-full">
          <Image
            src={logo}
            alt="Logo NG Fumigaciones"
            width={200}
            height={160}
            className="object-contain"
          />
          <p className="text-sm text-green-100 max-w-xs text-center md:text-left">
            NG Desinfecciones - Soluciones profesionales en control de plagas
            para hogares y empresas.
          </p>
        </div>
        <div className="flex flex-col text-left gap-2 md:w-1/8 w-full">
          <h4 className="font-semibold text-lg mb-2 text-green-100">Enlaces</h4>
          <Link href="/" className="hover:text-green-300 transition-colors">
            Inicio
          </Link>
          <Link
            href="/#services"
            className="hover:text-green-300 transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="/about-us"
            className="hover:text-green-300 transition-colors"
          >
            Sobre nosotros
          </Link>
          <Link
            href="/contact-us"
            className="hover:text-green-300 transition-colors"
          >
            Contáctanos
          </Link>
        </div>

        <div className="flex flex-col gap-2 md:w-3/8 w-full">
          <h4 className="font-semibold text-lg mb-2 text-green-100">
            Contacto
          </h4>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-green-300" />
            <span>Av. Del Campo 1290, CABA</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-green-300" />
            <span>4552-1746</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-green-300" />
            <span>info@ngfumigaciones.com</span>
          </div>
          <div className="mt-4 rounded-md overflow-hidden w-full">
            <iframe
              title="Ubicación NG Desinfecciones"
              src="https://www.google.com/maps?q=Av.+Del+Campo+1290,+CABA&output=embed"
              height="120"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center md:items-end md:w-1/8 w-full">
          <h4 className="font-semibold text-lg mb-2 text-green-100">
            Seguinos
          </h4>
          <div className="flex gap-4">
            <a
              href="https://wa.me/541112345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-green-400 hover:text-green-200 text-2xl transition-colors" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="text-blue-400 hover:text-blue-200 text-2xl transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-pink-300 hover:text-pink-100 text-2xl transition-colors" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-y border-green-900/30 pt-4 pb-4 flex flex-col md:flex-row justify-center items-center gap-2 text-xs md:text-sm text-green-100 font-medium">
        <span>
          © {new Date().getFullYear()} NG Fumigaciones. Todos los derechos
          reservados.
        </span>
        <span className="hidden md:inline mx-2 text-green-300">|</span>
        <a
          href="https://www.asneedsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-green-700 via-green-800 to-green-700 px-3 py-1 rounded-full shadow-md font-light hover:scale-105 transition-transform"
        >
          Desarrollado por{" "}
          <span className="text-green-200 font-bold">AsNeed Solutions</span>
        </a>
      </div>
    </footer>
  );
};

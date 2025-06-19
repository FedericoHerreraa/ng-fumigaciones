import logo from "@/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export const AboutUsComponent = () => {
  return (
    <section className="w-full max-w-7xl mx-auto my-24 px-4 md:px-0 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-green-900">
          Somos <span className="text-green-700">NG Desinfecciones</span>
        </h1>
        <p className="text-green-900/80 text-lg md:text-xl mb-6 max-w-xl">
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
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src={logo}
          alt="Logo"
          className="w-56 h-36 object-contain drop-shadow-xl"
          priority
        />
      </div>
    </section>
  );
};

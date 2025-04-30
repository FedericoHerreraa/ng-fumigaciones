import Image from "next/image";
import imagen1 from "@/images/control1.jpg";
import imagen2 from "@/images/control2.jpeg";
import imagen3 from "@/images/pest-control-30.jpg";

export const CTA = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[85%] gap-10 px-6 py-12 mx-auto h-[600px]">
      {/* texto de CTA */}
      <div className="md:max-w-lg space-y-6 ">
        <h2 className="text-3xl font-bold leading-snug">
          ¿Necesitás un servicio de fumigación confiable y profesional?
        </h2>
        <p className="text-lg leading-relaxed text-[#41413F]">
          Protegé tu hogar o negocio con nuestras soluciones efectivas y seguras.
          <br />
          <span className="font-semibold">Solicitá una cotización sin compromiso.</span>
        </p>
        <button className="bg-[#4A9B57] text-white px-5 py-3 rounded-md hover:bg-gray-800 transition">
          Cotizá tu servicio
        </button>
      </div>

      {/* Imagenes superpuestas */}
      <div className="relative w-[400px] h-[300px]">
        <div className="absolute top-[-100] left-[-100] w-full h-full z-10">
          <Image
            src={imagen1}
            alt="Control 1"
            className="object-cover rounded-lg shadow-xl w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>

        <div className="absolute top-[-5] left-0 w-full h-full z-5">
          <Image
            src={imagen2}
            alt="Control 2"
            className="object-cover rounded-lg shadow-md w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="absolute top-[80] left-[-220] w-full h-full z-9 ">
          <Image
            src={imagen3}
            alt="Control 3"
            className="object-cover rounded-lg shadow w-full h-full"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

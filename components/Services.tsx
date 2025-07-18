import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    name: "Mosquitos",
    image: '/web/images/mosquito.png',
    desc: "Tratamientos efectivos para eliminar y prevenir la proliferación de mosquitos en interiores y exteriores.",
  },
  {
    name: "Alacranes",
    image: '/web/images/alacran.png',
    desc: "Control y prevención de alacranes en viviendas, empresas y espacios comunes.",
  },
  {
    name: "Cucarachas",
    image: '/web/images/cucaracha.png',
    desc: "Eliminación profesional de cucarachas con productos seguros y de alta eficacia.",
  },
  {
    name: "Pulgas",
    image: '/web/images/pulga.png',
    desc: "Desinfección y control de pulgas en hogares, mascotas y ambientes cerrados.",
  },
  {
    name: "Roedores",
    image: '/web/images/roedores.png',
    desc: "Control integral de roedores con métodos seguros y efectivos.",
  },
  {
    name: "Murciélagos",
    image: '/web/images/murcielagos.png',
    desc: "Prevención y control de murciélagos, respetando la normativa vigente.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-green-900 mb-12">
        Conocé Nuestros Servicios
      </h2>

      <div className="flex flex-wrap gap-6 justify-center mx-auto border-t border-gray-200 pt-6 pb-12">
        {services.map((item) => (
          <Link
            key={item.name}
            href={`/detail/${item.name.toLowerCase()}`}
            className="bg-white shadow-md rounded-lg overflow-hidden relative group flex flex-col flex-1 min-w-[260px] max-w-[320px] basis-[300px]"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized={true}
              />
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold text-zinc-900 mb-1">
                Control {item.name}
              </h3>
              <p className="text-sm font-semibold text-green-600 uppercase mb-4">
                {item.desc}
              </p>

              <div className="flex justify-end mt-auto">
                <span className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition">
                  <FaArrowRight />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

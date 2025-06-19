import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import Cucaracha from "@/images/cucaracha.png";
import Alacran from "@/images/alacran.png";
import Mosquito from "@/images/mosquito.png";
import Pulga from "@/images/pulga.png";
import Palomas from "@/images/palomas.png";
import Roedores from "@/images/roedores.png";
import Murcielagos from "@/images/murcielagos.png";

const services = [
  {
    name: "Mosquitos",
    image: Mosquito,
    desc: "Tratamientos efectivos para eliminar y prevenir la proliferación de mosquitos en interiores y exteriores.",
  },
  {
    name: "Alacranes",
    image: Alacran,
    desc: "Control y prevención de alacranes en viviendas, empresas y espacios comunes.",
  },
  {
    name: "Cucarachas",
    image: Cucaracha,
    desc: "Eliminación profesional de cucarachas con productos seguros y de alta eficacia.",
  },
  {
    name: "Pulgas",
    image: Pulga,
    desc: "Desinfección y control de pulgas en hogares, mascotas y ambientes cerrados.",
  },
  {
    name: "Palomas",
    image: Palomas,
    desc: "Soluciones para evitar la presencia y anidación de palomas en techos y balcones.",
  },
  {
    name: "Roedores",
    image: Roedores,
    desc: "Control integral de roedores con métodos seguros y efectivos.",
  },
  {
    name: "Murciélagos",
    image: Murcielagos,
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


import Image from "next/image";
import Cucaracha from "@/images/cucaracha.png";
import Alacran from "@/images/alacran.png";
import Mosquito from "@/images/mosquito.png";
import Pulga from "@/images/pulga.png";
import Palomas from "@/images/palomas.png";
import Roedores from "@/images/roedores.png";
import Murcielagos from "@/images/murcielagos.png";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export const Services = () => {
  return (
    <div id="services" className="min-h-[70vh] py-20 flex flex-col items-center bg-gradient-to-br from-green-50/50 to-green-100">
      <p className="text-zinc-400 tracking-widest uppercase md:text-base text-sm font-semibold mb-2">
        Servicios
      </p>
      <h1 className="text-3xl md:text-5xl font-serif mb-10 text-zinc-900 drop-shadow-lg text-center">
        Conoce nuestros servicios
      </h1>

      <div className="w-full bg-white/70 border-y-2 border-y-zinc-400/20 border-dashed p-8 min-h-[500px] flex flex-col gap-8 items-center justify-center">
        <div className="flex gap-8 w-full flex-nowrap justify-center">
          {services.slice(0, 4).map(item => (
            <Link
              href={`/detail/${item.name.toLowerCase()}`}
              key={item.name}
              className="bg-white shadow-xl rounded-lg border border-zinc-200 p-0 pb-6 flex flex-col items-center w-80 polaroid hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group"
            >
              <div className="bg-zinc-100 w-full flex justify-center border-b border-zinc-200 rounded-t-lg">
                <Image
                  src={item.image}
                  alt={item.name.toLowerCase()}
                  style={{ objectFit: "contain" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="mt-6 text-zinc-800 font-serif text-xl text-center drop-shadow-sm flex items-center">
                {item.name}
                <FaArrowRight className="text-green-600 text-lg ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-8 w-full flex-nowrap justify-center">
          {services.slice(4).map(item => (
            <Link
              href={`/detail/${item.name.toLowerCase()}`}
              key={item.name}
              className="bg-white shadow-xl rounded-lg border border-zinc-200 p-0 pb-6 flex flex-col items-center w-80 polaroid hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group"
            >
              <div className="bg-zinc-100 w-full flex justify-center border-b border-zinc-200 rounded-t-lg">
                <Image
                  src={item.image}
                  alt={item.name.toLowerCase()}
                  style={{ objectFit: "contain" }}
                  className="rounded-t-lg"
                />
              </div>
              <div className="mt-6 text-zinc-800 font-serif text-xl text-center drop-shadow-sm flex items-center">
                {item.name}
                <FaArrowRight className="text-green-600 text-lg ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    name: "Mosquitos",
    image: Mosquito,
  },
  {
    name: "Alacranes",
    image: Alacran,
  },
  {
    name: "Cucarachas",
    image: Cucaracha,
  },
  {
    name: "Pulgas",
    image: Pulga,
  },
  {
    name: "Palomas",
    image: Palomas,
  },
  {
    name: "Roedores",
    image: Roedores,
  },
  {
    name: "Murcielagos",
    image: Murcielagos,
  },
];


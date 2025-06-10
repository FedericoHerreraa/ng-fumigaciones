"use client";
import { useState } from "react";

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
  const [selectedTab, setSelectedTab] = useState("insectos");

  return (
    <div id="services" className="min-h-[70vh] py-20 flex flex-col items-center bg-gradient-to-br from-green-50/50 to-green-100">
      <p className="text-zinc-400 tracking-widest uppercase font-semibold mb-2">
        Servicios
      </p>
      <h1 className="text-4xl md:text-5xl font-serif mb-10 text-zinc-900 drop-shadow-lg text-center">
        Conoce nuestros servicios
      </h1>

      <div className="w-full max-w-4xl flex justify-center mb-10">
        <div className="inline-flex rounded-full shadow-lg overflow-hidden bg-white">
          {["insectos", "plagaUrbana"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-8 py-4 text-lg font-medium transition-all duration-200 w-100
                ${
                  selectedTab === tab
                    ? "bg-[#579e65] text-white shadow-inner"
                    : "bg-white text-green-700 hover:bg-zinc-100/50 cursor-pointer hover:text-[#579e65]"
                } 
                `}
            >
              {tab === "insectos" && "Control de Insectos"}
              {tab === "plagaUrbana" && "Plagas Urbanas"}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full border-y-2 border-y-zinc-400/50 border-dashed p-8 min-h-[500px] flex flex-col items-center justify-center">
        <div className={`flex flex-col md:flex-row justify-center items-center ${selectedTab === "insectos" ? "gap-18" : "gap-30"}`}>
          {(selectedTab === "insectos" ? insectos : plagasUrbanas).map((item) => {
            const cardContent = (
              <>
                <div className={`bg-zinc-100 w-full flex justify-center border-b border-zinc-200 ${selectedTab === "insectos" ? "rounded-t-lg" : ""}`}>
                  <Image
                    src={item.image}
                    alt={item.name.toLowerCase()}
                    style={{ objectFit: "contain" }}
                    className={selectedTab === "insectos" ? "rounded-t-lg" : "rounded"}
                  />
                </div>
                <div className="mt-6 text-zinc-800 font-serif text-xl text-center drop-shadow-sm flex items-center">
                  {item.name}
                  <FaArrowRight className="text-green-600 text-lg ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </>
            );

            const cardClasses = "bg-white shadow-xl rounded-lg border border-zinc-200 p-0 pb-6 flex flex-col items-center w-80 polaroid hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group";

            return selectedTab === "plagaUrbana" ? (
              <Link
                href={`/detail/${item.name.toLowerCase()}`}
                key={item.name}
                className={cardClasses}
              >
                {cardContent}
              </Link>
            ) : (
              <Link
                href={`/detail/${item.name.toLowerCase()}`}
                key={item.name}
                className={cardClasses}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const insectos = [
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
];

const plagasUrbanas = [
  {
    name: "Palomas",
    image: Palomas,
  },
  {
    name: "Roedores",
    image: Roedores,
  },
  {
    name: "Murciélagos",
    image: Murcielagos,
  },
];

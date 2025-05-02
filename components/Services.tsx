"use client"
import { useState } from "react"
import Image from "next/image";
import Cucaracha from "@/images/cucaracha.png"
import Alacran from "@/images/alacran.png"
import Mosquito from "@/images/mosquito.png"


export const Services = () => {
  const [selectedTab, setSelectedTab] = useState("insectos");

  return (
    <div id="services" className="min-h-[75vh] py-10 flex flex-col items-center">
      <p className="text-zinc-600">Servicios</p>
      <h1 className="text-5xl font-serif mb-6">Conoce nuestros servicios</h1>

      <div className="w-[90vw] grid grid-cols-3">
        {["insectos", "roedores", "faunaUrbana"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`h-20 w-full text-center flex items-center justify-center transition font-medium
              ${selectedTab === tab
                ? "bg-[#579e65] text-white"
                : "bg-green-200 text-zinc-700 hover:text-[#579e65] hover:font-bold"}`}
          >
            {tab === "insectos" && "Insectos"}
            {tab === "roedores" && "Roedores"}
            {tab === "faunaUrbana" && "Control de fauna urbana"}
          </button>
        ))}
      </div>

      <div className="bg-[#579e65] w-[90vw] p-6 text-white min-h-[400px]">
        {selectedTab === "insectos" && (
          <div>
            <div className="flex flex-row gap-4 items-center">
              <Image src={Mosquito} alt="mosquito" width={50}/>
              <div>
                Mosquito
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image src={Alacran} alt="alacran" width={50}/>
              <div>
                Alacran
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <Image src={Cucaracha} alt="cucaracha" width={50}/>
              <div>
                Cucaracha
              </div>
            </div>
          </div>
          
        )}
        {selectedTab === "roedores" && (
          <p>Control y eliminación de roedores en espacios urbanos y rurales.</p>
        )}
        {selectedTab === "faunaUrbana" && (
          <p>Manejo ético de palomas, murciélagos y otras especies de fauna urbana.</p>
        )}
      </div>
    </div>
  );
};

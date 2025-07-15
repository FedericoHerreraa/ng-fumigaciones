import { Values } from "@/components/Values";
import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "NG Desinfecciones | Sobre Nosotros",
  description: "Desinfecciones y limpieza de espacios",
};

export default function AboutUs() {
  return (
    <div>
      <section className="w-full relative min-h-[420px] bg-white  flex items-stretch shadow-lg overflow-hidden">
        <div className="hidden md:block absolute inset-0 w-1/2 h-full z-0">
          <Image
            src='/web/images/salud.png'
            alt="Salud y control ambiental"
            fill
            className="object-cover object-center"
            style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
            priority
            unoptimized={true}
          />
        </div>
        <div className="relative z-10 w-full md:w-1/2 ml-auto flex items-center">
          <div className="bg-white/95  rounded-xl p-8 md:p-12 mx-4 md:mx-8 my-8 md:my-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-green-900 mb-4 text-center">
              Nuestra Meta es la Salud
            </h2>
            <p className="text-zinc-700 text-lg text-center mb-2">
              Nuestra meta es{" "}
              <span className="font-semibold text-green-700">LA SALUD</span>,
              algo primordial para nosotros y para usted, y para ello contamos
              con los mejores productos, efectivizando el menor impacto
              ambiental y humano, los más avanzados equipos de aplicación y de
              un personal idóneo y responsable, permanentemente capacitados por
              nuestro Equipo Técnico que avalan un mejor servicio a través de su
              evaluación, su análisis y seguimiento.
            </p>
            <p className="text-zinc-600 text-center mt-4">
              Esta organización está a su entera disposición, nos sentiremos
              honrados en atenderles y poder asesorarlos en lo que a nuestra
              especialidad se refiere.
            </p>
          </div>
        </div>
      </section>

      <Values />
      <CTA />
    </div>
  );
}

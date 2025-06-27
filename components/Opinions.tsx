"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonios = [
  {
    id: 1,
    nombre: "Ejemplo Consorcio",
    reseña:
      "Contratamos el servicio de fumigación para las áreas comunes del edificio. El equipo trabajó de forma ordenada y eficiente. Los resultados se notaron desde el primer día.",
    className: "h-10 w-9",
  },
  {
    id: 2,
    nombre: "Ejemplo Local Comercial",
    reseña:
      "Realizaron una desinfección completa del local sin interrumpir nuestras actividades. Fueron rápidos, prolijos y muy profesionales. ¡Excelente atención!",
    className: "h-10 w-9",
  },
  {
    id: 3,
    nombre: "Ejemplo Gimnasio",
    reseña:
      "El servicio de desinfección mensual nos ayudó a mantener el espacio seguro para nuestros clientes. Siempre cumplen con los horarios y dejan todo impecable.",
    className: "rounded-xl h-10 w-10",
  },
  {
    id: 4,
    nombre: "Ejemplo Panadería",
    reseña:
      "Teníamos problemas con roedores en el depósito y lo resolvieron en una sola intervención. Además nos dieron recomendaciones claras para prevenir futuros ingresos.",
    className: "rounded-xl h-10 w-10",
  },
];

export const Opinions = () => {
  return (
    <section className="w-full py-16 px-4 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 dark:text-green-200 mb-12 drop-shadow">
          Opiniones de nuestros clientes
        </h2>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from(
              { length: Math.ceil(testimonios.length / 2) },
              (_, index) => {
                const items = testimonios.slice(index * 2, index * 2 + 2);
                return (
                  <CarouselItem key={index}>
                    <div className="flex md:flex-row flex-col items-center justify-center gap-8">
                      {items.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="relative shadow-lg border border-green-100 dark:border-zinc-700 rounded-2xl p-7 flex-1 min-w-[260px] max-w-[350px] bg-[#f9fbf9] dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all hover:scale-105 hover:shadow-2xl"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center justify-center bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-bold rounded-full w-12 h-12 text-xl shadow">
                              {testimonial.nombre[0]}
                            </div>
                            <span className="text-lg font-semibold text-green-900 dark:text-green-200">
                              {testimonial.nombre}
                            </span>
                          </div>
                          <p className="italic text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                            <RiDoubleQuotesL
                              size={22}
                              className="inline mr-1 text-green-700 dark:text-green-400 align-text-top"
                            />
                            {testimonial.reseña}
                            <RiDoubleQuotesR
                              size={22}
                              className="inline ml-1 text-green-700 dark:text-green-400 align-text-bottom"
                            />
                          </p>
                        </div>
                      ))}
                    </div>
                  </CarouselItem>
                );
              }
            )}
          </CarouselContent>
          <CarouselPrevious className="bg-green-100 dark:bg-zinc-800 border-green-300 dark:border-zinc-700 text-green-800 dark:text-green-200 hover:bg-green-200 hover:text-green-900 dark:hover:bg-zinc-700 dark:hover:text-white" />
          <CarouselNext className="bg-green-100 dark:bg-zinc-800 border-green-300 dark:border-zinc-700 text-green-800 dark:text-green-200 hover:bg-green-200 hover:text-green-900 dark:hover:bg-zinc-700 dark:hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

"use client";

import { useEffect, useState, useRef } from "react";
import { FaBug, FaAward } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

// Simple hook para detectar si el contador está en vista
function useInView(ref: React.RefObject<HTMLElement>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

const Counter = ({
  from = 0,
  to,
  plus,
}: {
  from?: number;
  to: number;
  plus?: boolean;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView && count < to) {
      const interval = setInterval(() => {
        setCount((prev) => (prev < to ? prev + 1 : to));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView, to, count]);

  return (
    <p ref={ref} className="md:text-5xl text-3xl font-bold text-green-800">
      {count}
      {plus ? "+" : ""}
    </p>
  );
};

export const Results = () => {
  return (
    <section className="w-full py-20 bg-gray-100 relative">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mb-12 drop-shadow-lg tracking-tight">
          Impacto de Nuestro Trabajo
        </h2>
        <div
          className="bg-white shadow-xl p-8 flex flex-col md:flex-row justify-around items-center gap-10 rounded-2xl"
          style={{
            borderImage: "linear-gradient(90deg, #1b5629, #01950d, #35543c) 1",
            borderStyle: "solid"
          }}
        >
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
            <Counter plus to={80}/>
            <p className="md:text-lg text-green-900 flex items-center gap-2 font-semibold">
              <FaBug /> Plagas eliminadas
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3 border-y md:border-y-0 md:border-x border-green-700 py-6 md:py-0">
            <Counter to={50} plus />
            <p className="md:text-lg text-green-900 flex items-center gap-2 font-semibold">
              <FaSmile /> Clientes felices
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
            <Counter to={10} plus />
            <p className="md:text-lg text-green-900 flex items-center gap-2 font-semibold">
              <FaAward /> Años de experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

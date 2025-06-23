"use client";

import { useEffect, useState } from "react";
import { FaBug, FaAward } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Counter = ({
  from = 0,
  to,
  plus,
}: {
  from?: number;
  to: number;
  plus?: boolean;
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  return (
    <motion.span className="md:text-5xl text-3xl font-bold text-green-800">
      {display}
      {plus ? "+" : ""}
    </motion.span>
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
            borderStyle: "solid",
          }}
        >
          <div className="flex flex-col items-center gap-2 w-full md:w-1/3">
            <Counter plus to={80} />
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

"use client";

import { useEffect, useState, useRef } from "react";
import { FaBug } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
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
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, 0.3);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;
    if (isInView) {
      controls = animate(count, to, {
        duration: 1.5,
        ease: "easeOut",
      });
    } else {
      count.set(from);
    }
    return () => controls?.stop();
  }, [isInView, to, from, count]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v));
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      className="md:text-5xl text-3xl font-bold text-green-800"
    >
      {display}
      {plus ? "+" : ""}
    </motion.span>
  );
};

export const Results = () => {
  return (
    <section className="w-full py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div
          className="bg-white shadow-xl p-8 flex flex-col md:flex-row justify-around items-center gap-10 rounded-2xl"
          style={{
            borderImage: "linear-gradient(90deg, #1b5629, #01950d, #35543c) 1",
            borderStyle: "solid",
          }}
        >
          <div className="flex flex-col items-center gap-2 w-full md:w-1/2">
            <Counter to={25} />
            <p className="md:text-lg text-green-900 flex items-center gap-2 font-semibold">
              <FaBug /> Años de experiencia
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 w-full md:w-1/2 border-y md:border-y-0 md:border-l border-green-700 py-6 md:py-0">
            <Counter to={700} plus />
            <p className="md:text-lg text-green-900 flex items-center gap-2 font-semibold">
              <FaSmile /> Clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

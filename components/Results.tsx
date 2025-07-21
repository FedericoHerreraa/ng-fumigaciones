"use client";

import { FaSmile } from "react-icons/fa";
import { Counter } from "./Counter";


export const Results = () => {
  return (
    <section className="w-full py-10 relative">
      <div className="max-w-3xl mx-auto px-4">
        <div
          className="bg-white shadow-xl p-8 flex flex-col md:flex-row justify-around items-center gap-10 rounded-2xl"
          style={{
            borderImage: "linear-gradient(90deg, #1b5629, #01950d, #35543c) 1",
            borderStyle: "solid",
          }}
        >
          <div className="flex flex-col items-center gap-2 w-full">
            <Counter to={25} plus />
            <p className="md:text-xl text-lg text-green-900 flex items-center gap-2 text-center font-semibold leading-relaxed"> 
              <FaSmile />
              Años de experiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

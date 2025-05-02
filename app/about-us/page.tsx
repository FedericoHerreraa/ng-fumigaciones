
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NG Desinfecciones | Sobre Nosotros",
  description: "Desinfecciones y limpieza de espacios",
};

export default function AboutUs() {
  return (
    <div className="mb-20">
      <h1>Sobre nosotros</h1>
    </div>
  );
}
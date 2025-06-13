import backgroundImage from "@/images/fumigacion2.jpeg";

export const Landing = () => {
  return (
    <section
      className="relative h-[calc(100vh-176px)] min-h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      {/* Overlay oscuro para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-green-900/30 to-black/70 z-0 opacity-50" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-4 ">
        <div className="bg-gradient-to-r from-[#73b170] via-[#4a6b4d] to-[#73b170]/80 px-10 py-6 rounded-2xl shadow-2xl backdrop-blur-sm animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-serif drop-shadow-lg tracking-tight">
            NG Desinfecciones
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-green-100 font-medium drop-shadow">
            Soluciones profesionales en control de plagas para hogares y
            empresas.
          </p>
          <a
            href="#services"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-lg transition-all duration-200"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
};

import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa6";

export const Values = () => (
  <section className="w-full bg-[#39773e] py-14 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-10">
      {/* Misión */}
      <div className="flex-1 flex flex-col items-center text-center px-4">
        <FaBullseye className="text-white text-5xl mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Misión</h3>
        <p className="text-white/90">
          Proteger la salud y el bienestar de nuestros clientes, ofreciendo
          servicios de control de plagas efectivos, seguros y responsables.
        </p>
      </div>
      {/* Visión */}
      <div className="flex-1 flex flex-col items-center text-center px-4 border-y md:border-y-0 md:border-x border-white/20">
        <FaEye className="text-white text-5xl mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Visión</h3>
        <p className="text-white/90">
          Ser la empresa líder en soluciones integrales de control de plagas en
          Argentina, reconocidos por nuestra innovación, ética y compromiso
          ambiental.
        </p>
      </div>
      {/* Valores */}
      <div className="flex-1 flex flex-col items-center text-center px-4">
        <FaHandshake className="text-white text-5xl mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Valores</h3>
        <p className="text-white/90">
          Responsabilidad, honestidad, trabajo en equipo, respeto por el cliente
          y el entorno, y mejora continua en cada servicio.
        </p>
      </div>
    </div>
  </section>
);

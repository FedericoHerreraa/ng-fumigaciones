import {
  FaArrowLeft,
  FaBug,
  FaExclamationTriangle,
  FaMedkit,
  FaShieldAlt,
  FaInfoCircle,
  FaPhone,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import bannerTitulos from "@/images/BannerTitulos.png";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ nameService: string }>;
}) {
  const { nameService } = await params;
  const info = serviceDetails[nameService as keyof typeof serviceDetails];

  if (!info) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            Servicio no encontrado
          </h1>
          <Link
            href="/"
            className="text-green-600 hover:text-green-700 underline"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/30 to-slate-50">
      <div className="relative  text-white overflow-hidden">
         <Image
            src={bannerTitulos}
            alt="Banner"
            fill
            className="object-cover object-center absolute inset-0 z-0"
            priority
          />
        <div className="relative z-10 container mx-auto px-6 py-16 overflow-hidden">
          
          <div className="relative z-10">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <FaArrowLeft size={16} />
              <span>Volver a servicios</span>
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                  <FaBug size={32} />
                </div>
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-2">
                    {info.name}
                  </h1>
                  <p className="text-green-100 text-xl font-light">
                    Control profesional especializado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <FaInfoCircle className="text-green-600" size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Información General
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {info.description}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaExclamationTriangle
                    className="text-orange-600"
                    size={20}
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Síntomas y Riesgos
                </h2>
              </div>
              <div className="space-y-4">
                {info.symptoms.map((symptom, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400"
                  >
                    <FaExclamationTriangle
                      className="text-orange-500 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-gray-700 font-medium">{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaMedkit className="text-blue-600" size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Tratamiento Profesional
                </h2>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {info.treatment}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <FaShieldAlt className="text-green-600" size={20} />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Prevención</h2>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {info.prevention}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-zinc-200 text-green-800 rounded-2xl shadow-xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/80 rounded-full">
                      <FaPhone size={20} />
                    </div>
                    <h3 className="text-2xl font-bold">¿Necesitás ayuda?</h3>
                  </div>
                  <p className="mb-6 text-green-700">
                    Contactanos para una consulta gratuita.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FaPhone size={16} />
                      <span className="font-semibold">4552-1746</span>
                    </div>
                    <div className="text-sm text-green-800">
                      📍 Av. Del Campo 1290, Capital Federal.
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-green-700 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <div className="space-y-3">
                  {[
                    "Experiencia profesional certificada",
                    "Productos seguros y efectivos",
                    "Garantía en todos nuestros servicios",
                    "Atención personalizada 24/7",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <FaCheckCircle
                        className="text-green-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FaExclamationTriangle className="text-red-500" size={20} />
                  <h4 className="font-bold text-red-800">Emergencia</h4>
                </div>
                <p className="text-red-700 text-sm">
                  En caso de picaduras de alacranes, consulte inmediatamente con
                  un médico.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Otros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(serviceDetails)
              .filter(([key]) => key !== nameService)
              .slice(0, 3)
              .map(([key, service]) => (
                <Link
                  key={key}
                  href={`/detail/${key}`}
                  className="group bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                      <FaBug className="text-green-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const serviceDetails = {
  mosquitos: {
    name: "Mosquitos",
    description:
      "Los mosquitos son vectores de enfermedades como dengue, malaria y encefalitis. La hembra necesita alimentarse de sangre para desarrollar sus huevos, los cuales deposita en aguas estancadas.",
    symptoms: [
      "Picazón e irritación en la piel",
      "Posible transmisión de enfermedades como dengue, malaria o encefalitis",
    ],
    treatment:
      "Nebulización con máquinas ULV utilizando insecticidas líquidos como Proteginal y Glacoxan.",
    prevention:
      "Eliminar recipientes con agua estancada. Tapar tanques y canaletas. Colocar mosquiteros en aberturas.",
  },
  alacranes: {
    name: "Alacranes (Escorpiones)",
    description:
      "Invertebrados con hábitos nocturnos que se alojan en zonas urbanas, grietas, desagües y sótanos. Algunas especies como Tityus trivittatus son peligrosas.",
    symptoms: [
      "Dolor intenso en el lugar de la picadura",
      "Posibles síntomas sistémicos en casos graves, especialmente en niños",
    ],
    treatment:
      "Inspección, limpieza y sellado de grietas. Control profesional en caso de infestación.",
    prevention:
      "Usar rejillas sanitarias, burletes, revocar grietas, controlar cámaras y desagües.",
  },
  cucarachas: {
    name: "Cucarachas",
    description:
      "Plaga urbana resistente que habita en zonas oscuras y húmedas. Existen 3 principales especies: oriental, americana y alemana.",
    symptoms: [
      "Contaminación de alimentos",
      "Problemas respiratorios y alergias",
    ],
    treatment:
      "Desinsectación con rociado de piretrinas sintéticas, aplicación de geles insecticidas en zonas críticas.",
    prevention:
      "Servicio mensual de control. Mantener higiene, sellar grietas y vaciar alacenas en zonas infestadas.",
  },
  pulgas: {
    name: "Pulgas",
    description:
      "Insectos hematófagos que afectan a humanos y animales. Se reproducen rápidamente y viven en pisos y alfombras.",
    symptoms: [
      "Ronchas y picazón",
      "Transmisión de enfermedades como la peste",
    ],
    treatment:
      "Control ambiental y recomendaciones específicas para aspirado y limpieza frecuente de pisos.",
    prevention:
      "Desparasitar mascotas, mantener higiene en alfombras y pisos, realizar servicios preventivos periódicos.",
  },
  palomas: {
    name: "Palomas",
    description:
      "No se detalla en el documento, pero suelen ser consideradas plagas por sus excrementos, enfermedades y anidamiento en techos o estructuras.",
    symptoms: [
      "Suciedad en fachadas y techos",
      "Transmisión de enfermedades respiratorias",
    ],
    treatment: "No especificado",
    prevention: "No especificado",
  },
  roedores: {
    name: "Roedores",
    description:
      "Plaga nocturna que deja rastros como excrementos, roeduras y ruidos. Es fundamental detectar signos para su control efectivo.",
    symptoms: ["Contaminación de alimentos", "Propagación de enfermedades"],
    treatment:
      "Uso de cebos rodenticidas, trampas pegamentosas, trampas jaula y conos metálicos.",
    prevention:
      "Sellado de entradas, higiene constante y monitoreo de señales de infestación.",
  },
  murcielagos: {
    name: "Murciélagos",
    description:
      "Mamíferos nocturnos que emiten ultrasonidos y pueden instalarse en edificios. Algunas especies pueden ser portadoras de rabia.",
    symptoms: [
      "Olores por excrementos",
      "Riesgo de histoplasmosis y posible rabia",
    ],
    treatment:
      "Aplicación de repelente, limpieza de excrementos, cierre de accesos con burletes y flejes.",
    prevention:
      "Colocar mosquiteros, burletes de goma, evitar contacto directo, solicitar asistencia profesional.",
  },
};

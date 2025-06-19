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
  const info =
    serviceDetails[nameService.toLowerCase() as keyof typeof serviceDetails];
  console.log(nameService);
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
                  <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    {info.name}
                  </h1>
                  <p className="text-green-100 md:text-xl font-light">
                    Control profesional especializado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:px-6 px-2 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl md:p-8 p-5 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <FaInfoCircle className="text-green-600" size={20} />
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
                  Información General
                </h2>
              </div>
              <div>
                {info.description.split("\n\n").map((parrafo, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-gray-600 leading-relaxed md:text-lg"
                    dangerouslySetInnerHTML={{
                      __html: parrafo.replace(
                        /(Cucaracha alemana|Cucaracha americana|Cucaracha oriental|NG Desinfecciones)/g,
                        "<b>$1</b>"
                      ),
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl md:p-8 p-5 border border-orange-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaExclamationTriangle
                    className="text-orange-600"
                    size={20}
                  />
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
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

            <div className="bg-white rounded-2xl shadow-xl md:p-8 p-5 border border-blue-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-full">
                  <FaMedkit className="text-blue-600" size={20} />
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">
                  Tratamiento Profesional
                </h2>
              </div>
              <div className="bg-blue-50 rounded-xl md:p-6 p-4 border-l-4 border-blue-400">
                <p className="text-gray-700 leading-relaxed md:text-lg">
                  {info.treatment}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl md:p-8 p-5 border border-green-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-full">
                  <FaShieldAlt className="text-green-600" size={20} />
                </div>
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Prevención</h2>
              </div>
              <div className="bg-green-50 rounded-xl md:p-6 p-4 border-l-4 border-green-400">
                <p className="text-gray-700 leading-relaxed md:text-lg">
                  {info.prevention}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-zinc-200 text-green-800 rounded-2xl shadow-xl md:p-8 p-5 relative overflow-hidden">
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
                      <span className="font-semibold">+54 9 11 2349-7999</span>
                    </div>
                    <div className="text-sm text-green-800">
                      📍 Av. Del Campo 1290, Capital Federal.
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-green-700 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    <Link href="/contact-us">Solicitar Presupuesto</Link>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl md:p-6 p-5 border border-gray-100">
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
      "Aparte de la irritación que produce en la piel la picadura de mosquitos, estos pueden transmitir diferentes enfermedades, como malaria, dengue y algunos tipos de encefalitis.\n\n" +
      "Hay muchas especies de mosquitos, cada una con hábitos específicos, pero que comparten ciertas características: todos tienen un ciclo de 4 estadios en su ciclo de vida. La hembra, que es quien realiza las picaduras en animales de sangre caliente, lo hace para desarrollar su aparato reproductor. Luego deposita los huevos en alguna superficie de agua estancada, esta variará según la especie de mosquito.\n\n" +
      "Los huevos eclosionan, permitiendo la salida de las larvas. Estas viven y se alimentan en el agua también. Más tarde pasan al 3° estadio del ciclo que es el de pupa, en este no se alimentan y quedan envueltos en un capullo. Al finalizar este período de desarrollo, emerge el mosquito adulto.\n\n" +
      "Los sitios más comunes donde la hembra deposita los huevos, siempre en aguas estancadas, son: macetas, cubiertas viejas, recipientes, huecos en árboles, piletas, etc.\n\n" +
      "El Aedes es un pequeño insecto de color gris y hábitos domiciliarios ya que habita junto con el hombre en el interior de su vivienda. Se distingue de otras especies por presentar bandas blancas en su abdomen y patas. La hembra debe alimentarse de sangre humana para obtener las proteínas que permiten el desarrollo de los casi 100 huevos que deposita luego de aparearse.",
    symptoms: [
      "Picazón e irritación en la piel",
      "Posible transmisión de enfermedades como dengue, malaria o encefalitis",
    ],
    treatment:
      "Para una mayor eficiencia en los tratamientos, nuestra empresa utiliza máquinas nebulizadoras ULV, que permiten que el producto utilizado alcance todas las superficies afectadas.",
    prevention:
      "Eliminar recipientes con agua estancada. Tapar tanques y canaletas. Colocar mosquiteros en aberturas.",
  },
  alacranes: {
    name: "Alacranes (Escorpiones)",
    description:
      "Los escorpiones o alacranes son invertebrados que viven en la Tierra hace más de 350 millones de años. Existen 16 familias, que a su vez, se diferencian en 1500 especies. Los escorpiones potencialmente peligrosos por la acción de su veneno, pertenecen a la familia Buthidae.\n\n" +
      "En la Argentina esta familia está representada por los géneros Ananteris, Tityus y Zabius. Tityus trivittatus es el género distribuido con más frecuencia en la Argentina. Se caracteriza por tener la cola con doble punta. Se presenta en zonas urbanas, en estrecho contacto con el hombre, tales como sótanos de edificios, cámaras cloacales y hasta rejillas y respiraderos de los baños.\n\n" +
      "Ubicación en los hogares: Tiene hábitos nocturnos, permaneciendo ocultos durante el día en el suelo o entre las cortezas de los árboles. Es frecuente encontrarlos en lugares habitados por el hombre en sitios con maderas caídas, escombros, tejas, ladrillos (ámbito peri domiciliario), pero además los encontramos dentro de las casas en grietas de paredes, pisos, zócalos, huecos de revestimiento de maderas, en desagües que conectan con cloacas, habitaciones y depósitos sin aireación, detrás de cuadros, bajo los muebles o entre la ropa y los zapatos. Se adaptan a la vida dentro o fuera de los hogares, incluso en departamentos de pisos altos, lo que evidencia su hábito domiciliario.\n\n" +
      "Posee mayor actividad durante la noche y se alimenta de artrópodos, especialmente cucarachas.",
    symptoms: [
      "Picadura dolorosa, con posible enrojecimiento e hinchazón.",
      "En casos graves: sudoración, palpitaciones, vómitos, dificultad respiratoria, especialmente en niños y personas sensibles.",
    ],
    treatment:
      "Ante una picadura, consulte inmediatamente con un médico. Mantenga la calma, lave la zona con agua y jabón y evite remedios caseros. El control profesional incluye inspección, limpieza y sellado de grietas y posibles refugios.",
    prevention:
      "Utilizar rejillas sanitarias en desagües de ambientes y sanitarios. Controlar las entradas y salidas de cañerías, aberturas y hendiduras. Colocar burletes o alambre tejido (mosquitero) en puertas y ventanas. Revocar las paredes, reparar grietas en pisos, paredes y techos. Controlar cámaras subterráneas, cañerías, sótanos, huecos de ascensor y oquedades de las paredes.",
  },
  cucarachas: {
    name: "Cucarachas",
    description:
      "Las cucarachas son una de las plagas más difíciles de erradicar y que mejor resistencia tienen para vivir en condiciones adversas, sin agua y sin alimentos durante largos periodos de tiempo. Los espacios favoritos para que estos se escondan sean los rincones oscuros, cálidos y húmedos (como alacenas y bajos mesadas, cámaras cloacales etc.). \n\n" +
      "La familia total de cucarachas abarca más de 4.500 especies, pero son tres de ellas las que realmente constituyen las plagas urbanas: \n\n" +
      "Cucaracha oriental: Es la cucaracha negra o común y puede llegar a medir 3.5 centímetros de largo. El macho tiene unas alas cortas aunque no vuela, y la hembra carece de ellas. \n\n  " +
      "Cucaracha americana: Procede de África y es de color cobrizo, sus medidas pueden llegar a alcanzar los 4.5 centímetros de largo. En este caso, tanto macho como hembra poseen alas, pero solo el primero puede volar.\n\n  " +
      "Cucaracha alemana: Es la más pequeña ya que no supera el centímetro y medio de largo y las que mejor se adapta a convivir con el ser humano. Su color es amarillento, se instalan en grietas de madera, alacenas, bajo mesadas, aparatos eléctricos,  debajo de los azulejos. \n\n  " +
      "Como ya hemos mencionado, las cucarachas son una plaga de difícil erradicación, para esa tarea confiá en los mejores profesionales de NG Desinfecciones.",
    symptoms: [
      "Contaminación de alimentos",
      "Problemas respiratorios y alergias",
    ],
    treatment:
      "Realizamos la desinsectación integral mediante rociado con pulverizadores mecánicos y productos de baja toxicidad, autorizados por el Ministerio de Salud. Estos productos tienen amplio espectro, alto poder residual y son seguros para personas y mascotas. También aplicamos geles insecticidas en zonas sensibles, ideales para ambientes con personas alérgicas o donde no se pueden vaciar alacenas. Recomendamos el servicio mensual para mantener el control y evitar reinfestaciones.",
    prevention:
      "Servicio mensual de control. Mantener higiene, sellar grietas y vaciar alacenas en zonas infestadas.",
  },
  pulgas: {
    name: "Pulgas",
    description:
      "Las pulgas son insectos hematófagos, es decir que se alimentan de la sangre tanto del hombre como de otros animales. El control selectivo de pulgas ayuda a prevenir sus picaduras tanto a nuestras mascotas como a nosotros mismos.\n\n" +
      "Las mordeduras de pulgas pueden ser responsables de alergias y ronchas que generan una sensación de picor muy molesta, pero además transmiten enfermedades.\n\n" +
      "Las pulgas se reproducen con extrema facilidad, es por esto que es necesario mantener libre de pulgas a nuestras mascotas y realizar periódicamente un servicio preventivo en todas nuestras instalaciones.\n\n" +
      "Los técnicos de NG Desinfecciones asesoran siempre a nuestros clientes en un control selectivo de las pulgas, dando recomendaciones de prevención, como por ejemplo: cómo aspirar los pisos de las viviendas y oficinas, para evitar que aniden. La pulga no anida ni pone huevos en nuestras mascotas, solo se alimenta de ellas. Es por ello que no basta con poner una pipeta al animal, debemos cuidar nuestros pisos y alfombras, ya que ahí es dónde viven y se reproducen.",
    symptoms: ["Ronchas y picazón", "Transmisión de enfermedades"],
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
      "RATAS Y SU CONTROL:\n\n" +
      "Toda campaña de control de roedores debe comenzar con un reconocimiento del área a tratar para detectar signos de infestación y los caminos que recorren, ya que la rata es de hábitos nocturnos; huye de la luz y el ruido y tiene sus senderos bien delimitados. Rara vez se ve una rata a la luz del día y es por eso la importancia de los signos que nos indiquen su presencia.\n\n" +
      "Estos son:\n" +
      "1) Deposiciones.\n" +
      "2) Manchas de orina.\n" +
      "3) Huellas en caso de existir polvo, manchas grasosas y pelos.\n" +
      "4) Agujeros en pisos y muros.\n" +
      "5) Nidos y sus materiales.\n" +
      "6) Señales de roeduras en alimentos, papeles y muros.\n" +
      '7) Ruidos de "carreras" y chillidos.\n\n' +
      "Para los tratamientos contra roedores nuestros operadores pueden utilizar, según lo requiera el caso: cebos rodenticidas, trampas de pegamento, conos metálicos contra roedores y tramperas jaula.",
    symptoms: ["Contaminación de alimentos", "Propagación de enfermedades"],
    treatment:
      "CEBOS RODENTICIDAS: El éxito en el uso de los rodenticidas depende de la pericia del operador y del conocimiento del comportamiento de los roedores. Todas las formulaciones están diseñadas para introducir el veneno en el sistema digestivo del animal, ya sea directamente con cebos o indirectamente con formulaciones de contacto. Nuestra empresa utiliza rodenticidas apetecibles cuyo efecto se manifiesta tiempo después de la ingestión, previniendo el 'susto del cebo' y asegurando una buena ingestión. También se emplean cebos peletizados o bloques resistentes a la humedad.\n\n" +
      "TRAMPAS PEGAMENTOSAS: PEGATRAP es una trampa pegamentosa sin veneno, no tóxica, desechable y descartable.\n\n" +
      "CONOS METÁLICOS CONTRA ROEDORES: Armado y colocación de conos metálicos (fabricados a medida) en cableado del edificio, impidiendo el acceso y tránsito de los roedores.",
    prevention:
      "Sellado de entradas, higiene constante y monitoreo de señales de infestación.",
  },
  murcielagos: {
    name: "Murciélagos",
    description:
      "Viven colectivamente; dependiendo de la especie, eligen distintas geografías como terrenos de caza: selvas, bosques, jardines, áreas cultivadas, corrientes de agua y caminos son las más frecuentes. Son fundamentalmente insectívoros, aunque también se nutren de néctares, frutas y, en el caso del denominado vampiro común, sangre de mamíferos.\n\n" +
      "Los murciélagos rara vez atacan al hombre. En ocasiones son plagas, sobre todo cuando instalan sus sitios de residencia en los edificios y existen buenas razones para no tolerar su presencia.\n\n" +
      "Los chillidos que emiten los murciélagos son molestos. Sus excretas y orina causan olores desagradables y persistentes, también pueden manchar paredes y techos, así como atraer a otros insectos y otras colonias de murciélagos, aún cuando la colonia original se haya fragmentado.\n\n" +
      "Además existe el riesgo que alguien entre en contacto con un murciélago rabioso, aunque la mayoría no lo están pero no hay manera de saberlo por su simple apariencia. La acumulación de las excretas de murciélagos en áticos o en el suelo, crea un ambiente favorable para producir la enfermedad pulmonar conocida como Histoplasmosis en gente, gatos, perros y otros animales.\n\n" +
      "Para evitar cualquier inconveniente, debería avisar a una empresa y/o profesional habilitado para que lo ayude con este tema.\n\n" +
      "En caso de mordedura se debe concurrir inmediata y preferiblemente al hospital más cercano o a algún centro especializado en el tratamiento antirrábico, para que el personal médico tome la decisión que corresponda.",
    symptoms: [
      "Olores desagradables por excretas y orina",
      "Manchas en paredes y techos",
      "Riesgo de histoplasmosis y posible rabia",
    ],
    treatment:
      "Evite el contacto directo. Solicite asistencia profesional habilitada para el manejo y control de murciélagos. En caso de mordedura, acuda inmediatamente al hospital o centro antirrábico más cercano.",
    prevention:
      "Colocar telas de mosquiteros y burletes de aluminio con pestaña de goma en posibles puntos de entrada. Mantener cerrados los accesos a áticos y huecos. Ante la presencia de murciélagos, no manipularlos y contactar a profesionales.",
  },
};

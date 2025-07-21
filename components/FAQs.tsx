import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQs = () => {
  return (
    <div
      className="w-full py-16 px-4 relative"
      style={{
        backgroundImage: `url(/web/images/fondoFAQ.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 sm pointer-events-none z-0" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-green-900 drop-shadow-lg tracking-tight">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {questions.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={`rounded-2xl shadow-lg border border-green-200 transition-all hover:shadow-2xl ${
                index === 0 ? "" : "bg-white/80"
              }`}
            >
              <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-green-800 hover:text-green-900 transition-colors cursor-pointer group">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-1 text-gray-700 text-base border-t border-green-100">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};


const questions = [
  {
    id: "item-1",
    question: "¿Qué servicios de desinfección ofrecen?",
    answer: "Sacar la limpieza de oficinas hogares y espacios. Ofrecemos una amplia gama de servicios de desinfección. Nos especializamos en la eliminación efectiva brindando soluciones adaptadas a cada necesidad."
  },
  {
    id: "item-2", 
    question: "¿Cómo puedo solicitar un presupuesto?",
    answer: "Puedes solicitar un presupuesto a través de nuestro sitio web o contactándonos directamente por teléfono o WhatsApp."
  },
  {
    id: "item-3",
    question: "¿Qué productos utilizan en sus servicios?", 
    answer: "Utilizamos productos seguros y efectivos, aprobados por las autoridades sanitarias, para garantizar la salud y seguridad de nuestros clientes."
  },
  {
    id: "item-4",
    question: "¿Realizan servicios de emergencia?",
    answer: "Sí, ofrecemos servicios de emergencia para situaciones críticas que requieren atención inmediata."
  },
  {
    id: "item-5",
    question: "¿Por qué elegir nuestros servicios?",
    answer: "Contamos con técnicos especializados, métodos y productos seguros."
  }
]
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQs = () => {
  return (
    <div className="max-w-2xl mx-auto my-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-green-900 drop-shadow-lg tracking-tight">
        Preguntas Frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem
          value="item-1"
          className="rounded-2xl shadow-lg bg-white/80 border border-green-200 transition-all hover:shadow-2xl"
        >
          <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-green-800 hover:text-green-900 transition-colors cursor-pointer group">
            ¿Qué servicios de desinfección ofrecen?
            
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-1 text-gray-700 text-base border-t border-green-100">
            Ofrecemos una amplia gama de servicios de desinfección, incluyendo
            limpieza de oficinas, hogares, y espacios comerciales, así como
            tratamientos específicos para eliminar plagas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="rounded-2xl shadow-lg bg-white/80 border border-green-200 transition-all hover:shadow-2xl"
        >
          <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-green-800 hover:text-green-900 transition-colors cursor-pointer group">
            ¿Cómo puedo solicitar un presupuesto?
            
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-1 text-gray-700 text-base border-t border-green-100">
            Puedes solicitar un presupuesto a través de nuestro sitio web o
            contactándonos directamente por teléfono o WhatsApp.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="rounded-2xl shadow-lg bg-white/80 border border-green-200 transition-all hover:shadow-2xl"
        >
          <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-green-800 hover:text-green-900 transition-colors cursor-pointer group">
            ¿Qué productos utilizan en sus servicios?
            
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-1 text-gray-700 text-base border-t border-green-100">
            Utilizamos productos seguros y efectivos, aprobados por las
            autoridades sanitarias, para garantizar la salud y seguridad de
            nuestros clientes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="rounded-2xl shadow-lg bg-white/80 border border-green-200 transition-all hover:shadow-2xl"
        >
          <AccordionTrigger className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-green-800 hover:text-green-900 transition-colors cursor-pointer group">
            ¿Realizan servicios de emergencia?
            
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 pt-1 text-gray-700 text-base border-t border-green-100">
            Sí, ofrecemos servicios de emergencia para situaciones críticas que
            requieren atención inmediata.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

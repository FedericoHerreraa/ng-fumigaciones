import { AboutUsComponent } from "@/components/AboutUsComponent";
import { ContactUsController } from "@/app/contact-us/ContactUsController";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NG Desinfecciones | Contacto",
  description: "Desinfecciones y limpieza de espacios",
};

export default function ContactUs() {
  return (
    <div className="mb-20">
      <ContactUsController />
      <AboutUsComponent />
    </div>
  );
}
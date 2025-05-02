import { AboutUsComponent } from "@/components/AboutUsComponent";
import { ContactUsComponent } from "@/app/contact-us/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NG Desinfecciones | Contacto",
  description: "Desinfecciones y limpieza de espacios",
};

export default function ContactUs() {
  return (
    <div className="mb-20">
      <ContactUsComponent />
      <AboutUsComponent />
    </div>
  );
}
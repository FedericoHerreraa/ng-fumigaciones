import { AboutUsComponent } from "@/components/AboutUsComponent";
import { ContactUsComponent } from "@/components/ContactUs";

export default function ContactUs() {
  return (
    <div className="mb-20">
      <ContactUsComponent />
      <AboutUsComponent />
    </div>
  );
}
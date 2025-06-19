import { Landing } from "@/components/Landing";
import { CTA } from "@/components/CTA";
import { AboutUsComponent } from "@/components/AboutUsComponent";
import { Services } from "@/components/Services";
import { FAQs } from "@/components/FAQs";
import { Results } from "@/components/Results";

export default function Home() {
  return (
    <>
      <Landing />
      <CTA />
      <Results />
      <Services />
      <FAQs />
      <AboutUsComponent />
    </>
  );
}

import { Landing } from "@/components/Landing";
import { CTA } from "@/components/CTA";
import { AboutUsComponent } from "@/components/AboutUsComponent";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Landing />
      <CTA />
      <Services />
      <AboutUsComponent />
    </>
  );
}

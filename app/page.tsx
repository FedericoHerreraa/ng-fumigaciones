import { Header } from "@/components/Header";
import { Landing } from "@/components/Landing";
import { CTA } from "@/components/CTA";
import { AboutUsComponent } from "@/components/AboutUsComponent";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <CTA />
      <AboutUsComponent />
      <Services />
    </>
  );
}

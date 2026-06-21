import Department from "@/components/Department";
import Hero2 from "@/components/Hero2";
import Team from "@/components/Team";
import Services from "@/components/Services";
import RendezVous from "@/components/RendezVous";

export default function Home() {
  return (
    <div className="pt-20">
       <Hero2/>
       <Services/>
       <Team/>
       <Department/>
       <RendezVous/>
    </div>
  );
}

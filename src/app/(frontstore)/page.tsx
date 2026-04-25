import { ContactSection, HeroSlider, OurPartners, ProjectSlider, ServiceSection, StatsBar } from "@/features/home/components";
import { getHeroSlides } from "@/lib/actions/home.action";
import { getBusinessAbout } from "@/lib/actions/about.action";
import { getProjects } from "@/lib/actions/projects.action";

import { getPartners } from "@/lib/actions/partner.action";


const Home = async () => {

  const [slides,  businessAbout, projects, partners] = await Promise.all([
    getHeroSlides(),
    getBusinessAbout(),
    getProjects(),
    getPartners(),

  ]);
  
 
  const stats = businessAbout?.stats ?? [];

  return (
    <>
      <HeroSlider slides={slides} />
      <StatsBar stats={stats} />
      <ServiceSection />
      <ProjectSlider projects={projects} />
      <OurPartners partners={partners} />
      <ContactSection />
    </>
  );
};

export default Home;
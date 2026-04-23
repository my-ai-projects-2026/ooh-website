import { ContactSection, HeroSlider, ServiceSection, StatsBar, Testimonials } from "@/features/home/components";
import { getHeroSlides } from "@/lib/actions/home.action";
import { getTestimonials } from "@/lib/actions/testimonials.action";
import { getBusinessAbout } from "@/lib/actions/about.action";

const Home = async () => {
  const [slides, testimonials, businessAbout] = await Promise.all([
    getHeroSlides(),
    getTestimonials(),
    getBusinessAbout(),
  ]);
  console.log("Hero Slides:", slides);
  const stats = businessAbout?.stats ?? [];

  return (
    <>
      <HeroSlider slides={slides} />
      <StatsBar stats={stats} />
      <ServiceSection />
      <Testimonials testimonials={testimonials} />
      <ContactSection />
    </>
  );
};

export default Home;
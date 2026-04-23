import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";
import { getBusinessInfo } from "@/lib/actions/info.action";
import { getServices } from "@/lib/actions/services.action";

const ContactSection = async () => {

  const [{ address, phone, email }, services] = await Promise.all([
    getBusinessInfo(),
    getServices(),
  ]);

  const serviceOptions = services.map((s) => ({
    value: s.slug.current,
    label: s.title,
  }));
  
  return (
    <section className="section-padding bg-[var(--cream)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201,168,76,0.08) 40px, rgba(201,168,76,0.08) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(201,168,76,0.08) 40px, rgba(201,168,76,0.08) 41px)`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/30 to-transparent" />
      </div>

      <div className="container-ooh relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ContactInfo 
          address={address} 
          phone={phone}
          email={email}
          />
	          <ContactForm services={serviceOptions} />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;

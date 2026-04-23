import ContactForm from "@/features/home/components/contacts/contact-form";
import ContactInfo from "@/features/home/components/contacts/contact-info";
import { getBusinessInfo } from "@/lib/actions/info.action";
import { getServices } from "@/lib/actions/services.action";
import { MapPin, Globe, MessageCircle, Camera, Briefcase } from "lucide-react";

interface ContactPageProps {
  address?: string;
  phone?: string;
  email?: string;
  serviceOptions: { value: string; label: string }[];
  socialLinks?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

function ContactPageContent({ address, phone, email, serviceOptions, socialLinks }: ContactPageProps) {
  const socials = [
    { icon: Globe, href: socialLinks?.facebook, label: "Facebook" },
    { icon: MessageCircle, href: socialLinks?.twitter, label: "Twitter" },
    { icon: Camera, href: socialLinks?.instagram, label: "Instagram" },
    { icon: Briefcase, href: socialLinks?.linkedin, label: "LinkedIn" },
  ].filter((s) => s.href);

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[var(--navy)] pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(201,168,76,0.15) 0px, rgba(201,168,76,0.15) 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div className="container-ooh relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Contact Us</span>
            <span className="h-px w-10 bg-[var(--gold)]" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or project in mind? We&apos;d love to hear from you. Our team responds within one business day.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-[var(--surface)]">
        <div className="container-ooh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactInfo address={address} phone={phone} email={email} />
            <ContactForm services={serviceOptions} />
          </div>
        </div>
      </section>

      {/* Map placeholder + Social Links */}
      <section className="py-16 bg-white">
        <div className="container-ooh">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Map placeholder */}
            {address && (
              <div className="rounded-sm overflow-hidden border border-slate-100 shadow-sm h-64 bg-[var(--surface)] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-[var(--gold)] mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">{address}</p>
                </div>
              </div>
            )}

            {/* Social Links */}
            {socials.length > 0 && (
              <div>
                <h3 className="font-heading text-xl font-bold text-[var(--navy)] mb-2">Follow Us</h3>
                <p className="text-slate-500 text-sm mb-6">Stay connected on social media for updates and news.</p>
                <div className="flex gap-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-12 h-12 rounded-sm bg-[var(--surface)] border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[var(--navy)] hover:border-[var(--gold)]/30 transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default async function ContactPageWrapper() {
  const [{ address, phone, email, socialLinks }, services] = await Promise.all([
    getBusinessInfo(),
    getServices(),
  ]);

  const serviceOptions = services.map((s) => ({
    value: s.slug.current,
    label: s.title,
  }));

  return (
    <ContactPageContent
      address={address}
      phone={phone}
      email={email}
      serviceOptions={serviceOptions}
      socialLinks={socialLinks}
    />
  );
}

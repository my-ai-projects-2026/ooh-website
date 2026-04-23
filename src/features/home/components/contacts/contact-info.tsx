import { Mail, MapPin, Phone, Clock } from "lucide-react";

interface ContactInfoProps {
  address?: string;
  phone?: string;
  email?: string;
}

const ContactInfo = ({ address, phone, email }: ContactInfoProps) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-10 bg-[var(--gold)]" />
        <span className="text-[var(--gold)] text-xs tracking-widest uppercase font-semibold">Get In Touch</span>
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--navy)] mb-5">
        Let&apos;s Build Something
        <br />
        <span className="text-[var(--gold-dark)]">Great Together</span>
      </h2>
      <p className="text-slate-500 text-base leading-relaxed mb-10">
        Have a project in mind? We&apos;d love to hear about it. Send us a message and our
        team will respond within one business day.
      </p>

      <div className="space-y-5">
        {address && (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin size={16} className="text-[var(--gold-dark)]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Office Address</p>
              <p className="text-slate-700 text-sm leading-relaxed">{address}</p>
            </div>
          </div>
        )}
        {phone && (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Phone size={16} className="text-[var(--gold-dark)]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Phone Number</p>
              <p className="text-slate-700 text-sm">{phone}</p>
            </div>
          </div>
        )}
        {email && (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Mail size={16} className="text-[var(--gold-dark)]" />
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Email Address</p>
              <p className="text-slate-700 text-sm">{email}</p>
            </div>
          </div>
        )}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-sm bg-[var(--gold)]/10 border border-[var(--gold)]/20 flex items-center justify-center shrink-0 mt-0.5">
            <Clock size={16} className="text-[var(--gold-dark)]" />
          </div>
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Business Hours</p>
            <p className="text-slate-700 text-sm">Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-slate-500 text-xs mt-0.5">Sat: 9:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
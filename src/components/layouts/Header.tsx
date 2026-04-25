
import { Phone } from "lucide-react";
import NavigationComponent from "./NavigationComponent";
import NavMobileComponent from "./NavMobileComponent";
import { getBusinessInfo } from "@/lib/actions/info.action";

export default async function Header() {

  const {email,phone, logo} = await getBusinessInfo();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--cream)] border-b border-[var(--gold)]/20 text-[var(--navy)] text-xs py-2 hidden md:block">
        <div className="container-ooh flex justify-between items-center">
          <span className="flex items-center gap-2 text-[var(--navy)]/70">
            <Phone size={12} className="text-[var(--gold)]" />
            <span>{phone}</span>
            <span className="mx-3 opacity-30">|</span>
            <span>{email}</span>
          </span>
          <span className="text-[var(--navy)]/50">Mon – Fri: 08:00 – 18:00 | Sat: 09:00 – 14:00</span>
        </div>
      </div>

     <NavigationComponent logo={logo} />
     
      
    </>
  );
}

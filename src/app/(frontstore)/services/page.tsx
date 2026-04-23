import ServicesPage from "@/features/services/services-page";
import { getServices } from "@/lib/actions/services.action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore OOH's five core services: Delivery, Solar Installation, Finance Consulting, Web & Mobile Development, and Network Infrastructure.",
};

export default async function ServicesRoute() {
  const services = await getServices();
  return <ServicesPage services={services} />;
}

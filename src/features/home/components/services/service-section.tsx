import { Suspense } from "react";
import { getServices } from "@/lib/actions/services.action";
import ServiceComponent from "./ServiceComponent";

const ServiceSection = async () => {
  const services = await getServices();

  return (
    <Suspense fallback={<div className="text-center py-20 text-gray-400">Loading services…</div>}>
      <ServiceComponent services={services} />
    </Suspense>
  );
};

export default ServiceSection;
import { client } from "@/sanity/lib/client"
import { BUSINESS_INFO } from "@/sanity/lib/queries/info"

export const getBusinessInfo = async () => {
  const info = await client.fetch(BUSINESS_INFO);
  return {
    address: info?.address ?? "",
    phone: info?.phone ?? "",
    email: info?.email ?? "",
    tagline: info?.tagline ?? "",
    socialLinks: info?.socialLinks ?? {},
  };
}
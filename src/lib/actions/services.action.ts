import { client } from "@/sanity/lib/client";
import { SERVICES_QUERY, SERVICE_QUERY } from "@/sanity/lib/queries/services";

export interface Service {
  _id: string;
  title: string;
  slug: { current: string };
  icon?: string;
  shortDescription?: string;
  longDescription?: unknown[];
  features?: string[];
  heroImage?: { asset: { url: string } };
}

export const getServices = async (): Promise<Service[]> => {
  const services = await client.fetch(SERVICES_QUERY, {}, { next: { revalidate: 60 } });
  return services ?? [];
};

export const getService = async (slug: string): Promise<Service | null> => {
  const service = await client.fetch(SERVICE_QUERY, { slug }, { next: { revalidate: 60 } });
  return service ?? null;
};

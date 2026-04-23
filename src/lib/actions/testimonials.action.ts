import { client } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries/testimonials";

export interface Testimonial {
  _id: string;
  name: string;
  position?: string;
  company?: string;
  quote: string;
  rating?: number;
  serviceTag?: string;
  avatar?: { asset: { url: string } };
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const testimonials = await client.fetch(TESTIMONIALS_QUERY, {}, { next: { revalidate: 60 } });
  return testimonials ?? [];
};

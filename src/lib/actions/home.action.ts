import { client } from "@/sanity/lib/client";
import { HERO_SLIDES_QUERY } from "@/sanity/lib/queries/home";

export interface HeroSlide {
  _id: string;
  tag?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  image?: { asset: { url: string } };
}

export const getHeroSlides = async (): Promise<HeroSlide[]> => {
  const slides = await client.fetch(HERO_SLIDES_QUERY, {}, { next: { revalidate: 60 } });
  return slides ?? [];
};

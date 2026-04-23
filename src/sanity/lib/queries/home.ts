import { defineQuery } from "next-sanity";

export const HERO_SLIDES_QUERY = defineQuery(`
  *[_type == "heroSlide"] | order(order asc) {
    _id,
    tag,
    title,
    subtitle,
    ctaLabel,
    ctaHref,
    ctaSecondaryLabel,
    ctaSecondaryHref,
    image {
      asset-> { url }
    }
  }
`);

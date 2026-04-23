import { defineQuery } from "next-sanity";

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    position,
    company,
    quote,
    rating,
    serviceTag,
    avatar {
      asset-> { url }
    }
  }
`);

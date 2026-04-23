import { defineQuery } from "next-sanity";

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    features,
    heroImage {
      asset-> { url }
    }
  }
`);

export const SERVICE_QUERY = defineQuery(`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    icon,
    shortDescription,
    longDescription,
    features,
    heroImage {
      asset-> { url }
    }
  }
`);

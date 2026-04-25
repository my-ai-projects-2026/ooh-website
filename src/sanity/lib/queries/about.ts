import { defineQuery } from "next-sanity";

export const TEAM_QUERY = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    position,
    department,
    bio,
    linkedIn,
    photo {
      asset-> { url }
    }
  }
`);

export const MILESTONES_QUERY = defineQuery(`
  *[_type == "milestone"] | order(order asc) {
    _id,
    year,
    title,
    description
  }
`);

export const BUSINESS_ABOUT_QUERY = defineQuery(`
  *[_type == "businessInfo"][0] {
    address,
    phone,
    email,
    tagline,
    mission,
    vision,
    values,
    stats,
    introduction []{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
    history []{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
    background []{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
    coreValues[] {
      icon,
      title,
      description
    }
  }
`);

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
    coreValues[] {
      icon,
      title,
      description
    }
  }
`);

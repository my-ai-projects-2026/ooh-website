import { client } from "@/sanity/lib/client";
import { TEAM_QUERY, MILESTONES_QUERY, BUSINESS_ABOUT_QUERY } from "@/sanity/lib/queries/about";

export interface TeamMember {
  _id: string;
  name: string;
  position: string;
  department?: string;
  bio?: string;
  linkedIn?: string;
  photo?: { asset: { url: string } };
}

export interface Milestone {
  _id: string;
  year: number;
  title: string;
  description?: string;
}

export interface CoreValue {
  icon?: string;
  title: string;
  description?: string;
}

export interface BusinessAbout {
  address?: string;
  phone?: string;
  email?: string;
  tagline?: string;
  mission?: string;
  vision?: string;
  values?: string;
  stats?: { value: string; label: string }[];
  coreValues?: CoreValue[];
}

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  const members = await client.fetch(TEAM_QUERY, {}, { next: { revalidate: 60 } });
  return members ?? [];
};

export const getMilestones = async (): Promise<Milestone[]> => {
  const milestones = await client.fetch(MILESTONES_QUERY, {}, { next: { revalidate: 60 } });
  return milestones ?? [];
};

export const getBusinessAbout = async (): Promise<BusinessAbout> => {
  const info = await client.fetch(BUSINESS_ABOUT_QUERY, {}, { next: { revalidate: 60 } });
  return info ?? {};
};

import AboutContent from "@/features/about/about-content";
import { getTeamMembers, getMilestones, getBusinessAbout } from "@/lib/actions/about.action";
import { getServices } from "@/lib/actions/services.action";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about OOH — our history, mission, values, and the expert team behind our services in infrastructure, solar, software, and finance.",
};

export default async function AboutPage() {
  const [teamMembers, milestones, businessAbout, services] = await Promise.all([
    getTeamMembers(),
    getMilestones(),
    getBusinessAbout(),
    getServices(),
  ]);

  return (
    <AboutContent
      teamMembers={teamMembers}
      milestones={milestones}
      businessAbout={businessAbout}
      services={services}
    />
  );
}

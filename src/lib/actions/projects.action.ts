import { client } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries/project";


export interface Project {
   title: string;
   slug: string;
   description: string;
   imageUrl: string;
   link: string;
}

export const getProjects = async () => {
   const response = await client.fetch<Project[]>(PROJECT_QUERY,{},{next: { revalidate: 60 }});
   return response;
}
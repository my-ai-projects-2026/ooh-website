import { client } from "@/sanity/lib/client";

import { PARTNER_QUERY } from "@/sanity/lib/queries/partner";

export interface Partner {
   name: string;
   logoUrl: string;
   website: string;
   order: number;
}


export const getPartners = async (): Promise<Partner[]> => {
   const response = await client.fetch<Partner[]>(PARTNER_QUERY, {}, { next: { revalidate: 60 } });
   return response;
}
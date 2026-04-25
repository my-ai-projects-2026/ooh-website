import { defineField, defineType } from "sanity";


export const partnerType = defineType({
   name: "partner",
   title: "Partner",
   type: "document",
   fields: [
    defineField({
      name: "name",
      title: "Partner Name",
      type: "string",
    }),
      defineField({
         name: "logo",
         title: "Partner Logo",
         type: "image",
         options: { hotspot: true },
      }),
      defineField({
         name: "website",
         title: "Partner Website",
         type: "url",
      }),
       defineField({
         name: "order",
         title: "Display Order",
         type: "number",
    }),

   ],
   orderings: [
      {
         name: "displayOrderAsc",
         title: "Display Order (Ascending)",
         by: [{ field: "order", direction: "asc" }],
      },
   ],
   preview: {
      select: { title: "name", media: "logo" },
      prepare({ title, media }) {
         return { title, media };
      }
   }
});
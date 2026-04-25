import { defineField, defineType } from "sanity";


export const projectType = defineType({
   name: "project",
   title: "Project",
   type: "document",
   fields: [
      defineField({ name: "title", title: "Project Title", type: "string" }),
      defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
      defineField({ name: "description", title: "Project Description", type: "text", rows: 4 }),
      defineField({ name: "image", title: "Project Image", type: "image", options: { hotspot: true } }),
      defineField({ name: "link", title: "Project Link", type: "url" }),
   ]
})
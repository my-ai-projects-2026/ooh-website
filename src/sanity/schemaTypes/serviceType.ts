import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";
import { blockContentType } from "./blockContentType";

export const serviceType = defineType({
  name: "service",
  title: "Service",
  icon: CogIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name (Lucide)",
      type: "string",
      description: "Use a valid Lucide icon name e.g. Network, Sun, Code2, TrendingUp, Truck, Cable",
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      description: "Used in service cards on the homepage",
    }),
    defineField({
      name: "longDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description for the services page",
    }),
    defineField({
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points shown on the services page",
    }),
    defineField({
      name: "heroImage",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription", media: "heroImage" },
  },
});

import { defineField, defineType } from "sanity";
import { MobileDeviceIcon } from "@sanity/icons";

export const businessInfoType = defineType({
  name: "businessInfo",
  title: "Business Info",
  icon: MobileDeviceIcon,
  type: "document",
  fields: [
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "address", title: "Address", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "tagline", title: "Company Tagline", type: "string" }),
    defineField({ name: "mission", title: "Mission Statement", type: "text", rows: 4 }),
    defineField({ name: "vision", title: "Vision Statement", type: "text", rows: 4 }),
    defineField({ name: "values", title: "Values", type: "text", rows: 4 }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich-text introduction shown on the About / Home page.",
    }),
    defineField({
      name: "history",
      title: "History",
      type: "array",
      of: [{ type: "block" }],
      description: "Company history — supports headings, bold, lists, links, etc.",
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "array",
      of: [{ type: "block" }],
      description: "Company background & context — supports headings, bold, lists, links, etc.",
    }),
    defineField({
      name: "stats",
      title: "Company Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "coreValues",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Name (Lucide)", type: "string", description: "Lucide icon name e.g. Award, Shield, Users, Target, Eye, Zap" }),
            defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
        defineField({ name: "twitter", title: "Twitter / X URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
      ],
    }),
  ],
});
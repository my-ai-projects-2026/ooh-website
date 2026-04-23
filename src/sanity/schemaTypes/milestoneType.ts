import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const milestoneType = defineType({
  name: "milestone",
  title: "Milestone",
  icon: CalendarIcon,
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: "title",
      title: "Milestone Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
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
    select: { title: "title", subtitle: "year" },
    prepare({ title, subtitle }) {
      return { title, subtitle: String(subtitle) };
    },
  },
});

import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const heroSlideType = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  icon: ImagesIcon,
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Tag / Eyebrow",
      type: "string",
      description: "Short label shown above the headline e.g. 'Infrastructure & Network'",
    }),
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subheading",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaLabel",
      title: "Primary CTA Label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "Primary CTA Link",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryLabel",
      title: "Secondary CTA Label",
      type: "string",
    }),
    defineField({
      name: "ctaSecondaryHref",
      title: "Secondary CTA Link",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Background Image",
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
    select: { title: "title", tag: "tag", media: "image" },
    prepare({ title, tag, media }) {
      return { title, subtitle: tag, media };
    },
  },
});

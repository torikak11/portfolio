import { defineField, defineType } from "sanity";

export default defineType({
  name: "pageInfo",
  title: "PageInfo",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "aboutMe",
      title: "AboutMe",
      type: "text",
    }),
    defineField({
      name: "contactMe",
      title: "ContactMe",
      type: "text",
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    }),
    defineField({
      name: "titles",
      title: "Titles",
      type: "array",
      of: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "backgroundImages",
      title: "BackgroundImages",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
});

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
          fields: [
            {
              name: "alt",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});

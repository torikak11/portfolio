import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          name: "technology",
          title: "Technology",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "gitHubLink",
      title: "GitHubLink",
      type: "url",
    }),
  ],
});

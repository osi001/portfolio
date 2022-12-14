import { Rule } from "postcss";

export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the skill",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "progress",
      title: "Progress",
      description: "progress of skill form 0 to 100",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
};

export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
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
      name: "summary",
      title: "Summarry",
      type: "text",
    },

    {
      name: "linkToBuild",
      title: "LinkToBuild",
      type: "url",
    },
    {
      name: "technologies",
      title: "technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
  ],
};

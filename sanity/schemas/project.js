export default {
  title: "Projects",
  name: "project",

  type: "document",

  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      }
    },
    {
      title: "Description",
      name: "description",
      type: "string"
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }]
    }
  ]
}
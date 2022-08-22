export default {
  title: "Index info",
  name: "index-info",

  type: "document",

  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
    {
      title: "Profile image",
      name: "profile",
      type: "image"
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: "Index page"
      }
    }
  }
}
import preview from "part:sanity-plugin-icon-picker/preview";

export default {
  title: 'Link',
  name: 'link',
  type: "object",
  fields: [
    {
      title: "Link text",
      name: "text",
      type: "string"
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        outputFormat: "react",
      }
    },
    {
      title: "URL",
      name: "url",
      type: "string"
    },
    {
      title: "In header",
      name: "inHeader",
      type: "boolean"
    }
  ],
  preview: {
    select: {
      provider: "icon.provider",
      name: "icon.name",
      text: "text",
      url: "url",
    },
    prepare(icon) {
      console.log(icon)
      return {
        title: icon.text,
        subtitle: icon.url,
        media: preview(icon),
      };
    },
  }
}
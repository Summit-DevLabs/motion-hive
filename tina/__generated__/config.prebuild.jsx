// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "develop";
var config_default = defineConfig({
  branch,
  // Self-hosted configuration - no cloud dependencies
  clientId: "self-hosted",
  token: "self-hosted",
  build: {
    outputFolder: "public/admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};

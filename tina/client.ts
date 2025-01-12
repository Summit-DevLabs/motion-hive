import { createClient } from "tinacms";

export const client = createClient({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  apiUrl: process.env.NEXT_PUBLIC_TINA_API_URL || "http://localhost:4001/graphql",
  tinaGraphQLVersion: "v1",
}); 
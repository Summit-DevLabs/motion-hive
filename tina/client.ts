import { createClient } from "tinacms";

// Ensure we're using the correct branch
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export const client = createClient({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  apiUrl: process.env.NEXT_PUBLIC_TINA_API_URL || "http://localhost:4001/graphql",
  tinaGraphQLVersion: "v1"
}); 
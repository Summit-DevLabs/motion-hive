import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/Users/davidcerniglia/sdl/motion-hive/tina/__generated__/.cache/1754104912699', url: 'http://localhost:4001/graphql', token: 'self-hosted', queries,  });
export default client;
  
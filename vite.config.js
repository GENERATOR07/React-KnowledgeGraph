import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "graph-app",
      filename: "remoteEntry.js",
      exposes: {
        "./graph": "./src/Components/Graph",
      },
      remotes: {
        some: "remote_some",
      },
      shared: ["React"],
    }),
  ],
});

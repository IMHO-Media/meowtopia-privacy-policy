import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e/specs",
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:8080",
    headless: true,
  },
  webServer: {
    command: "npx serve . -p 8080 -s",
    port: 8080,
    reuseExistingServer: true,
    timeout: 30000,
  },
});

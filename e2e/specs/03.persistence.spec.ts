import { test, expect } from "@playwright/test";

// Persistence for a static page means: content survives reload, direct URL
// access, and hard refresh — it always comes from the server unchanged.

test("content persists after page reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy Policy for Meowtopia"
  );
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy Policy for Meowtopia"
  );
});

test("content loads correctly via direct /index.html URL", async ({ page }) => {
  await page.goto("/index.html");
  await expect(page).toHaveTitle("Meowtopia Privacy Policy");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy Policy for Meowtopia"
  );
});

test("Last updated date is visible after reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText(/Last updated/i)).toBeVisible();
  await page.reload();
  await expect(page.getByText(/Last updated/i)).toBeVisible();
});

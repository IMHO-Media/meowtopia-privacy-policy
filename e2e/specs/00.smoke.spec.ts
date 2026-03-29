import { test, expect } from "@playwright/test";

test("page loads with HTTP 200", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
});

test("page title is Meowtopia Privacy Policy", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Meowtopia Privacy Policy");
});

test("h1 heading reads Privacy Policy for Meowtopia", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Privacy Policy for Meowtopia"
  );
});

test("no JavaScript console errors on load", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto("/");
  expect(errors).toHaveLength(0);
});

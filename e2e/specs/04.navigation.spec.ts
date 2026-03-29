import { test, expect } from "@playwright/test";

test("Google Play Services link is present and correct", async ({ page }) => {
  await page.goto("/");
  const link = page.getByRole("link", { name: /Google Play Services/i });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", /policies\.google\.com\/privacy/);
});

test("Unity Analytics link is present and correct", async ({ page }) => {
  await page.goto("/");
  const link = page.getByRole("link", { name: /Unity Analytics/i });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", /unity\.com\/legal\/privacy-policy/);
});

test("all external links open in new tab", async ({ page }) => {
  await page.goto("/");
  const links = page.locator('a[href^="http"]');
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute("target", "_blank");
  }
});

test("page is readable on mobile 375px viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Contact Us/i })).toBeVisible();
});

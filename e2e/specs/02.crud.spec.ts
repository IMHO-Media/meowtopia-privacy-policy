import { test, expect } from "@playwright/test";

// This is a static read-only privacy policy page.
// "CRUD" in this context means: all required content sections are present,
// readable, and render correctly — the full content inventory.

test("all 8 numbered section headings are present", async ({ page }) => {
  await page.goto("/");
  const headings = page.getByRole("heading", { level: 2 });
  await expect(headings).toHaveCount(8);
});

test("Section 1 Information We Collect is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Information We Collect/i })
  ).toBeVisible();
});

test("Section 5 Children's Privacy is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Children's Privacy/i })
  ).toBeVisible();
});

test("no-PII statement is visible", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(/We do not collect personally identifiable information/i)
  ).toBeVisible();
});

test("no-sell statement is visible", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(/We do not sell or rent data/i)
  ).toBeVisible();
});

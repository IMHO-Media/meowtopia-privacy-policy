import { test, expect } from "@playwright/test";

// GATE7.txt behavioral verification for meowtopia-privacy-policy.
// All required policy sections must be visible and correct.

test("Section 2 How We Use Your Information is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /How We Use Your Information/i })
  ).toBeVisible();
});

test("Section 3 Sharing Your Information is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Sharing Your Information/i })
  ).toBeVisible();
});

test("Section 4 Third-Party Services lists Google Play and Unity", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Third-Party Services/i })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Google Play Services/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Unity Analytics/i })).toBeVisible();
});

test("Section 6 Data Security is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Data Security/i })
  ).toBeVisible();
});

test("Section 7 Changes to This Privacy Policy is present", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Changes to This Privacy Policy/i })
  ).toBeVisible();
});

test("Section 8 Contact Us is present with email", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /Contact Us/i })
  ).toBeVisible();
  await expect(page.getByText(/Email:/i)).toBeVisible();
});

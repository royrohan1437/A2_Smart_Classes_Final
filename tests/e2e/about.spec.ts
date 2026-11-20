import { test, expect } from "@playwright/test";

test("About page renders quote, story, images, and enquiry CTA", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/about");

  await expect(page.getByRole("heading", { name: "Our Story" })).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole("heading", { name: "Join Us" })).toBeVisible();

  const images = page.locator("main section").nth(1).locator("img");
  await expect(images).toHaveCount(2);

  await expect(page.getByRole("link", { name: "Enroll Now" })).toHaveAttribute("href", "/enquiry");

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

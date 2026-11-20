import { test, expect } from "@playwright/test";

test("homepage hero renders with nine mobile images", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Build a stronger academic future" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore Courses" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Enroll Now" }).first()).toBeVisible();

  const imageCount = await page.locator("section img").evaluateAll((images) =>
    images.filter((image) => {
      const rect = image.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    }).length,
  );
  expect(imageCount).toBe(9);

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

import { test, expect } from "@playwright/test";

test("homepage preserves hero, story, and featured course section order", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(
    page.getByRole("heading", { name: "Build a stronger academic future" }),
  ).toBeVisible({ timeout: 30_000 });
  await expect(
    page.getByRole("heading", { name: "Learning becomes lasting when guidance feels personal." }),
  ).toBeVisible({ timeout: 30_000 });
  await expect(page.getByRole("heading", { name: "Explore academic pathways" })).toBeVisible();
  await expect(page.getByRole("link", { name: "More Courses" })).toHaveAttribute("href", "/academics");

  await expect(page.getByText("Science", { exact: true })).toBeVisible();
  await expect(page.getByText("Mathematics", { exact: true })).toBeVisible();
  await expect(page.getByText("English", { exact: true })).toBeVisible();

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

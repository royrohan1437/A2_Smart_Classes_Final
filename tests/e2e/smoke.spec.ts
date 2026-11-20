import { test, expect } from "@playwright/test";

test("homepage responds successfully", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page).toHaveTitle(/Create Next App|A2Smart Classes/i);
});

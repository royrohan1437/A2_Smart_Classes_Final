import { expect, test } from "@playwright/test";

test("faculty page explains when no verified profiles are published", async ({ page }) => {
  await page.goto("/faculty");

  await expect(page.getByRole("heading", { name: "Our Faculty" })).toBeVisible();
  await expect(
    page.getByText("Faculty profiles will appear here once they are approved."),
  ).toBeVisible();
});

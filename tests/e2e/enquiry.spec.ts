import { test, expect } from "@playwright/test";

test("homepage enquiry validates and reports unavailable submission honestly", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Begin the next step of your academic journey." }),
  ).toBeVisible({ timeout: 30_000 });

  await page.getByRole("button", { name: "Submit Enquiry" }).click();
  await expect(page.getByText("Enter a valid name.")).toBeVisible();

  await page.getByLabel("Student name").fill("Rahul Roy");
  await page.getByLabel("Class", { exact: true }).selectOption("10");
  await page.getByLabel("Board", { exact: true }).selectOption("CBSE");
  await page.getByLabel("Date of birth").fill("2008-05-10");
  await page.getByLabel("Phone number").fill("9876543210");
  await page.getByLabel("Email address").fill("rahul@example.com");
  await page.getByRole("button", { name: "Submit Enquiry" }).click();

  await expect(
    page.getByText("Enquiry submission is not available until the database enquiry service is configured."),
  ).toBeVisible();
  await expect(page.getByText("Enquiry Submitted Successfully!", { exact: true })).toHaveCount(0);

  await expect(page.getByRole("link", { name: "Admin Access" })).toBeVisible();

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
});

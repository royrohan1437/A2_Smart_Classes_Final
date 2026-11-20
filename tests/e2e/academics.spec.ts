import { join } from "node:path";
import { expect, test } from "@playwright/test";

test("academics directory links a board class to its subject details", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/academics", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveTitle("A2Smart Classes");
  await expect(page.getByRole("heading", { name: "Courses & Academics" })).toBeVisible();
  await expect(page.locator('aside[aria-label="Catalogue notice"]').first()).toContainText(
    "Illustrative catalogue: demo content only.",
  );
  const classLink = page.getByRole("link", { name: "Class 9", exact: true }).first();
  await expect(classLink).toHaveAttribute("href", "/academics/cbse/class-9");
  await classLink.click({ noWaitAfter: true });
  await page.waitForURL(/\/academics\/cbse\/class-9$/, { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { name: "Class 9" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Science" })).toBeVisible();
  await expect(page.getByText("Course mode").first()).toBeVisible();
  await expect(page.getByText("Duration").first()).toBeVisible();
  await expect(page.getByText("Fees").first()).toBeVisible();
  await expect(page.locator('aside[aria-label="Catalogue notice"]').last()).toContainText(
    "Illustrative catalogue: demo content only.",
  );
  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
  if (process.env.T09_SCREENSHOT_DIR) {
    await page
      .locator("img")
      .evaluateAll((images) =>
        Promise.all(
          images.map((image) => (image as HTMLImageElement).decode().catch(() => undefined)),
        ),
      );
    const imageReadiness = await page.locator("img").evaluateAll((images) =>
      images.map((image) => {
        const imageElement = image as HTMLImageElement;
        return {
          alt: imageElement.alt,
          loaded: imageElement.complete && imageElement.naturalWidth > 0,
        };
      }),
    );
    console.log(`T09 screenshot images: ${JSON.stringify(imageReadiness)}`);
    await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
    await page.screenshot({
      path: join(process.env.T09_SCREENSHOT_DIR, "a2-academics-class-desktop.png"),
      fullPage: true,
    });
  }
});

test("academics directory remains usable at mobile width", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/academics", { waitUntil: "domcontentloaded" });

  await expect(page).toHaveTitle("A2Smart Classes");
  await expect(page.getByRole("heading", { name: "Courses & Academics" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Class 9", exact: true }).first()).toBeVisible();

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasOverflow).toBe(false);
  if (process.env.T09_SCREENSHOT_DIR) {
    await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
    await page.screenshot({
      path: join(process.env.T09_SCREENSHOT_DIR, "a2-academics-directory-mobile.png"),
      fullPage: true,
    });
  }
});
